const forceUseProxy = import.meta.env.VITE_USE_PROXYURL === 'true'

class ProxyUrlHelper {
  private _wmsProxyUrl: string
  private _remoteProxyUrl: string

  public set wmsProxyUrl(wmsProxyUrl: string) {
    this._wmsProxyUrl = wmsProxyUrl
  }

  public get wmsProxyUrl() {
    if (this._wmsProxyUrl === undefined) {
      console.warn('Warning: proxyWmsUrl is not set.')
    }
    return this._wmsProxyUrl
  }

  public set remoteProxyUrl(remoteProxy: string) {
    this._remoteProxyUrl = remoteProxy
  }

  public get remoteProxyUrl() {
    if (this._remoteProxyUrl === undefined) {
      console.warn('Warning: remoteProxy is not set.')
    }
    return this._remoteProxyUrl
  }

  init(wmsProxyUrl?: string, remoteProxyUrl?: string) {
    if (wmsProxyUrl) {
      this.wmsProxyUrl = wmsProxyUrl
    }

    if (remoteProxyUrl) {
      this.remoteProxyUrl = remoteProxyUrl
    }
  }

  getProxyfiedUrl(url: string) {
    if (url.indexOf('httpsproxy') > 0) {
      return url
    }

    if (
      forceUseProxy ||
      (window.location.protocol === 'https:' &&
        url.toLowerCase().indexOf('http:') === 0)
    ) {
      return this.remoteProxyUrl + '?url=' + encodeURIComponent(url)
    }

    return url
  }
}

export const proxyUrlHelper = new ProxyUrlHelper()

export default proxyUrlHelper
