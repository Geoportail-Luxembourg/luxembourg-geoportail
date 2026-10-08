import MapLibreLayer from '@/lib/ol-mapbox-layer'

export const DEFAULT_VIEW_ZOOM_MAX = parseInt(
  import.meta.env.VITE_DEFAULT_VIEW_ZOOM_MAX,
  10
)
export const DEFAULT_VIEW_ZOOM_MIN = parseInt(
  import.meta.env.VITE_DEFAULT_VIEW_ZOOM_MIN,
  10
)

export declare type MapLibreLayerType = typeof MapLibreLayer

export enum MutationTypeValue {
  ON_LAYER_TYPE = 'ON_LAYER_TYPE',
}
export type MutationType = `${MutationTypeValue}`
