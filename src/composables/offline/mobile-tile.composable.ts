import { ref, readonly } from 'vue'
import { urlStorage } from '@/services/state-persistor/storage/url-storage'
import {
  SP_KEY_EMBEDDED_SERVER,
  SP_KEY_EMBEDDED_SERVER_PROTOCOL,
} from '@/services/state-persistor/state-persistor.model'
import {
  MobileTileStatus,
  MobileTilePackageToSkip,
  type MobileTilePackages,
  type MobileTileStatusJson,
} from './mobile-tile.model'

// Singleton state — shared across all composable calls
const status = ref<MobileTileStatus>(MobileTileStatus.UNINITIALIZED)
const tileError = ref<boolean>(false)
const hasLocalServer = ref<boolean>(false)

let tilePackages: MobileTilePackages = {
  ALL: [],
  IN_PROGRESS: [],
  UPDATE_AVAILABLE: [],
  UP_TO_DATE: [],
  UNAVAILABLE: [],
}
let baseURL = ''
let checkTimeoutId: ReturnType<typeof setTimeout> | undefined

/**
 * Compare two semver-like version strings (e.g. "0.1.0" vs "0.5.2").
 * Returns true if current is strictly older than available.
 */
function isOlderVersion(current: string, available: string): boolean {
  const toparts = (v: string) => v.split('.').map(n => parseInt(n, 10))
  const [cMajor, cMinor, cPatch] = toparts(current)
  const [aMajor, aMinor, aPatch] = toparts(available)
  if (cMajor !== aMajor) return cMajor < aMajor
  if (cMinor !== aMinor) return cMinor < aMinor
  return cPatch < aPatch
}

function initBaseUrl() {
  const server = urlStorage.getItem(SP_KEY_EMBEDDED_SERVER)
  const proto = urlStorage.getItem(SP_KEY_EMBEDDED_SERVER_PROTOCOL) || 'http'
  hasLocalServer.value = !!server
  // For management endpoints (/check, /map/*), strip the path and use only the host
  if (server) {
    const hostOnly = server.split('/')[0]
    baseURL = `${proto}://${hostOnly}`
  } else {
    baseURL = 'http://localhost:8766'
  }
}

/**
 * Parse the /check response and update reactive status.
 *
 * Logic:
 * - At startup the app compares current vs available versions for each package.
 * - If current < available  → UPDATE_AVAILABLE  (trigger download)
 * - If all current >= available → UP_TO_DATE    (local server can be used directly)
 * - While downloading        → IN_PROGRESS      (re-poll every 2.5 s)
 * - UNAVAILABLE packages     → treated as error
 */
function setStatus(statusJson: MobileTileStatusJson) {
  tilePackages = {
    ALL: [],
    IN_PROGRESS: [],
    UPDATE_AVAILABLE: [],
    UP_TO_DATE: [],
    UNAVAILABLE: [],
  }

  for (const tileKey in statusJson) {
    // hillshade-lu is too large — always skip
    if (tileKey === MobileTilePackageToSkip.HILLSHADE) continue

    const pkg = statusJson[tileKey]
    tilePackages.ALL.push(tileKey)

    if (!pkg.available) {
      tilePackages.UNAVAILABLE.push(tileKey)
    } else if (pkg.status === MobileTileStatus.IN_PROGRESS) {
      tilePackages.IN_PROGRESS.push(tileKey)
    } else if (!pkg.current || isOlderVersion(pkg.current, pkg.available)) {
      tilePackages.UPDATE_AVAILABLE.push(tileKey)
    } else {
      tilePackages.UP_TO_DATE.push(tileKey)
    }
  }

  if (tilePackages.UNAVAILABLE.length > 0) {
    handleError('AVAILABLE FALSY')
  } else if (tilePackages.IN_PROGRESS.length > 0) {
    status.value = MobileTileStatus.IN_PROGRESS
    scheduleRecheck(2500)
  } else if (tilePackages.UPDATE_AVAILABLE.length > 0) {
    // If we were IN_PROGRESS and now get UPDATE_AVAILABLE → error (download failed)
    if (status.value === MobileTileStatus.IN_PROGRESS) {
      handleError('IN_PROGRESS => UPDATE_AVAILABLE')
    } else {
      status.value = MobileTileStatus.UPDATE_AVAILABLE
    }
  } else {
    status.value = MobileTileStatus.UP_TO_DATE
  }
}

