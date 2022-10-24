interface Lang {
  fr: string
  en: string
  de: string
  lb: string
}

export function isoLang2To3(code: string): string {
  const lang: Lang = {
    fr: 'fre',
    en: 'eng',
    de: 'ger',
    lb: 'ltz',
  }
  return lang[code as keyof Lang]
}

export function stringToHtml(str: string): HTMLElement {
  const parser = new DOMParser()
  const doc = parser.parseFromString(str, 'text/html')
  return doc.body
}
