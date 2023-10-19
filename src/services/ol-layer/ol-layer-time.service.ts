import ImageWMS from 'ol/source/ImageWMS'
import WmtsSource from 'ol/source/WMTS'

import { OlLayer } from './ol-layer.model'
import olLayerWmsHelper from './ol-layer-wms.helper'
import olLayerWmtsHelper from './ol-layer-wmts.helper'

class OlLayerTimeService {
  setLayerTime(olLayer: OlLayer, time: string) {
    const olSource = olLayer.getSource()

    if (olSource instanceof ImageWMS) {
      olLayerWmsHelper.setLayerTime(olSource, time)
    }

    if (olSource instanceof WmtsSource) {
      olLayerWmtsHelper.setLayerTime(olLayer, olSource, time)
    }
  }
}

export const olLayerTimeService = new OlLayerTimeService()
