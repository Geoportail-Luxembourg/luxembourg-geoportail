import { MapLibreLayer } from '@/bundle/lib'
import {
  BaseCustomizer,
  MFPEncoder,
  MFPLayer,
  MFPOSMLayer,
  MFPWmsLayer,
} from '@geoblocks/mapfishprint'
import BaseLayer from 'ol/layer/Base'
import { State } from 'ol/layer/Layer'
import VectorLayer from 'ol/layer/Vector'
import { LuxVectorEncoder } from './LuxVectorEncoder'

const DPI = 127 // FIXME: refactor with DPI from print service

export class LuxEncoder extends MFPEncoder {
  async encodeLayerState(
    layerState: State,
    printResolution: number,
    customizer: BaseCustomizer
  ) {
    let encoded: MFPLayer[] | MFPLayer | null
    const layer = layerState.layer

    if (layer instanceof MapLibreLayer) {
      // @ts-ignore
      encoded = this.encodeXYZLayer_(layer.getXYZ())
    } else if (layer instanceof VectorLayer) {
      encoded = new LuxVectorEncoder(layerState, customizer).encodeVectorLayer(
        printResolution
      )!
      const renderAsSvg = layerState.layer.get('renderAsSvg')
      if (renderAsSvg !== undefined) {
        encoded.renderAsSvg = renderAsSvg
      }
    } else {
      encoded = await super.encodeLayerState(
        layerState,
        printResolution,
        customizer
      )
    }

    if (Array.isArray(encoded)) {
      encoded = <MFPLayer[]>(
        encoded.map(e => this.legacyMFPAppendCustomParams(layer, e))
      )
    } else if (encoded) {
      encoded = this.legacyMFPAppendCustomParams(layer, encoded)
    }

    return encoded
  }

  legacyMFPAppendCustomParams(
    layer: BaseLayer,
    encoded: MFPLayer | MFPLayer[] | null
  ) {
    return encoded
      ? {
          ...encoded,
          ...(!(layer instanceof VectorLayer)
            ? {
                customParams: {
                  TRANSPARENT: true,
                  MAP_RESOLUTION: DPI,
                },
              }
            : {}),
        }
      : null
  }

  encodeXYZLayer_(url: string) {
    // https://vectortiles.geoportail.lu/styles/roadmap/{z}/{x}/{y}.png
    const i = url.indexOf('/{z}/{x}/{y}')
    const j = url.lastIndexOf('.')
    if (i === -1 || j === -1) {
      return
    }
    const baseURL = url.substring(0, i)
    const imageExtension = url.substring(j + 1)
    const styleName = baseURL.substring(
      baseURL.lastIndexOf('/styles/') + '/styles/'.length
    )
    if (
      styleName === 'topomap' ||
      styleName === 'roadmap' ||
      styleName === 'topomap_gray'
    ) {
      return {
        baseURL: 'https://wms.geoportail.lu/vectortiles_wms_4_print/service',
        imageFormat: 'image/' + imageExtension,
        layers: [styleName],
        customParams: {
          TRANSPARENT: true,
          MAP_RESOLUTION: DPI,
        },
        type: 'wms',
        opacity: 1,
        version: '1.1.1',
        useNativeAngle: true,
      } as unknown as MFPWmsLayer
    } else {
      return {
        baseURL,
        type: 'OSM',
        imageExtension,
      } as unknown as MFPOSMLayer
    }
  }
}
