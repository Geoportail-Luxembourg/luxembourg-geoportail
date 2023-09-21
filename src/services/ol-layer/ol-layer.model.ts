import ImageLayer from 'ol/layer/Image'
import TileLayer from 'ol/layer/Tile'
import ImageWMS from 'ol/source/ImageWMS'
import WMTS from 'ol/source/WMTS'

export type OlLayer = ImageLayer<ImageWMS> | TileLayer<WMTS>
