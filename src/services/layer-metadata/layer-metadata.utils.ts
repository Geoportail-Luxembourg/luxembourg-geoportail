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

  const pushUnique = (value: string) => {
    if (value && links.indexOf(value) === -1) {
      links.push(value)
    }
  }
  function splitLink(link: string) {
    if (!link) {
      return
    }

    const [labelPart = '', rest = ''] = link.split('||')
    const isApiFormat = link.includes('||') && !labelPart.includes('|')

    if (isApiFormat && rest.includes('|')) {
      const firstPipeIndex = rest.indexOf('|')
      const url = rest.slice(0, firstPipeIndex).trim()
      const [serviceType = ''] = rest.slice(firstPipeIndex + 1).split('|')
      const trimmedServiceType = serviceType.trim()

      if (url && trimmedServiceType) {
        pushUnique(`${labelPart.trim()}||${url}|${trimmedServiceType}`)
        return
      }
      return
    }

    const currentLink = link.split('|')
    const url = currentLink[2]?.trim()
    const serviceType = currentLink[3]?.trim()

    if (url && serviceType) {
      pushUnique(`||${url}|${serviceType}`)
      return
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
