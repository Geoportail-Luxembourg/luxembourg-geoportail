import WMTSCapabilities from 'ol/format/WMTSCapabilities.js'
import {
  WmtsServiceInfo,
  WmtsCapabilitiesLayer,
  RemoteLayer,
  RemoteServiceInfo,
} from './remote-layers.model'

export class WmtsEndpoint {
  private _capabilitiesPromise: Promise<void>
  private _serviceInfo: RemoteServiceInfo
  private _layers: RemoteLayer[]

  constructor(url: string) {
    const parser = new WMTSCapabilities()

    let separator = '&'
    if (url.indexOf('?') === -1) {
      separator = '?'
    }
    if (url.indexOf('Capabilities') === -1) {
      url = url + separator + 'SERVICE=WMTS&REQUEST=GetCapabilities'
    }

    this._capabilitiesPromise = fetch(url)
      .then(response => {
        return response.text()
      })
      .then(text => {
        const result = parser.read(text)
        this._serviceInfo = this.mapServiceInfo(result.ServiceIdentification)
        this._layers = this.mapToRemoteLayers(result.Contents?.Layer)
      })
  }

  private mapToRemoteLayers(layers: WmtsCapabilitiesLayer[]): RemoteLayer[] {
    return [
      {
        // root layer for flat wmts layers
        type: 'WMTS',
        children: layers.map(
          layer =>
            ({
              type: 'WMTS',
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
      type: 'WMTS',
      title: serviceInfo.Title,
      abstract: serviceInfo.Abstract,
      fees: serviceInfo.Fees,
      constraints: serviceInfo.AccessConstraints,
      serviceTypeVersion: serviceInfo.ServiceTypeVersion,
    }
  }

  isReady() {
    return this._capabilitiesPromise.then(() => this)
  }

  getLayerByName(name: string): RemoteLayer {
    return this._layers[0].children.filter(layer => layer.name === name)[0]
  }

  getLayers(): RemoteLayer[] {
    return this._layers
  }

  getServiceInfo(): RemoteServiceInfo {
    return this._serviceInfo
  }
}
