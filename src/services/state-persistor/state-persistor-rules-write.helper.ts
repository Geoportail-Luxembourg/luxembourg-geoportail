import {
  ParamKeys,
  SP_AVAILABLE_STORAGES,
  SP_KEY_THEME,
  SP_KEY_LAYERS_OPEN,
  SP_KEY_VERSION,
  SP_KEY_SERIAL,
  SP_KEYS_STYLE,
  SP_KEY_LAYERCOMPARATOR,
  SP_KEY_LAYERCOMPARATOR_SLIDERRATIO,
  StatePersistorRulesHelper,
  SP_KEY_FEATURES,
} from './state-persistor.model'

export abstract class RulesWriteHelper extends StatePersistorRulesHelper {
  static processRules() {
    return SP_AVAILABLE_STORAGES.permalinkAndLocalStorage
  }

  // eslint-disable-next-line
  static processRulesForKey(key: string, paramKeys: ParamKeys) {
    if (RulesWriteHelper.ruleUsePermalink(key)) {
      return SP_AVAILABLE_STORAGES.permalink
    }
    if (key === SP_KEY_LAYERS_OPEN) {
      return SP_AVAILABLE_STORAGES.localStorage
    }
    if (SP_KEYS_STYLE.includes(key)) {
      return SP_AVAILABLE_STORAGES.localStorage
    }
    if (key === SP_KEY_SERIAL) {
      return SP_AVAILABLE_STORAGES.permalink
    }
    if (key === SP_KEY_FEATURES) {
      return SP_AVAILABLE_STORAGES.permalink
    }
    if (key === SP_KEY_THEME) {
      return SP_AVAILABLE_STORAGES.permalinkAsPath
    }

    return undefined
  }

  static ruleUsePermalink(currentKey: string) {
    return [
      ruleIsLayerComparator,
      ruleIsVersion,
      ruleIsThemeForGhPagesHACK,
    ].reduce(
      (prevResult, currRule) => prevResult || currRule(currentKey),
      false
    )
  }
}

const ruleIsLayerComparator = (currentKey: string) => {
  return (
    currentKey === SP_KEY_LAYERCOMPARATOR ||
    currentKey === SP_KEY_LAYERCOMPARATOR_SLIDERRATIO
  )
}

/**
 * Test if we are currently writing the version param, if yes, it will write in the permalink
 */
const ruleIsVersion = (currentKey: string) => {
  return currentKey === SP_KEY_VERSION
}

/**
 * Special hack for gh-pages: theme is normally stored as path in url. We use query params when deploying to gh-pages.
 */
const ruleIsThemeForGhPagesHACK = (currentKey: string) => {
  return (
    currentKey === SP_KEY_THEME &&
    import.meta.env.VITE_DEPLOY_GHPAGES === 'true'
  )
}
