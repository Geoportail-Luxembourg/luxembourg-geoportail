import BaseLayer from 'ol/layer/Base'
import {
  SimpleStyle,
  StyleItem,
  stylePropertyTypeList,
  StyleCapabilities,
  BgLayerDef,
  VectorSourceDict,
  VectorStyleDict,
  StyleSpecification,
  IMvtConfig,
} from '@/composables/mvt-styles/mvt-styles.model'
import { useStyleStore } from '@/stores/style.store'
import type { Layer, LayerId } from '@/stores/map.store.model'
import { bgConfigFixture } from '@/__fixtures__/background.config.fixture'
import { urlStorage } from '@/services/state-persistor/storage/url-storage'
import {
  SP_KEY_EMBEDDED_SERVER,
  SP_KEY_EMBEDDED_SERVER_PROTOCOL,
  SP_KEY_SERIAL,
  SP_KEY_SERIAL_LAYERS,
} from '@/services/state-persistor/state-persistor.model'

export default function useMvtStyles() {
  // TODO: When v4 fully ready, remove setRegisterUrl_v3 and move below vars outside the function
  let VECTORTILES_URL = import.meta.env.VITE_VECTORTILES_URL
  let MVTSTYLES_PATH_GET = import.meta.env.VITE_MVTSTYLES_PATH_GET
  let MVTSTYLES_PATH_UPLOAD = import.meta.env.VITE_MVTSTYLES_PATH_UPLOAD
  let MVTSTYLES_PATH_DELETE = import.meta.env.VITE_MVTSTYLES_PATH_DELETE

  /**
   * Use this function in v3 to configure MvtRegister's urls and vectortiles url.
   *
   * @param registeredUrls An object to set all urls (get, upload, delete, and vectortiles)
   * @deprecated use env var instead (this function is meant to be removed when v4 is fully operational)
   */
  function setRegisterUrl_v3(registeredUrls: {
    get?: string
    upload?: string
    delete?: string
    vectortiles?: string
  }) {
    if (registeredUrls.get) {
      MVTSTYLES_PATH_GET = registeredUrls.get
    }

    if (registeredUrls.upload) {
      MVTSTYLES_PATH_UPLOAD = registeredUrls.upload
    }

    if (registeredUrls.delete) {
      MVTSTYLES_PATH_DELETE = registeredUrls.delete
    }

    if (registeredUrls.vectortiles) {
      VECTORTILES_URL = registeredUrls.vectortiles
    }

    if (import.meta.env.MODE !== 'prod') {
      console.warn(
        'Deprecated: useMvtStyles().setRegisterUrl_v3() is meant to be removed when v4 is fully operational'
      )
    }
  }

  function getDefaultMapBoxStyleUrl(label: string | undefined) {
    const server = urlStorage.getItem(SP_KEY_EMBEDDED_SERVER)
    const proto = urlStorage.getItem(SP_KEY_EMBEDDED_SERVER_PROTOCOL) || 'http'

    return (
      (server ? `${proto}://${server}` : VECTORTILES_URL) +
      `/styles/${label}/style.json`
    )
  }

  function getDefaultMapBoxStyleXYZ(label: string | undefined) {
    return `${VECTORTILES_URL}/styles/${label}/{z}/{x}/{y}.png`
  }

  function isValidSerial(serial: string) {
    const isValidUUIDv4Regex =
      /^[0-9A-F]{8}-[0-9A-F]{4}-4[0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/gi
    return isValidUUIDv4Regex.test(serial)
  }

  function setCustomStyleSerial(
    bgLayer: Layer | undefined | null,
    serial: string
  ) {
    const styleStore = useStyleStore()

    if (bgLayer === null || bgLayer === undefined) return
    const newVectorSources: VectorSourceDict = new Map()
    styleStore.bgVectorSources.forEach((vectorSource, key) => {
      if (key === bgLayer.id) {
        const newVectorSource = { ...vectorSource, xyz_custom: serial }
        newVectorSources.set(key, newVectorSource)
      } else {
        newVectorSources.set(key, vectorSource)
      }
    })
    styleStore.setBgVectorSources(newVectorSources)
  }

  function setConfigForLayer(
    label: string,
    keyword: string,
    isAuthenticated: boolean = false
  ) {
    // TODO: -CLEAN STYLE- xyz_custom not used??????
    // let lsData = JSON.parse(window.localStorage.getItem(label));
    const xyz_custom = '' // undefined;
    // if (!!lsData && lsData.serial) {
    //     xyz_custom = this.createXYZCustom_(lsData.serial);
    // }

    const defaultMapBoxStyle = getDefaultMapBoxStyleUrl(keyword)
    const defaultMapBoxStyleXYZ = getDefaultMapBoxStyleXYZ(keyword)

    const config = {
      label,
      defaultMapBoxStyle,
      defaultMapBoxStyleXYZ,
      xyz: xyz_custom || defaultMapBoxStyleXYZ,
      xyz_custom,
      style: defaultMapBoxStyle,
    }

    const serial = urlStorage.getItem(SP_KEY_SERIAL)
    const serialLayer = urlStorage.getItem(SP_KEY_SERIAL_LAYERS)

    if (serial) {
      if (isValidSerial(serial)) {
        console.log(serialLayer) // TODO: -CLEAN STYLE- why console log?
      } // TODO: -CLEAN STYLE- clean comments...
      // // if serial is number id, retrieve style form it
      // if (isValidSerial(serial)) {
      //     // if label and serialLayer are equal, or fallback to roadmap layer if serialLayer is null
      //     if (label === serialLayer || (label === 'basemap_2015_global' && serialLayer === null)) {
      //         console.log(`Load mvt style for ${label} from serial uuid`);
      //         this.isCustomStyle = this.isCustomStyleSetter(label, true);
      //         const style_url = `${this.getvtstyleUrl_}?id=${serial}`
      //         config.style = style_url;
      //         return Promise.resolve(config);
      //     } else {
      //         console.log(`Default mvt style for ${label}`);
      //         return Promise.resolve(config);
      //     }
      // } else {
      //     // if label and serialLayer are equal, or fallback to roadmap layer if serialLayer is null
      //     if (label === serialLayer || (label === 'basemap_2015_global' && serialLayer === null)) {
      //         console.log(`Load mvt style for ${label} from serialized config`);
      //         this.isCustomStyle = this.isCustomStyleSetter(label, true);
      //         config.style = this.apply_mvt_config(serial, label);
      //         return Promise.resolve(config);
      //     } else {
      //         console.log(`Default mvt style for ${label}`);
      //         return Promise.resolve(config);
      //     }
      // }
    } else if (isAuthenticated) {
      // const options = {
      //     method: 'get',
      //     headers: { 'Content-Type': 'application/json' }
      // }
      // return fetch(url_get + "?key=" + label, options).then(resultsFromDB => {
      //     return resultsFromDB.json().then(result => {
      //         if (result.length > 0) {
      //             const data = JSON.parse(result[0]['value']);
      //             console.log(`Load mvt style for ${label} from database and save it to local storage`);
      //             this.isCustomStyle = this.isCustomStyleSetter(label, true);
      //             window.localStorage.setItem(label, JSON.stringify(data));
      //             config.style = data['background'];
      //             return config;
      //         } else {
      //             // Default style if no existing in LS or DB
      //             console.log(`Default mvt style for ${label}`);
      //             this.isCustomStyle = this.isCustomStyleSetter(label, false);
      //             return config;
      //         }
      //     });
      // });
      // } else if (hasLocalStorage() && !!window.localStorage.getItem(label)) {
      //     if (lsData.serial) {
      //         // If there is a mvt expert style in the local storage, force parameter in the url
      //         this.ngeoLocation_.updateParams({
      //             'serial': JSON.stringify(lsData.serial),
      //             'serialLayer': JSON.stringify(label)
      //         });
      //     }
      //     if (lsData.medium) {
      //         // If there is a mvt  medium config in the local storage, force parameter in the url
      //         this.ngeoLocation_.updateParams({
      //             'serial': JSON.stringify(lsData.medium),
      //             'serialLayer': JSON.stringify(label)
      //         });
      //     }
      //     console.log(`Load mvt style for ${label} from local storage`);
      //     this.isCustomStyle = this.isCustomStyleSetter(label, true);
      //     config.style = lsData.background; // Should work offline as well
      //     return Promise.resolve(config);
    } else {
      // Default style if no existing in LS or DB
      // this.isCustomStyle = this.isCustomStyleSetter(label, false);

      // temporary timeout for testing async style queries
      // return new Promise(r => setTimeout(r, 2000, config))
      return Promise.resolve(config)
    }
    return Promise.resolve(config)
  }

  function getRoadStyleFromSimpleStyle(
    simpleStyle: SimpleStyle | null
  ): StyleItem[] {
    const med_road_style = bgConfigFixture().medium_default_styles
      .road as StyleItem[]
    // override default road style if simple style definition is available
    if (simpleStyle) {
      simpleStyle.colors.forEach((element: string, i: number) => {
        med_road_style[i].color = element
      })
      const hillshadeIndex = med_road_style.findIndex(
        el => el.label === 'Hillshade'
      )
      med_road_style[hillshadeIndex].visible = simpleStyle.hillshade
    }
    return med_road_style
  }

  function applyDefaultStyle(
    bgLayer: Layer | undefined | null,
    baseStyles: VectorStyleDict,
    activeStyle: StyleItem[] | null | undefined
  ): StyleSpecification | undefined {
    if (!bgLayer) return
    // need a deep copy of the object to preserve default style
    if (!baseStyles.get(bgLayer.id)) return
    const baseStyle: StyleSpecification = JSON.parse(
      JSON.stringify(baseStyles.get(bgLayer.id))
    ) as any
    if (!baseStyle) return
    if (!baseStyle || !baseStyle.layers) return
    if (activeStyle) {
      activeStyle.forEach(styleItem => {
        baseStyle?.layers.forEach((layer, i) => {
          for (const styleProperty of stylePropertyTypeList) {
            const props = styleItem[`${styleProperty}s`] || []
            if (props.includes(layer.id)) {
              const basePaint: any = Object.assign(
                {},
                baseStyle.layers[i].paint
              )
              if (styleItem.color) {
                basePaint[`${styleProperty}-color`] = styleItem.color
                basePaint[`${styleProperty}-opacity`] = 1
                baseStyle.layers[i].paint = basePaint
              }
              baseStyle.layers[i].layout = Object.assign(
                {},
                baseStyle.layers[i].layout,
                { visibility: styleItem.visible ? 'visible' : 'none' }
              )
            }
          }
        })
      })
    }
    return baseStyle
  }

  function unregisterStyle(styleId: String | null) {
    if (styleId === null) {
      return Promise.resolve()
    } else {
      const url = `${MVTSTYLES_PATH_DELETE}?id=${styleId}`
      return fetch(url).catch(() => '')
    }
  }

  function registerStyle(style: StyleSpecification, oldStyleId: String | null) {
    return unregisterStyle(oldStyleId).then(() => {
      const formData = new FormData()
      const data = JSON.stringify(style)
      const blob = new Blob([data], { type: 'application/json' })
      formData.append('style', blob, 'style.json')
      const options = {
        method: 'POST',
        body: formData,
      }
      return fetch(MVTSTYLES_PATH_UPLOAD, options)
        .then(response => response.json())
        .then(result => {
          return result.id
        })
        .catch(error => console.warn(error))
    })
  }

  function applyConsolidatedStyle(
    bgLayer: BaseLayer,
    consolidatedStyle: StyleSpecification | undefined
  ) {
    if (!consolidatedStyle) return
    const mbMap = (bgLayer as any).maplibreMap
    if (!mbMap) return
    if (mbMap.loaded()) {
      mbMap.setStyle(consolidatedStyle)
    } else {
      new Promise(resolve => mbMap.once('data', resolve)).then(() =>
        mbMap.setStyle(consolidatedStyle)
      )
    }
  }

  function getBgLayerDef(
    bgLayer: Layer | undefined | null
  ): BgLayerDef | undefined {
    return bgConfigFixture().bg_layers.find(l => l.id == bgLayer?.id)
  }

  function getVectorId(bgLayer: Layer | undefined | null): string | undefined {
    const bgLayerDef = getBgLayerDef(bgLayer)
    return bgLayerDef?.vector_id
  }

  function isLayerStyleEditable(bgLayer: Layer | undefined | null): boolean {
    const bgLayerDef = getBgLayerDef(bgLayer)
    return bgLayerDef?.vector_id !== undefined
  }

  function getStyleCapabilitiesFromLayer(
    bgLayer: Layer | undefined | null
  ): StyleCapabilities {
    const bgLayerDef = getBgLayerDef(bgLayer)
    return {
      isEditable: bgLayerDef?.vector_id !== undefined,
      hasSimpleStyle: bgLayerDef?.simple_style_class !== undefined,
      hasAdvancedStyle: bgLayerDef?.medium_style_class !== undefined,
      hasExpertStyle: bgLayerDef?.expert_style_class !== undefined,
    }
  }

  function checkSelection(
    bgStyle: StyleItem[],
    simpleStyleConf: SimpleStyle[]
  ) {
    return simpleStyleConf.map((style: SimpleStyle) =>
      Object.assign(style, {
        selected: style.colors.every(
          (element, i) => bgStyle[i]?.color === element
        ),
      })
    )
  }

  /**
   * Initialize background layers configurations and styles from background fixtures
   * // TODO: get rid of bg fixture, plug with v3 api instead
   */
  function initBackgroundsConfigs() {
    const promises: Promise<{ id: LayerId; config: IMvtConfig }>[] = []
    const styleStoreService = useStyleStore()

    bgConfigFixture().bg_layers.forEach(bgLayer => {
      if (bgLayer.vector_id) {
        const conf = setConfigForLayer(bgLayer.icon_id, bgLayer.vector_id)
        promises.push(conf.then(config => ({ id: bgLayer.id, config })))
      }
    })

    Promise.all(promises).then(styleConfigs => {
      const vectorDict: VectorSourceDict = new Map()
      styleConfigs.forEach(c => vectorDict.set(c.id, c.config))
      styleStoreService.setBgVectorSources(vectorDict)
    })
  }

  return {
    MVTSTYLES_PATH_GET,
    MVTSTYLES_PATH_UPLOAD,
    MVTSTYLES_PATH_DELETE,
    setRegisterUrl_v3,
    getDefaultMapBoxStyleUrl,
    getDefaultMapBoxStyleXYZ,
    setConfigForLayer,
    getRoadStyleFromSimpleStyle,
    applyDefaultStyle,
    applyConsolidatedStyle,
    getVectorId,
    setCustomStyleSerial,
    unregisterStyle,
    registerStyle,
    checkSelection,
    isLayerStyleEditable,
    getStyleCapabilitiesFromLayer,
    initBackgroundsConfigs,
  }
}
