import WMTSCapabilities from 'ol/format/WMTSCapabilities.js'
import {
  WmtsServiceInfo,
  WmtsCapabilitiesLayer,
} from './../../components/remote-layers/remote-layers.model'

export class WmtsEndpoint {
  private _capabilitiesPromise: Promise<void>
  private _serviceInfo: WmtsServiceInfo
  private _layers: WmtsCapabilitiesLayer[]

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
        this._serviceInfo = result.ServiceIdentification
        this._layers = result.Contents?.Layer
      })
  }

  isReady() {
    return this._capabilitiesPromise.then(() => this)
  }

  getLayerByName(name: string): WmtsCapabilitiesLayer {
    return this._layers.filter(layer => layer.Identifier === name)[0]
  }

  getLayers(): WmtsCapabilitiesLayer[] {
    return this._layers
  }

  getServiceInfo() {
    return this._serviceInfo
  }
}
