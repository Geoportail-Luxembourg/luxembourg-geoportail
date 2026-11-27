import { computed } from 'vue'
import { storeToRefs } from 'pinia'
import i18next from 'i18next'
import { createLuxTplI18n } from '@geoportallux/feature-info-templates'
import { Feature } from 'ol'
import { Geometry } from 'ol/geom'
import GeoJSON from 'ol/format/GeoJSON'
import type {
  FeatureJSON,
  LuxTplI18n,
  LuxTplContext,
  LuxTplNotifyType,
} from '@geoportallux/feature-info-templates'
import { useUserManagerStore } from '@/stores/user-manager.store'
import { useAlertNotificationsStore } from '@/stores/alert-notifications.store'
import { AlertNotificationType } from '@/stores/alert-notifications.store.model'
import { useThemeStore } from '@/stores/config.store'
import useMap, { PROJECTION_LUX } from '@/composables/map/map.composable'
import {
  exportFeatureService,
  FeatExport,
} from '@/services/export-feature/export-feature.service'
import useLuxTplProfileMapAdapter from '@/composables/info/lux-tpl-profile-map-adapter.composable'

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

function exportFeature(feature: FeatureJSON, format: 'kml' | 'gpx') {
  const map = useMap().getOlMap()
  if (feature.attributes && !feature.properties) {
    feature.properties = feature.attributes as unknown as Record<
      string,
      unknown
    >
  }
  const olFeature = new GeoJSON().readFeature(feature, {
    dataProjection: PROJECTION_LUX,
    featureProjection: map.getView().getProjection(),
  })
  exportFeatureService.export(
    map,
    format,
    <FeatExport>[<Feature<Geometry>>olFeature],
    feature.attributes.name || format,
    true
  )
}

/**
 * Build the {@link LuxTplContext} the feature-info templates rely on, wiring it
 * to the geoportail's stores and environment. Must be called from a component
 * `setup()` (it reads Pinia stores and the map).
 */
export default function useGeoportailLuxTplContext(): LuxTplContext {
  const { currentUser } = storeToRefs(useUserManagerStore())
  const { addNotification } = useAlertNotificationsStore()
  const { themes } = storeToRefs(useThemeStore())

  return {
    user: computed(() => {
      const u = currentUser.value
      return u ? { mail: u.mail, roleId: u.roleId } : null
    }),
    notify: (message, type = 'info') =>
      addNotification(message, NOTIFY_TYPE_MAP[type]),
    profileMapAdapter: useLuxTplProfileMapAdapter(),
    featureLink: fid => `${window.location.href}&fid=${fid}`,
    exportFeature,
    isThemeAvailable: (name: string) =>
      themes.value?.some(theme => theme.name === name) ?? false,
  }
}
