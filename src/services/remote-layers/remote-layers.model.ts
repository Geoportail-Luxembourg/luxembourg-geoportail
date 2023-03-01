import { WmsEndpoint } from '@camptocamp/ogc-client'

export interface RemoteWmsEndpointModel {
  url: string
  label: string
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

export interface RemoteLayer {
  type?: REMOTE_SERVICE_TYPE
  abstract?: string
  attribution?: string
  availableCrs?: string[]
  boundingBoxes?: { [key: string]: string[] }
  name?: string //corresponds to WMTS Identifier
  styles?: string[]
  title?: string
  children: RemoteLayer[]
  // wmts properties
  format?: string[]
  tileMatrixSetLink?: [
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
  wgs84BoundingBox?: number[]
}

export interface RemoteServiceInfo {
  type?: REMOTE_SERVICE_TYPE
  name?: string
  title: string
  abstract: string
  fees?: string
  constraints?: string
  keywords?: string[]
  outputFormats?: string[]
  serviceTypeVersion?: string
}

export enum REMOTE_SERVICE_TYPE {
  WMS = 'WMS',
  WMTS = 'WMTS',
}
