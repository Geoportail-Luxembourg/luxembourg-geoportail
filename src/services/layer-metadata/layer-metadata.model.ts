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
