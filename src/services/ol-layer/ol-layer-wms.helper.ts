import ImageLayer from 'ol/layer/Image'
import ImageWMS from 'ol/source/ImageWMS'

import { isHiDpi } from '@/services/utils'
import { Layer } from '@/stores/map.store.model'
import { OlLayer } from './ol-layer.model'
import { getOlcsExtent, proxyWmsUrl, remoteProxyWms } from './ol-layer.utils'

class OlLayerWmsHelper {
  createOlLayer(layer: Layer): OlLayer /* Returns: ImageLayer<ImageWMS> */ {
    const { name, layers, imageType, url, id } = layer
    const olSource = new ImageWMS({
      url: url || proxyWmsUrl,
      hidpi: isHiDpi(),
      serverType: 'mapserver',
      params: {
        FORMAT: imageType,
        LAYERS: layers,
      },
      ...((url !== undefined && url !== null) || remoteProxyWms
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

  setLayerTime(olSource: ImageWMS, time: string) {
    const params = olSource.getParams()
    params['TIME'] = time
    olSource.updateParams(params)
  }
}

const olLayerWmsHelper = new OlLayerWmsHelper()

export default olLayerWmsHelper
