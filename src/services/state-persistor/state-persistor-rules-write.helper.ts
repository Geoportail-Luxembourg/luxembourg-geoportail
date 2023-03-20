import {
  ParamKeys,
  SP_AVAILABLE_STORAGES,
  SP_KEY_THEME,
  SP_KEY_LAYERS_OPEN,
  SP_KEY_VERSION,
  SP_KEY_SERIAL,
  StatePersistorRulesHelper,
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
    if (
      key === 'basemap_2015_global' ||
      key === 'topogr_global' ||
      key === 'topo_bw_jpeg'
    ) {
      return SP_AVAILABLE_STORAGES.localStorage
    }
    if (key === SP_KEY_SERIAL) {
      return SP_AVAILABLE_STORAGES.permalink
    }
    if (key === SP_KEY_THEME) {
      return SP_AVAILABLE_STORAGES.permalinkAsPath
    }

    return undefined
  }

  static ruleUsePermalink(currentKey: string) {
    return [ruleIsVersion, ruleIsThemeForGhPagesHACK].reduce(
      (prevResult, currRule) => prevResult || currRule(currentKey),
      false
    )
  }
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
