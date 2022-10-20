export interface RemoteWmsEndpointModel {
  url: string
  label: string
}

export interface OgcClientWmsLayerFull {
  abstract?: string
  attribution?: string
  availableCrs: string[]
  boundingBoxes: { [key: string]: string[] }
  name?: string
  styles: string[]
  title: string
  children?: OgcClientWmsLayerFull[]
}

export interface OgcClientWmsLayerSummary {
  name: string
  title: string
  abstract: string
  children: OgcClientWmsLayerSummary[]
}

export interface OgcClientGenericEndpointInfo {
  name: string
  title: string
  abstract: string
  fees: string
  constraints: string
  keywords: string[]
  outputFormats?: string[]
}

export class OgcClientWmsEndpoint {
  isReady: () => Promise<OgcClientWmsEndpoint>
  getLayers: () => OgcClientWmsLayerSummary[] | null
  getLayerByName: (name: string) => OgcClientWmsLayerFull | null
  getServiceInfo: () => OgcClientGenericEndpointInfo | null
}
