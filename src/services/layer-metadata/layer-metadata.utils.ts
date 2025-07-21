import { ResponsibleParty } from './layer-metadata.model'

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
  return lang[code.toLowerCase() as keyof Lang]
}

export function stringToHtml(str: string): HTMLElement {
  const parser = new DOMParser()
  const doc = parser.parseFromString(str, 'text/html')
  return doc.body
}

export function getMetadataLinks(link: string | string[]): string[] {
  const links: string[] = []
  function splitLink(link: string) {
    if (!link) {
      return
    }

    const currentLink = link.split('|')
    if (
      currentLink[3] === 'WWW:LINK-1.0-http--link' &&
      links.indexOf(currentLink[2]) === -1
    ) {
      links.push(currentLink[2])
    }
  }
  if (Array.isArray(link)) {
    link.forEach(splitLink, link)
  } else {
    splitLink(link)
  }
  return links
}

export function getResponsibleParty(
  responsibleParty: string | string[]
): ResponsibleParty {
  const pocs = Array.isArray(responsibleParty)
    ? responsibleParty
    : [responsibleParty]
  // Filter out not only metadata but also resource types
  const poc = pocs.filter(poc => {
    const type = poc.split('|')[1]
    return type === 'metadata' || type === 'resource'
  })
  if (poc.length === 0) {
    return {
      organisaton: '',
      name: '',
      unknown: '',
      address: '',
      email: '',
    }
  }
  return {
    organisaton: poc[0].split('|')[2],
    name: poc[0].split('|')[5],
    unknown: poc[0].split('|')[6],
    address: poc[0].split('|')[7],
    email: poc[0].split('|')[4],
  }
}
