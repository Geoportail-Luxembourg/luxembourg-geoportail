import {
  SimpleRoadStyle,
  StyleItem,
} from '@/composables/mvt-styles/mvt-styles.model'
import { bgConfigFixture } from '@/__fixtures__/background.config.fixture'
import BaseLayer from 'ol/layer/Base'

export default function useMvtStyles() {
  function getDefaultMapBoxStyleUrl(label: string | undefined) {
    const searchParams = new URLSearchParams(document.location.search)
    const server = searchParams.get('embeddedserver')
    const proto = searchParams.get('embeddedserverprotocol') || 'http'
    const url =
      (server ? `${proto}://${server}` : 'https://vectortiles.geoportail.lu') +
      `/styles/${label}/style.json`
    return url
  }

  function getDefaultMapBoxStyleXYZ(label: string | undefined) {
    return `https://vectortiles.geoportail.lu/styles/${label}/{z}/{x}/{y}.png`
  }

  function isValidSerial(serial: string) {
    const isValidUUIDv4Regex =
      /^[0-9A-F]{8}-[0-9A-F]{4}-4[0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/gi
    return isValidUUIDv4Regex.test(serial)
  }

  function setConfigForLayer(
    label: string,
    keyword: string,
    isAuthenticated: boolean = false
  ) {
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

    const serial = new URLSearchParams(window.location.search).get('serial')
    const serialLayer = new URLSearchParams(window.location.search).get(
      'serialLayer'
    )
    if (serial) {
      if (isValidSerial(serial)) {
        console.log(serialLayer)
      }
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
    simpleStyle: SimpleRoadStyle | null
  ): StyleItem[] {
    const med_road_style = bgConfigFixture().medium_default_styles
      .road as StyleItem[]
    // override default road style if simple style definition is available
    if (simpleStyle) {
      simpleStyle.colors.forEach((element: string, i: number) => {
        med_road_style[i].color = element
      })
      const hillshadeIndex = med_road_style.findIndex(
        el => el.unlocalized_label === 'Hillshade'
      )
      med_road_style[hillshadeIndex].visible = simpleStyle.hillshade
      /*
        .filter(el => el.unlocalized_label === 'Hillshade')
        .forEach(el => {
          el.visible = simpleStyle.hillshade
        })*/
    }
    return med_road_style
  }

  function applyStyle(bgLayer: BaseLayer, item: StyleItem[]) {
    item.forEach(item => applyStyleFromItem(bgLayer, item))
  }
  function applyStyleFromItem(bgLayer: BaseLayer, item: StyleItem) {
    // consider layer to be a Maplibre Layer
    const mbMap = (bgLayer as any).maplibreMap
    item.styleProperties.forEach(props => {
      props.properties.forEach(prop => {
        if (
          [
            'lu_bridge_path case',
            'lu_landcover_wood',
            'lu_landcover_grass',
            'lu_waterway_tunnel',
          ].indexOf(prop) !== -1
        )
          return
        if (item.color) {
          mbMap.setPaintProperty(prop, `${props.type}-color`, item.color)
          mbMap.setPaintProperty(prop, `${props.type}-opacity`, 1)
        }
        mbMap.setLayoutProperty(
          prop,
          'visibility',
          item.visible ? 'visible' : 'none'
        )
      })
    })
  }

  function checkSelection(
    bgStyle: StyleItem[],
    simpleStyleConf: SimpleRoadStyle[]
  ) {
    return simpleStyleConf.map((style: SimpleRoadStyle) =>
      Object.assign(style, {
        selected: style.colors.every(
          (element, i) => bgStyle[i]?.color === element
        ),
      })
    )
  }

  return {
    setConfigForLayer,
    getRoadStyleFromSimpleStyle,
    applyStyle,
    checkSelection,
  }
}
