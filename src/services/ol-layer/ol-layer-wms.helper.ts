import ImageLayer from 'ol/layer/Image'
import ImageWMS from 'ol/source/ImageWMS'

import { proxyUrlHelper } from '@/services/proxyurl/proxyurl.helper'
import { isHiDpi } from '@/services/utils'
import { Layer } from '@/stores/map.store.model'
import { OlLayer } from './ol-layer.model'
import { getOlcsExtent } from './ol-layer.utils'

class OlLayerWmsHelper {
  createOlLayer(layer: Layer): OlLayer /* Returns: ImageLayer<ImageWMS> */ {
    const { name, layers, imageType, url, id } = layer
    const olSource = new ImageWMS({
      url: url || proxyUrlHelper.wmsProxyUrl,
      hidpi: isHiDpi(),
      serverType: 'mapserver',
      params: {
        FORMAT: imageType,
        LAYERS: layers,
      },
    })
    /*
    These requests should be done with no-cors mode, if we want to keep the cookies for the authentication
    Investigate why this code was here and if it is still needed
    ...((url !== undefined && url !== null) || proxyUrlHelper.remoteProxyUrl
        ? { crossOrigin: 'anonymous' }
        : {}),
    */
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
