import ImageWMS from 'ol/source/ImageWMS'
import WmtsSource from 'ol/source/WMTS'

import { Layer } from '@/stores/map.store.model'
import { OlLayer } from './ol-layer.model'
import olLayerWmsHelper from './ol-layer-wms.helper'
import olLayerWmtsHelper from './ol-layer-wmts.helper'

class OlLayerTileWmsOfflineHelper {

  // TODO: GSLUX-667-offline-mode compléter ici, créer une fonction pour surcharger le tileload function d'ol
  // et gérer les tuiles offline

  // createTileLoadFunction_(offlineLayer) {
  //   const that = this;
  //   /**
  //    * Load the tile from persistent storage.
  //    * @param {ol.ImageTile} imageTile The image tile
  //    * @param {string} src The tile URL
  //    */
  //   const tileLoadFunction = function(imageTile, src) {
  //     that.getItem(utils.normalizeURL(src)).then((content) => {
  //       if (!content) {
  //         // use a transparent 1x1 image to make the map consistent
  //         content = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=';
  //       }
  //       imageTile.getImage().src = content;
  //     });
  //   };
  //   return tileLoadFunction;
  // }


  // TODO: GSLUX-667-offline-mode à faire deserializeTileLayer comme dans v3 (en améliorant le code, peut-etre faire un code commun pour les deux helpers)

  // deserializeTileLayer(serialization, tileLoadFunction) {
  //   const options = /** @type {olx.layer.TileOptions} */ (JSON.parse(serialization));
  //   const sourceType = options['sourceType'];
  //   if (sourceType === 'tileWMS') {
  //     options['source'] = this.deserializeSourceTileWMS(options['source'], tileLoadFunction);
  //   } else if (sourceType === 'WMTS') {
  //     options['source'] = this.deserializeSourceWMTS(options['source'], tileLoadFunction);
  //   }
  //   let layer = new olLayerTile(options);

  //   ngeoMiscDecorate.layer(layer);
  //   return layer;
  // }

  createOlLayer(layer: Layer): OlLayer /* Returns: ImageLayer<ImageWMS> */ {

    console.log("OlLayerTileWmsService layer = ", layer)

    // TODO: GSLUX-667-offline-mode compléter ici, ne pas oublier de gérer les sources offline
    // modifier le code ci dessous, il ne s'agit que d'un exemple, il ne faut pas utiliser ImageWMS mais plutôt TileWMS de Ol

    const { name, layers, imageType, url, id } = layer
    const olSource = new ImageWMS({ 
      url: url || proxyUrlHelper.wmsProxyUrl,
      hidpi: isHiDpi(),
      serverType: 'mapserver',
      params: {
        FORMAT: imageType,
        LAYERS: layers,
      },
      ...((url !== undefined && url !== null) || proxyUrlHelper.remoteProxyUrl
        ? { crossOrigin: 'anonymous' }
        : {}),
    })

    const olLayer = new ImageLayer({
      properties: {
        'olcs.extent': getOlcsExtent(),
        label: name,
        id,
      },
      source: olSource,
    })

    return olLayer
  }
}

export const olLayerTileWmsOfflineHelper = new OlLayerTileWmsOfflineHelper()

export default olLayerTileWmsOfflineHelper