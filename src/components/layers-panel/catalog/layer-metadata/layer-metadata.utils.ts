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

export function getMetadataLinks(link: string | string[]) {
  const links = []
  function splitLink(link: string) {
    const currentLink = link.split('|')
    if (
      currentLink[3] === 'WWW:LINK-1.0-http--link' &&
      links.indexOf(currentLink[2]) === -1
    ) {
      links.push(currentLink[2])
    }
  }
  if (Array.isArray(link)) {
    link.forEach(splitLink, this)
  } else {
    splitLink(link)
  }
  return links
}