function handleError(error: Error | string, silent = false) {
  if (!silent) {
    tileError.value = true
  }

  clearTimeout(checkTimeoutId)
  checkTimeoutId = undefined

  // Move IN_PROGRESS / UNAVAILABLE packages back to UPDATE_AVAILABLE so the
  // user can retry
  if (tilePackages.IN_PROGRESS.length > 0) {
    tilePackages.UPDATE_AVAILABLE = [...tilePackages.IN_PROGRESS]
    tilePackages.IN_PROGRESS = []
  }
  if (tilePackages.UNAVAILABLE.length > 0) {
    tilePackages.UPDATE_AVAILABLE = [...tilePackages.UNAVAILABLE]
    tilePackages.UNAVAILABLE = []
  }

  status.value = MobileTileStatus.UPDATE_AVAILABLE
}

/**
 * Poll GET /check to retrieve the version status of all tile packages.
 * Defined at module scope so it can be referenced by scheduleRecheck.
 * @param silent - if true, errors won't set tileError (used on menu open)
 */
function checkTiles(silent = false) {
  tileError.value = false
  fetch(`${baseURL}/check`)
    .then(r => r.json())
    .then((json: MobileTileStatusJson) => setStatus(json))
    .catch((err: Error) => handleError(err, silent))
}

function scheduleRecheck(delay: number) {
  if (checkTimeoutId !== undefined) {
    clearTimeout(checkTimeoutId)
  }
  checkTimeoutId = setTimeout(() => checkTiles(), delay)
}

export default function useMobileTile() {
  /**
   * Initialize the service.
   * Called once at app startup when ?embeddedserver= is present in the URL.
   * Automatically kicks off the first /check to detect outdated packages.
   */
  function init() {
    initBaseUrl()
    if (hasLocalServer.value) {
      checkTiles()
    }
  }

  /**
   * Trigger download of all packages that are outdated.
   * The local server fetches tiles from vectortiles.geoportail.lu and stores
   * them on the device filesystem.
   */
  function updateTiles() {
    tilePackages.UPDATE_AVAILABLE.forEach(pkg => sendRequest(pkg, 'PUT'))
  }

  /**
   * Delete all locally stored tile packages.
   */
  function deleteTiles() {
    tilePackages.ALL.forEach(pkg => sendRequest(pkg, 'DELETE'))
  }

  function sendRequest(pkg: string, method: 'PUT' | 'DELETE') {
    fetch(`${baseURL}/map/${pkg}`, { method })
      .then(() => {
        // Request successful
      })
      .catch((err: Error) => handleError(err))
      .finally(() => {
        if (method === 'DELETE') {
          // Optimistically mark deleted packages as requiring update
          if (tilePackages.UP_TO_DATE.length > 0) {
            tilePackages.UPDATE_AVAILABLE = [...tilePackages.UP_TO_DATE]
            tilePackages.UP_TO_DATE = []
          }
          status.value = MobileTileStatus.DELETED
        } else {
          // Start polling to track download progress
          scheduleRecheck(250)
        }
      })
  }

  return {
    /** Reactive tile sync status */
    status: readonly(status),
    /** Reactive error flag — true when a download/network error occurred */
    tileError: readonly(tileError),
    /** True when ?embeddedserver= URL param is present */
    hasLocalServer: readonly(hasLocalServer),
    init,
    checkTiles,
    updateTiles,
    deleteTiles,
  }
}
