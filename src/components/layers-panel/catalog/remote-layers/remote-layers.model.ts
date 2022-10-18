export interface RemoteWmsEndpointModel {
  url: string
  label: string
}

export interface OlClientWmsLayerFull {
  abstract?: string
  attribution?: string
  availableCrs: string[]
  boundingBoxes: { [key: string]: string[] }
  name?: string
  styles: string[]
  title: string
  children?: OlClientWmsLayerFull[]
}

export interface OlClientWmsLayerSummary {
  name: string
  title: string
  abstract: string
  children: OlClientWmsLayerSummary[]
}

export interface OlClientWmsEndpoint {
  isReady: () => Promise<OlClientWmsEndpoint>
  getLayers: () => OlClientWmsLayerSummary[]
  getLayerByName: (name: string) => OlClientWmsLayerFull | null
}
