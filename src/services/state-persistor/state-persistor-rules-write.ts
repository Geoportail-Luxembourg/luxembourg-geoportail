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

class StatePersistorRulesWrite implements StatePersistorRules {
  processRules() {
    return SP_AVAILABLE_STORAGES.both
  }

  processRulesForKey(key: string) {
    if (key === SP_KEY_VERSION) return SP_AVAILABLE_STORAGES.permalink

    return void 0
  }

  ruleUseLocalStorage(paramKeys: ParamKeys) {
    return [rule0].reduce(
      (prevResult, currRule) => prevResult || currRule(paramKeys),
      false
    )
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

const statePersistorRulesWrite = new StatePersistorRulesWrite()
export default statePersistorRulesWrite
