import { WmsEndpoint } from '@camptocamp/ogc-client'

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

export type OgcClientWmsEndpoint = typeof WmsEndpoint

export interface WmtsCapabilitiesLayer {
  Abstract: string
  Format: string[]
  Identifier: string
  TileMatrixSetLink: [
    {
      TileMatrixSet: string
      TileMatrixSetLimits: {
        TileMatrix: string
        MinTileRow: number
        MaxTileRow: number
        MinTileCol: number
        MaxTileCol: number
      }[]
    }
  ]
  Title: string
  WGS84BoundingBox: number[]
}

export interface WmtsServiceInfo {
  Title: string
  Abstract: string
  ServiceType: string
  ServiceTypeVersion: string
  Fees: string
  AccessConstraints: string
}
