import type BaseLayer from 'ol/layer/Base'
declare module '@camptocamp/ogc-client'
declare module '@geoblocks/ol-maplibre-layer' {
  export default class MapLibreLayer extends BaseLayer {
    constructor() {}
  }
}
