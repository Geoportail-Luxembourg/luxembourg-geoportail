import { TOptions } from 'i18next'
import { useTranslation } from 'i18next-vue'
import { $Dictionary } from 'i18next/typescript/helpers'

/**
 * Translate legacy _V3 text
 * eg: from getLegendHtml, server returns html to be translated with angular directive "<h4 translate>Rigoles d&#39;érosion identifiées</h4>"
 * @returns The html, parsed and translated
 */
export function useTranslateParser() {
  const { t } = useTranslation()

  const translate = (htmlContent: string, options?: TOptions & $Dictionary) => {
    const parser = new DOMParser()
    const doc = parser.parseFromString(htmlContent, 'text/html')
    const elements = doc.querySelectorAll('[translate]')

    elements.forEach(el => {
      const key = <string>el.textContent?.trim()

      if (key) {
        el.textContent = <string>t(key, options)
        el.removeAttribute('translate')
      }
    })

    return new XMLSerializer().serializeToString(doc)
  }

  return { translate }
}
