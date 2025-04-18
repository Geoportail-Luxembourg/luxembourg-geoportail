import { useTranslation } from 'i18next-vue'
import { Ref, ref } from 'vue'
import { printService } from '@/services/print/print.service'
import { PrintOptions } from '@/services/print/print.model'
import useMap from '@/composables/map/map.composable'
import { useJobStatus } from './jobStatus.composable'
import { getQRUrl, INFO_PROJECTIONS } from '@/services/info/location-info'
import {
  formatAddress,
  formatCoords,
  formatElevation,
  formatLength,
} from '@/services/common/formatting.utils'
import { useLocationInfoStore } from '@/stores/location-info.store'
import { storeToRefs } from 'pinia'

export function usePrint() {
  const { t } = useTranslation()
  const { startPolling, clearPolling, url, error, loading } = useJobStatus()
  const { locationInfoCoords, locationInfoInfos } = storeToRefs(
    useLocationInfoStore()
  )
  const map = useMap().getOlMap()
  const printingRef: Ref<string | null> = ref(null)

  async function print(options: PrintOptions) {
    const printOptions = {
      ...{
        disclaimer: t(
          "www.geoportail.lu est un portail d'accès aux informations géolocalisées, données et services qui sont mis à disposition par les administrations publiques luxembourgeoises. Responsabilité: Malgré la grande attention qu’elles portent à la justesse des informations diffusées sur ce site, les autorités ne peuvent endosser aucune responsabilité quant à la fidélité, à l’exactitude, à l’actualité, à la fiabilité et à l’intégralité de ces informations. Information dépourvue de foi publique. \nDroits d'auteur: Administration du Cadastre et de la Topographie. http://g-o.lu/copyright"
        ),
        scaleTitle: t('Echelle approximative 1:'),
        appTitle: t('Le géoportail national du Grand-Duché du Luxembourg', {
          ns: 'app',
        }),
        dateText: t("Date d'impression:"),
        queryResults: buildQueryResults(),
      },
      ...options,
    }
    const spec = await printService.getSpec(printOptions, map)

    try {
      const reportResponse = await printService.print(spec, options.format)
      printingRef.value = reportResponse.ref
      startPolling(reportResponse.statusURL)
    } catch {
      printingRef.value = null
      error.value = true
      clearPolling()
    }
  }

  /**
   * Build the `queryResults` param content to display location or feature infos.
   * In the pdf export only, will be ignored if png export.
   * @see `buildQueryResultsLocationInfo()` and `buildQueryResultsFeaturesInfo()`
   * @returns The html for locationInfoForPrint and/or featuresInfoForPrint if any
   */
  function buildQueryResults() {
    const locationInfoForPrint = buildQueryResultsLocationInfo()
    const featuresInfoForPrint = buildQueryResultsFeaturesInfo()

    return locationInfoForPrint + '' + featuresInfoForPrint
  }

  /**
   * Cancel print job and clear polling
   */
  async function abortPrint() {
    if (printingRef.value) {
      await printService.cancel(printingRef.value)
      printingRef.value = null
      clearPolling()
    }
  }

  function buildQueryResultsLocationInfo() {
    if (!locationInfoCoords.value) {
      return
    }

    const formattedCoordinates = Object.fromEntries(
      Object.entries(INFO_PROJECTIONS).map(([crs, label]) => [
        label,
        formatCoords(
          locationInfoCoords.value!,
          map.getView().getProjection(),
          crs
        ),
      ])
    )
    const infos = locationInfoInfos.value!
    const qrUrl = getQRUrl(locationInfoInfos.value!.shortUrl)
    const imgQrl = qrUrl ? `<img src="${qrUrl}" />` : ''

    return `
    ${imgQrl}
    <h3>${t('Location Coordinates')}</h3>
<table>
<tbody>
    ${Object.entries(formattedCoordinates)
      .map(
        ([label, coords]) => `
    <tr>
        <th>${t(label)}</th>
        <td>${coords}</td>
    </tr>
    `
      )
      .join('')}
    <tr>
        <th>${t('Elevation')}</th>
        <td>${
          infos.elevation === null ? 'N/A' : formatElevation(infos.elevation)
        }</td>
    </tr>
    <tr>
        <th style="text-align: left">${t('Adresse la plus proche')}</th>
        <td>${formatAddress(infos.address)}</td>
    </tr>
    <tr>
        <th style="text-align: left">${t('Distance approximative')}</th>
        <td>${formatLength(infos.address?.distance || null, 0)}</td>
    </tr>
</tbody>
</table>`
  }

  function buildQueryResultsFeaturesInfo() {}

  return { print, abortPrint, url, error, loading }
}
