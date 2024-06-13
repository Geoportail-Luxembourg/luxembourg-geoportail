const VECTORTILES_URL = import.meta.env.VITE_VECTORTILES_URL
const MVTSTYLES_PATH_GET = import.meta.env.VITE_MVTSTYLES_PATH_GET
const MVTSTYLES_PATH_UPLOAD = import.meta.env.VITE_MVTSTYLES_PATH_UPLOAD
const MVTSTYLES_PATH_DELETE = import.meta.env.VITE_MVTSTYLES_PATH_DELETE

class StyleUrlHelper {
  private _vectortilesUrl = VECTORTILES_URL
  private _mvtStylesGetUrl = MVTSTYLES_PATH_GET
  private _mvtStylesUploadUrl = MVTSTYLES_PATH_UPLOAD
  private _mvtStylesDeleteUrl = MVTSTYLES_PATH_DELETE

  public get vectortilesUrl() {
    if (this._vectortilesUrl === undefined) {
      console.warn('Warning: vectortilesUrl is not set.')
    }
    return this._vectortilesUrl
  }

  public get mvtStylesGetUrl() {
    if (this._mvtStylesGetUrl === undefined) {
      console.warn('Warning: mvtStylesGetUrl is not set.')
    }
    return this._mvtStylesGetUrl
  }

  public get mvtStylesUploadUrl() {
    if (this._mvtStylesUploadUrl === undefined) {
      console.warn('Warning: mvtStylesUploadUrl is not set.')
    }
    return this._mvtStylesUploadUrl
  }

  public get mvtStylesDeleteUrl() {
    if (this._mvtStylesDeleteUrl === undefined) {
      console.warn('Warning: mvtStylesDeleteUrl is not set.')
    }
    return this._mvtStylesDeleteUrl
  }

  setRegisterUrl_v3(registeredUrls: {
    get?: string
    upload?: string
    delete?: string
    vectortiles?: string
  }) {
    if (registeredUrls.get) {
      this._mvtStylesGetUrl = registeredUrls.get
    }

    if (registeredUrls.upload) {
      this._mvtStylesUploadUrl = registeredUrls.upload
    }

    if (registeredUrls.delete) {
      this._mvtStylesDeleteUrl = registeredUrls.delete
    }

    if (registeredUrls.vectortiles) {
      this._vectortilesUrl = registeredUrls.vectortiles
    }

    if (import.meta.env.MODE !== 'prod') {
      console.warn(
        'Deprecated: StylesUrlHelper.setRegisterUrl_v3() is meant to be removed when v4 is fully operational'
      )
    }
  }
}

export const styleUrlHelper = new StyleUrlHelper()

export default styleUrlHelper
