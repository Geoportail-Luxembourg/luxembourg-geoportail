import ImageLayer from 'ol/layer/Image'
import TileLayer from 'ol/layer/Tile'
import ImageWMS from 'ol/source/ImageWMS'
import WMTS from 'ol/source/WMTS'

import MapBoxLayer from '@/lib/ol-mapbox-layer'

export type OlLayer = ImageLayer<ImageWMS> | TileLayer<WMTS> | MapBoxLayer
