import { ImageTile } from 'ol'
import { LoadFunction } from 'ol/Tile'
import { Options } from 'ol/layer/BaseTile'
import TileLayer from 'ol/layer/Tile'
import TileSource from 'ol/source/Tile'

import useOffline from '@/composables/offline/offline.composable'
import {
  OffLineLayer,
  OffLineLayerOptions,
} from '@/composables/offline/offline.model'
import { normalizeURL } from '@/services/utils'

import { OlLayer } from './ol-layer.model'

export abstract class OlLayerTileOfflineHelper {
  createOlLayer(layer: OffLineLayer): OlLayer {
    const options = this.deserializeTileLayer(layer.options)

    return new TileLayer(options)
  }

  createTileLoadFunction(): LoadFunction {
    const localforage = useOffline().localforage_v3

    /**
     * Load the tile from persistent storage.
     * @param tile The image tile
     * @param src The tile URL
     */
    const loadFunction = (tile: ImageTile, src: string) => {
      const localforageKey = normalizeURL(src)

      localforage
        .getItem(localforageKey)
        .then((content: string) => {
          ;(<HTMLImageElement>tile.getImage()).src = !content
            ? // use a transparent 1x1 image to make the map consistent
              'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII='
            : content
        })
        .catch(() => tile.setState(3))
    }

    return <LoadFunction>loadFunction
  }

  abstract deserializeTileLayer(
    options: OffLineLayerOptions
  ): Options<TileSource>
  abstract serializeTileLayer(options: OffLineLayer): string
}
