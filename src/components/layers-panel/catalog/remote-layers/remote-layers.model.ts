export interface RemoteWmsModel {
  url: string
  label: string
}

export interface RemoteLayerModel {
  abstract: string
  attribution: string
  availableCrs: string[]
  boundingBoxes: { [key: string]: string[] }
  name: string
  styles: string[]
  title: string
}

export interface OlClientWmsLayerSummary {
  name: string
  title: string
  abstract: string
  children: OlClientWmsLayerSummary[]
}
