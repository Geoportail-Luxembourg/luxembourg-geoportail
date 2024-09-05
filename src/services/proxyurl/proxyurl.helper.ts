const FORCE_USE_PROXY = import.meta.env.VITE_USE_PROXYURL === 'true'
const WMS_PROXY_URL = import.meta.env.VITE_PROXYURL_WMS
const REMOTE_PROXY_URL = import.meta.env.VITE_PROXYURL_REMOTE

/**
 * A helper to get a proxyfied url from a given url (if needed).
 * Use deprecated function `ProxyUrlHelper.init_v3()` in legacy project to configure `wmsProxyUrl` and `remoteProxyUrl`.
 */
class ProxyUrlHelper {
  private _wmsProxyUrl = WMS_PROXY_URL
  private _remoteProxyUrl = REMOTE_PROXY_URL

  public get wmsProxyUrl() {
    if (this._wmsProxyUrl === undefined) {
      console.warn('Warning: proxyWmsUrl is not set.') // eslint-disable-line no-console
    }
    return this._wmsProxyUrl
  }

  public get remoteProxyUrl() {
    if (this._remoteProxyUrl === undefined) {
      console.warn('Warning: remoteProxy is not set.') // eslint-disable-line no-console
    }
    return this._remoteProxyUrl
  }

  /**
   * Returns the url proxified, if `FORCE_USE_PROXY`, or if current protocol is `https` and url is `http`.
   * Don't proxyfy if `httpsproxy` is given in the url.
   *
   * @param url The url to be proxyfied
   * @returns The url proxyfied (if needed)
   */
  getProxyfiedUrl(url: string) {
    if (url.indexOf('httpsproxy') > 0) {
      return url
    }

    if (
      FORCE_USE_PROXY ||
      (window.location.protocol === 'https:' &&
        url.toLowerCase().indexOf('http:') === 0)
    ) {
      return this.remoteProxyUrl + '?url=' + encodeURIComponent(url)
    }

    return url
  }

  /**
   * Use this function in v3 to configure ProxyHelper's urls.
   *
   * @param wmsProxyUrl Proxy url to be used for WMS layers
   * @param remoteProxyUrl Remote url to be used for manually added remote layers
   *
   * @deprecated use env var instead (this function is meant to be removed when v4 is fully operational)
   */
  init_v3(wmsProxyUrl?: string, remoteProxyUrl?: string) {
    if (wmsProxyUrl) {
      this._wmsProxyUrl = wmsProxyUrl
    }

    if (remoteProxyUrl) {
      this._remoteProxyUrl = remoteProxyUrl
    }

    if (import.meta.env.MODE !== 'prod') {
      // eslint-disable-next-line no-console
      console.warn(
        'Deprecated: ProxyUrlHelper.init_v3() is meant to be removed when v4 is fully operational'
      )
    }
  }
}

export const proxyUrlHelper = new ProxyUrlHelper()

export default proxyUrlHelper
