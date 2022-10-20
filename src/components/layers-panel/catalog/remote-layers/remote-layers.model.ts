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

export interface OlClientGenericEndpointInfo {
  name: string
  title: string
  abstract: string
  fees: string
  constraints: string
  keywords: string[]
  outputFormats?: string[]
}

export class OlClientWmsEndpoint {
  isReady: () => Promise<OlClientWmsEndpoint>
  getLayers: () => OlClientWmsLayerSummary[] | null
  getLayerByName: (name: string) => OlClientWmsLayerFull | null
  getServiceInfo: () => OlClientGenericEndpointInfo | null
}
