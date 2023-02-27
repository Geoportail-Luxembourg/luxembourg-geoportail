import {
  ParamKeys,
  SP_AVAILABLE_STORAGES,
  SP_KEY_THEME,
  SP_KEY_VERSION,
  StatePersistorRulesHelper,
} from './state-persistor.model'

export abstract class RulesWriteHelper extends StatePersistorRulesHelper {
  static processRules() {
    return SP_AVAILABLE_STORAGES.both
  }

  // eslint-disable-next-line
  static processRulesForKey(key: string, paramKeys: ParamKeys) {
    if (key === SP_KEY_VERSION) {
      return SP_AVAILABLE_STORAGES.permalink
    }

    if (key === SP_KEY_THEME) {
      return SP_AVAILABLE_STORAGES.permalinkAsPath
    }

    return undefined
  }
}
