import WMTSCapabilities from 'ol/format/WMTSCapabilities.js'
import {
  WmtsServiceInfo,
  WmtsCapabilitiesLayer,
  RemoteLayer,
  RemoteServiceInfo,
  REMOTE_SERVICE_TYPE,
} from './remote-layers.model'

// exposes the same methods for a WMTS as the ogc-client WmsEndpoint for a WMS
export class WmtsEndpoint {
  private capabilitiesPromise: Promise<void>
  private serviceInfo: RemoteServiceInfo
  private layers: RemoteLayer[]

  constructor(url: string) {
    const parser = new WMTSCapabilities()

    let separator = '&'
    if (url.indexOf('?') === -1) {
      separator = '?'
    }
    if (url.indexOf('Capabilities') === -1) {
      url = url + separator + 'SERVICE=WMTS&REQUEST=GetCapabilities'
    }

    this.capabilitiesPromise = fetch(url)
      .then(response => {
        return response.text()
      })
      .then(text => {
        const result = parser.read(text)
        this.serviceInfo = this.mapServiceInfo(result.ServiceIdentification)
        this.layers = this.mapToRemoteLayers(result.Contents?.Layer)
      })
  }

  private mapToRemoteLayers(layers: WmtsCapabilitiesLayer[]): RemoteLayer[] {
    return [
      {
        // root layer for flat wmts layers
        type: REMOTE_SERVICE_TYPE.WMTS,
        children: layers.map(
          layer =>
            ({
              type: REMOTE_SERVICE_TYPE.WMTS,
              abstract: layer.Abstract,
              format: layer.Format,
              name: layer.Identifier,
              title: layer.Title,
              tileMatrixSetLink: layer.TileMatrixSetLink,
              wgs84BoundingBox: layer.WGS84BoundingBox,
            } as RemoteLayer)
        ),
      },
    ]
  }

  private mapServiceInfo(serviceInfo: WmtsServiceInfo): RemoteServiceInfo {
    return {
      type: REMOTE_SERVICE_TYPE.WMTS,
      title: serviceInfo.Title,
      abstract: serviceInfo.Abstract,
      fees: serviceInfo.Fees,
      constraints: serviceInfo.AccessConstraints,
      serviceTypeVersion: serviceInfo.ServiceTypeVersion,
    }
  }

  isReady() {
    return this.capabilitiesPromise.then(() => this)
  }

  getLayerByName(name: string): RemoteLayer {
    return this.layers[0].children.filter(layer => layer.name === name)[0]
  }

  getLayers(): RemoteLayer[] {
    return this.layers
  }

  getServiceInfo(): RemoteServiceInfo {
    return this.serviceInfo
  }
}
