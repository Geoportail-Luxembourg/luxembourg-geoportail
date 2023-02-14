import {
  ParamKeys,
  SP_AVAILABLE_STORAGES,
  SP_KEY_APPLOGIN,
  SP_KEY_IPV6,
  SP_KEY_LOCALFORAGE,
  StatePersistorRulesHelper,
} from './state-persistor.model'

/**
 * State persistor rules
 *  - must check version and tells if a version update is needed
 *  - checks params (mostly in url) if applogin, mode debug, ...
 *  - tells if must read or persist in: permalink or localstorage or both
 *
 * Extracted from legacy in static-ngeo/js/StateManager.js l. 85
 */
export abstract class RulesReadHelper extends StatePersistorRulesHelper {
  static processRules(paramKeys: ParamKeys) {
    if (RulesReadHelper.ruleUseLocalStorage(paramKeys)) {
      return SP_AVAILABLE_STORAGES.localStorage
    }

    return SP_AVAILABLE_STORAGES.permalink
  }

  // eslint-disable-next-line
  static processRulesForKey(key: string, paramKeys: ParamKeys) {
    // if (ruleLangInUrl(key, paramKeys)) return SP_AVAILABLE_STORAGES.permalink

    return undefined
  }

  static ruleUseLocalStorage(paramKeys: ParamKeys) {
    return [ruleEmptyParams, ruleOneParamOnly, ruleThreeParams].reduce(
      (prevResult, currRule) => prevResult || currRule(paramKeys),
      false
    )
  }
}

// const ruleLangInUrl = (key: string, paramKeys: ParamKeys) => {
//   return key === SP_KEY_LANG && paramKeys.hasOwnProperty(SP_KEY_LANG)
// }

/*
const ruleMustSetDefaultBgLayer = (paramKeys: ParamKeys) => {
  return (
    !paramKeys.hasOwnProperty(SP_KEY_MAPID) &&
    paramKeys.hasOwnProperty(SP_KEY_BGLAYER)
  )

  // TODO:
  // if (mapId === undefined &&
  //   !((this.initialState_.hasOwnProperty('bgLayer') &&
  //   this.initialState_['bgLayer'].length > 0 &&
  //   this.initialState_['bgLayer'] != 'blank') ||
  //   (this.initialState_.hasOwnProperty('layers') &&
  //   this.initialState_['layers'].length > 0) ||
  //   (this.initialState_.hasOwnProperty('fid') &&
  //   this.initialState_['fid'].length > 0)))
}*/

const ruleEmptyParams = (paramKeys: ParamKeys) => {
  return Object.keys(paramKeys).length === 0
}

const ruleOneParamOnly = (paramKeys: ParamKeys) => {
  return (
    Object.keys(paramKeys).length === 1 &&
    (paramKeys.hasOwnProperty(SP_KEY_IPV6) ||
      paramKeys.hasOwnProperty(SP_KEY_APPLOGIN) ||
      paramKeys.hasOwnProperty(SP_KEY_LOCALFORAGE))
  )
}

const ruleThreeParams = (paramKeys: ParamKeys) => {
  // TODO: rename
  return (
    Object.keys(paramKeys).length === 3 &&
    paramKeys.hasOwnProperty(SP_KEY_IPV6) &&
    paramKeys.hasOwnProperty(SP_KEY_APPLOGIN) &&
    paramKeys.hasOwnProperty(SP_KEY_LOCALFORAGE)
  )
}
