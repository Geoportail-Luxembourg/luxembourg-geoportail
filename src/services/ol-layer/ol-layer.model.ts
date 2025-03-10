import ImageLayer from 'ol/layer/Image'
import TileLayer from 'ol/layer/Tile'
import ImageWMS from 'ol/source/ImageWMS'
import WMTS from 'ol/source/WMTS'
import TileSource from 'ol/source/Tile'
import MapBoxLayer from '@/lib/ol-mapbox-layer'
import { PositionVectorLayer } from './ol-layer-feature-position.helper'

export type OlLayer =
  | ImageLayer<ImageWMS>
  | TileLayer<WMTS>
  | TileLayer<TileSource>
  | MapBoxLayer
  | PositionVectorLayer // lux custom VectorLayer<VectorSource<Geometry>>

export const OLLAYER_PROP_ID = 'id'
export const OLLAYER_PROP_LABEL = 'label'
export const OLLAYER_PROP_LAYER_NAME = 'layer_name'
export const OLLAYER_PROP_METADATA = 'metadata'
export const OLLAYER_PROP_QUERYABLE_ID = 'queryable_id'
export const OLLAYER_PROP_CURRENT_TIME = 'current_time'
export const OLLAYER_PROP_TIME = 'time'
export const OLLAYER_PROP_DEFAULT_MAPBOX_STYLE = 'defaultMapBoxStyle'
export const OLLAYER_PROP_XYZ_CUSTOM = 'xyz_custom'
