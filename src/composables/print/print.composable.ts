import { useTranslation } from 'i18next-vue'
import { Ref, ref } from 'vue'
import { storeToRefs } from 'pinia'
import useMap from '@/composables/map/map.composable'
import { printService } from '@/services/print/print.service'
import { PrintOptions } from '@/services/print/print.model'
import { usePrintStore } from '@/stores/print.store'
import { useLocationInfoStore } from '@/stores/location-info.store'
import { useJobStatus } from './jobStatus.composable'

/**
 * This composable is in charge of the print functionality in Lux.
 * It uses the jobstatus composable to handle polling and print service to call the print api.
 * It also allows the user to stop the printing  job at anytime.
 *
 * The print composable is also able to print:
 * - feature info available in the panel,
 * - as well as location info
 * by getting the generated html content of the components.
 *
 * To exclude any DOM element from the print result, just use `no-print` css class.
 */
export function usePrint() {
  const { t } = useTranslation()
  const { featureInfoPrintableRef, locationInfoPrintableRef } = storeToRefs(
    usePrintStore()
  )
  const { locationInfoCoords } = storeToRefs(useLocationInfoStore())
  const { startPolling, clearPolling, url, error, loading } = useJobStatus()
  const map = useMap().getOlMap()
  const printingRef: Ref<string | null> = ref(null)

  async function print(options: PrintOptions) {
    const queryResults = await buildQueryResults()
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
        queryResults,
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
    const locationInfoForPrint = getLocationInfoHtml()
    const featuresInfoForPrint = getFeaturesInfoHtml()

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

  function getLocationInfoHtml() {
    if (!locationInfoCoords.value || !locationInfoPrintableRef.value) return ''
    return cleanHtml(locationInfoPrintableRef.value)
  }

  function getFeaturesInfoHtml() {
    if (locationInfoCoords.value || !featureInfoPrintableRef.value) return ''
    return cleanHtml(featureInfoPrintableRef.value)
  }

  /**
   * Remove all nodes in given node having css class: `.no-print`
   * @param node HTMLElement
   * @returns The node without no print elements
   */
  function cleanHtml(node: HTMLElement) {
    const clone = <HTMLElement>node.cloneNode(true)
    const cleanNodes = clone.querySelectorAll('[data-cy], [v-]')

    cleanNodes.forEach(node => {
      node.removeAttribute('data-cy')
      node.removeAttribute('v-')
    })

    const noPrintElements = clone.querySelectorAll('.no-print')
    noPrintElements.forEach(el => el.remove())

    return clone.innerHTML
  }

  return { print, abortPrint, url, error, loading }
}
