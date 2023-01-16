import {
  isoLang2To3,
  stringToHtml,
  getMetadataLinks,
  getResponsibleParty,
} from './layer-metadata.utils'

describe('Layer metadata utils', () => {
  describe('#isoLang2To3', () => {
    it('transforms fr to fre', () => {
      const fr = isoLang2To3('fr')
      expect(fr).toEqual('fre')
    })
    it('transforms en to eng', () => {
      const en = isoLang2To3('en')
      expect(en).toEqual('eng')
    })
    it('transforms de to ger', () => {
      const de = isoLang2To3('de')
      expect(de).toEqual('ger')
    })
    it('transforms lb to ltz', () => {
      const lb = isoLang2To3('lb')
      expect(lb).toEqual('ltz')
    })
    it('transforms FR to fre (ignoring case)', () => {
      const fr = isoLang2To3('FR')
      expect(fr).toEqual('fre')
    })
  })
  describe('#stringToHtml', () => {
    let div
    beforeEach(() => {
      div = stringToHtml('<div><h1>Some HTML Element</h1></div>')
    })
    it('parses string to HTMLElement', () => {
      expect(div).toBeInstanceOf(HTMLElement)
    })
    it('parses string to HTMLElement', () => {
      expect(div.getElementsByTagName('h1')[0].textContent).toEqual(
        'Some HTML Element'
      )
    })
  })
  describe('#getMetadataLinks', () => {
    let links
    beforeEach(() => {
      links = getMetadataLinks([
        'Districts (Noms)|districts_labels|https://map.geoportail.lu/theme/main?version=3&zoom=8&X=667917&Y=6394482&lang=fr&layers=268&opacities=1||text/plain|2',
        '||https://data.public.lu/fr/datasets/limites-administratives-du-grand-duche-de-luxembourg/|WWW:LINK-1.0-http--link|text/html|1',
      ])
    })
    it('gets metadata links', () => {
      expect(links).toEqual([
        'https://data.public.lu/fr/datasets/limites-administratives-du-grand-duche-de-luxembourg/',
      ])
    })
  })
  describe('#getResponsibleParty', () => {
    let contact
    beforeEach(() => {
      contact = getResponsibleParty([
        "Point de contact|metadata|Administration du Cadastre et de la Topographie||support@geoportail.lu|Service du géoportail et de l'ILDG (ACT)||54, avenue Gaston Diderich, Luxembourg, L-1420, Luxembourg|24754401||1|",
        "Point de contact|resource|Administration du Cadastre et de la Topographie||support@geoportail.lu|Service du géoportail et de l'ILDG (ACT)||54, avenue Gaston Diderich, Luxembourg, L-1420, Luxembourg|24754401||1|",
      ])
    })
    it('gets responsible party', () => {
      expect(contact).toEqual([
        'Administration du Cadastre et de la Topographie',
        "Service du géoportail et de l'ILDG (ACT)",
        '',
        '54, avenue Gaston Diderich, Luxembourg, L-1420, Luxembourg',
      ])
    })
  })
})
