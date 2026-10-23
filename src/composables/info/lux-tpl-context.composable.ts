import { computed, type Component } from 'vue'
import { storeToRefs } from 'pinia'
import i18next from 'i18next'
import { createLuxTplI18n } from '@geoportallux/feature-info-templates'
import type {
  LuxTplI18n,
  LuxTplContext,
  LuxTplNotifyType,
} from '@geoportallux/feature-info-templates'
import { useUserManagerStore } from '@/stores/user-manager.store'
import { useAlertNotificationsStore } from '@/stores/alert-notifications.store'
import { AlertNotificationType } from '@/stores/alert-notifications.store.model'
import { useThemeStore } from '@/stores/config.store'

const NOTIFY_TYPE_MAP: Record<LuxTplNotifyType, AlertNotificationType> = {
  info: AlertNotificationType.INFO,
  warning: AlertNotificationType.WARNING,
  error: AlertNotificationType.ERROR,
}

let luxTplI18nInstance: LuxTplI18n | undefined

/**
 * Return the (memoised) reactive i18n surface for the templates, backed by the
 * app's global i18next singleton. Memoised because {@link createLuxTplI18n}
 * registers i18next event listeners and must run once, not on every mount of
 * the feature-info panel.
 */
export function getLuxTplI18n(): LuxTplI18n {
  if (!luxTplI18nInstance) {
    luxTplI18nInstance = createLuxTplI18n(i18next)
  }
  return luxTplI18nInstance
}

function parseRoleIds(raw: string | undefined): number[] {
  return (raw || '')
    .split(',')
    .map(id => Number.parseInt(id.trim(), 10))
    .filter(id => !Number.isNaN(id))
}

/**
 * Build the {@link LuxTplContext} the feature-info templates rely on, wiring it
 * to the geoportail's stores and environment. Must be called from a component
 * `setup()` (it reads Pinia stores). Pass the elevation-profile component the
 * templates should render when a feature has a profile.
 */
export default function useLuxTplContext(
  profileComponent?: Component
): LuxTplContext {
  const { currentUser } = storeToRefs(useUserManagerStore())
  const { addNotification } = useAlertNotificationsStore()
  const { themes } = storeToRefs(useThemeStore())

  return {
    config: {
      casipoUrl: import.meta.env.VITE_CASIPO_PROD_URL,
      forageVirtuelUrl: import.meta.env.VITE_FORAGE_VIRTUEL_PROD_URL,
      pagUrl: import.meta.env.VITE_PAG_PROD_URL,
      pdsUrl: import.meta.env.VITE_PDS_PROD_URL,
      shopUrl: import.meta.env.VITE_SHOP_URL,
      shopIpv6Url: import.meta.env['VITE_SHOP_IPV6.URL'],
      busWidgetUrl: import.meta.env.VITE_BUS_WIDGET_URL,
      downloadPdfUrl: import.meta.env.VITE_DOWNLOAD_PDF_URL,
      downloadSketchUrl: import.meta.env.VITE_DOWNLOAD_SKETCH_URL,
      downloadMeasurementUrl: import.meta.env.VITE_DOWNLOAD_MEASUREMENT_URL,
      thumbnailMeasurementUrl: import.meta.env.VITE_THUMBNAIL_MEASUREMENT_URL,
      downloadPagReportUrl: import.meta.env.VITE_DOWNLOAD_PAGREPORT_URL,
      downloadResourceUrl: import.meta.env.VITE_DOWNLOAD_RESOURCE_URL,
      downloadPreviewUrl: import.meta.env.VITE_DOWNLOAD_PREVIEW_URL,
      qrUrl: import.meta.env.VITE_QR_URL,
      v3ApiHost: import.meta.env.VITE_V3_API_HOST,
      solarEconomicAllowedRoleIds: parseRoleIds(
        import.meta.env.VITE_SOLAR_ECONOMIC_ALLOWED_ROLE_IDS
      ),
    },
    user: computed(() => {
      const u = currentUser.value
      return u ? { mail: u.mail, roleId: u.roleId } : null
    }),
    notify: (message, type = 'info') =>
      addNotification(message, NOTIFY_TYPE_MAP[type]),
    profileComponent,
    isThemeAvailable: (name: string) =>
      themes.value?.some(theme => theme.name === name) ?? false,
  }
}
