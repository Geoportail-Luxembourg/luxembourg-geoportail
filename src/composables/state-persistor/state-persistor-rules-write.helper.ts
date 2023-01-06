import {
  ParamKeys,
  SP_AVAILABLE_STORAGES,
  SP_KEY_APPLOGIN,
  SP_KEY_BGLAYER,
  SP_KEY_IPV6,
  SP_KEY_LOCALFORAGE,
  SP_KEY_MAPID,
  SP_KEY_VERSION,
  StatePersistorRules,
} from './state-persistor.model'

export default function rulesWriteHelper() {
  function processRules() {
    return SP_AVAILABLE_STORAGES.both
  }

  function processRulesForKey(key: string) {
    if (key === SP_KEY_VERSION) return SP_AVAILABLE_STORAGES.permalink

    return void 0
  }

  function ruleUseLocalStorage(paramKeys: ParamKeys) {
    return [rule0].reduce(
      (prevResult, currRule) => prevResult || currRule(paramKeys),
      false
    )
  }

  return {
    processRules,
    processRulesForKey,
    ruleUseLocalStorage
  }
}

const rule0 = (paramKeys: ParamKeys) => {
  // TODO: rename
  return (
    Object.keys(paramKeys).length === 3 &&
    paramKeys.hasOwnProperty(SP_KEY_IPV6) &&
    paramKeys.hasOwnProperty(SP_KEY_APPLOGIN) &&
    paramKeys.hasOwnProperty(SP_KEY_LOCALFORAGE)
  )
}

// TODO: add more rules
