import { UrlStorage } from './storage/url-storage'

export const SP_KEY_IPV6 = 'ipv6' // TODO:
export const SP_KEY_ADDRESS = 'address'
export const SP_KEY_APPLOGIN = 'applogin' // TODO:
export const SP_KEY_LOCALFORAGE = 'localforage' // TODO:
export const SP_KEY_DEBUG = 'debug' // TODO:
export const SP_KEY_EMBEDDED = 'embedded' // Embedded Map mode (no header, no toolbar)
export const SP_KEY_EMBEDDED_SERVER = 'embeddedserver'
export const SP_KEY_EMBEDDED_SERVER_PROTOCOL = 'embeddedserverprotocol'
export const SP_KEY_FEATURES = 'features'
export const SP_KEY_FID = 'fid' // TODO:
export const SP_KEY_LANG = 'lang'
export const SP_KEY_LAYERS_OPEN = 'layersOpen'
export const SP_KEY_VERSION = 'version'
export const SP_KEY_MAPID = 'map_id'
export const SP_KEY_LAYERS = 'layers'
export const SP_KEY_BGLAYER = 'bgLayer'
export const SP_KEY_OPACITIES = 'opacities'
export const SP_KEY_THEME = 'theme'
export const SP_KEY_TIME_SELECTIONS = 'time' // !!! Separator is "--"?
export const SP_KEY_ZOOM = 'zoom'
export const SP_KEY_ROTATION = 'rotation'
export const SP_KEY_SRS = 'SRS' // TODO:
export const SP_KEY_X = 'X'
export const SP_KEY_Y = 'Y'
export const SP_KEY_CROSSHAIR = 'crosshair'
export const SP_KEY_SERIAL = 'serial'
export const SP_KEY_SERIAL_LAYERS = 'serialLayer'
export const SP_KEYS_STYLE = [
  'basemap_2015_global',
  'topogr_global',
  'topo_bw_jpeg',
]
export const SP_KEY_LAYERCOMPARATOR = 'lc'
export const SP_KEY_LAYERCOMPARATOR_SLIDERRATIO = 'sliderRatio'

// Keys for version 2, legacy
export const SP_KEY_V2_BGLAYEROPACITY = 'bgOpacity' // Unused, just for legacy permalink
export const SP_KEY_V2_LAYERSINDICIES = 'layers_indices' // TODO: // Unused
export const SP_KEY_V2_LAYERSOPACITIES = 'layers_opacity'
export const SP_KEY_V2_LAYERSVISIBILITY = 'layers_visibility'

export enum SP_AVAILABLE_STORAGES {
  localStorage = 0,
  permalink = 1,
  permalinkAsPath = 2,
  permalinkAndLocalStorage = 3, // (both permalink and localStorage, permalinkAsPath excluded)
}

export type ParamKeys = { [key: string]: string }
export type StatePersistorStorage = Storage | UrlStorage

export abstract class StatePersistorRulesHelper {
  /**
   * Process rules for the entire context (keys/values) first.
   * eg. the entire url string
   * @param paramKeys
   */
  abstract processRules(paramKeys: ParamKeys): SP_AVAILABLE_STORAGES | undefined

  /**
   * Process rules on the key/value only, called after processRules on the entire context
   * @param key
   * @param paramKeys
   */
  abstract processRulesForKey(
    key: string,
    paramKeys: ParamKeys
  ): SP_AVAILABLE_STORAGES | undefined
}

export interface StatePersistorService {
  bootstrap(): void
  persist(): void
  restore(): void
}
