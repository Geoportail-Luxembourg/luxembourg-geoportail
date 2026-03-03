export interface LayerMetadataModel {
  title?: string
  name?: string
  serviceDescription?: string
  description?: string
  legalConstraints?: string
  link?: string[]
  revisionDate?: string
  keyword?: string[]
  responsibleParty?: ResponsibleParty
  metadataLink?: string
  legendHtml?: HTMLElement
  /** Legend image URL for remote WMS/WMTS layers (extracted from capabilities styles) */
  legendUrl?: string
  hasLegend?: boolean
  isError?: boolean
}

export interface ResponsibleParty {
  organisaton: string
  name: string
  unknown: string
  address: string
  email: string
}
