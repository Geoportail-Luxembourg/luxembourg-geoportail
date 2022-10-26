export interface LayerMetadataModel {
  title?: string
  name: string
  serviceDescription: string
  description: string
  legalConstraints: string
  link: string[]
  revisionDate: string
  keyword: string[]
  responsibleParty: string
  metadataLink: string
  legendHtml?: HTMLElement
  hasLegend?: boolean
  isError: boolean
}
