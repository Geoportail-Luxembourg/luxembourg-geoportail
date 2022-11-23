import { expect } from '@open-wc/testing'
import { ParamKeys, SP_KEY_IPV6 } from '../state-persistor.model'
import { statePersistorStorageProxy } from './state-persistor-storage.proxy'
import { urlStorage } from './state-persistor-url.storage'

describe('Proxy functions', () => {
  describe('StatePersistorStorageProxy.getStoragesRead', () => {
    const key = 'anything'
    // const paramKeys =
    //   'https://map.geoportail.lu/theme/tourisme?version=3&zoom=19&X=690566&Y=6434928&lang=fr&crosshair=false&rotation=0.41038675946050174&serial=%225f672a35-204e-4060-bde1-879f351a9449%22&serialLayer=%22topogr_global%22&layers=&opacities=&bgLayer=orthogr_2013_global&lc=false&sliderRatio=0.365625&features=Fp(1n5b-nbs9H~display_order*0%27__refreshProfile__*false%27n*Ch%25C3%25A2teau%2520de%2520Vianden%27d*%27c*%2523ed1c24%27o*0.2%27e*1.25%27t*10%27a*0%27l*plain%27s*circle%27i*true)&3d_layers=ACT2022_BD_L_BATI3D_LOD2%2CVDL2022_LOD2_IMPORT_old%2CBridges_LOD2%2CACT2019_LiDAR_Bridges_LOD1%2CACT2019_LiDAR_Vegetation&3d_enabled=true&3d_lon=6.20466&3d_lat=49.93264&3d_elevation=418&3d_heading=336.532&3d_pitch=-30.134'

    let paramKeys: ParamKeys // = { theme: 'tourisme', zoom: '1' } // TODO:

    describe('Process Rules - ruleEmptyParams', () => {
      beforeEach(() => {
        paramKeys = {}
      })

      it('returns localStorage', () => {
        expect(
          statePersistorStorageProxy.getStoragesRead(key, paramKeys)
        ).to.eql([localStorage])
      })
    })

    describe('Returned deposit is local storage - ruleOneParamOnly', () => {
      beforeEach(() => {
        paramKeys = { [SP_KEY_IPV6]: '' }
      })

      it('returns localStorage', () => {
        expect(
          statePersistorStorageProxy.getStoragesRead(key, paramKeys)
        ).to.eql([localStorage])
      })
    })

    describe('Returned deposit is url wrapper', () => {
      beforeEach(() => {})

      it('returns url wrapper', () => {
        expect(
          statePersistorStorageProxy.getStoragesRead(key, paramKeys)
        ).to.eql(urlStorage)
      })
    })

    describe('Returned deposits are both url wrapper and localstorage', () => {
      beforeEach(() => {})

      it('returns url wrapper and local storage', () => {
        const deposits = statePersistorStorageProxy.getStoragesRead(
          key,
          paramKeys
        )
        expect(deposits[0]).to.eql(urlStorage)
        expect(deposits[0]).to.eql(localStorage)
      })
    })
  })
})

// TODO: test

// if (keys.length === 0 ||
//   (keys.length === 1 && (keys.indexOf('ipv6') >= 0 ||
//   keys.indexOf('applogin') >= 0 || keys.indexOf('localforage') >= 0)) ||
//   (keys.length === 3 && (keys.indexOf('ipv6') >= 0 &&
//   keys.indexOf('applogin') >= 0 && keys.indexOf('localforage') >= 0)) ||
//   (keys.length === 2 && (keys.indexOf('applogin') >= 0 &&
//   keys.indexOf('localforage') >= 0)) ||
//   (keys.length === 1 && (keys.indexOf('debug') >= 0 ||
//   keys.indexOf('fid') >= 0 || keys.indexOf('lang') >= 0)) ||
//   (keys.length === 1 && (keys.indexOf('debug') >= 0 ||
//   keys.indexOf('address') >= 0 || keys.indexOf('lang') >= 0)) ||
//   (keys.length === 2 &&
//   ((keys.indexOf('debug') >= 0 && keys.indexOf('fid') >= 0) ||
//   (keys.indexOf('lang') >= 0 && keys.indexOf('fid') >= 0) ||
//   (keys.indexOf('debug') >= 0 && keys.indexOf('lang') >= 0))) ||
//   (keys.length === 2 &&
//   ((keys.indexOf('debug') >= 0 && keys.indexOf('address') >= 0) ||
//   (keys.indexOf('lang') >= 0 && keys.indexOf('address') >= 0) ||
//   (keys.indexOf('debug') >= 0 && keys.indexOf('lang') >= 0))) ||
//   (keys.length === 3 &&
//   keys.indexOf('debug') >= 0 && keys.indexOf('fid') >= 0 &&
//   keys.indexOf('lang') >= 0) ||
//   (keys.length === 3 &&
//   keys.indexOf('debug') >= 0 && keys.indexOf('address') >= 0 &&
//   keys.indexOf('lang') >= 0
//   )) {

//   }
