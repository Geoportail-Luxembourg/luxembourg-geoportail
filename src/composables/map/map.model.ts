import MapLibreLayer from '@/lib/ol-mapbox-layer'

export declare type MapLibreLayerType = typeof MapLibreLayer

export enum MutationTypeValue {
    ON_LAYER_TYPE = 'ON_LAYER_TYPE',
}
export type MutationType = `${MutationTypeValue}`