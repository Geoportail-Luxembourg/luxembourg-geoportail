import {
  ParamKeys,
  SP_KEY_ADDRESS,
  SP_KEY_APPLOGIN,
  SP_KEY_DEBUG,
  SP_KEY_FID,
  SP_KEY_IPV6,
  SP_KEY_LANG,
  SP_KEY_LOCALFORAGE,
} from '../state-persistor.model'

export default function isV3(paramKeys: ParamKeys) {
  return (
    ruleEmptyParams(paramKeys) ||
    ruleOneParamAmong(paramKeys) ||
    ruleTwoParamsAmong(paramKeys) ||
    ruleThreeParamsAmong(paramKeys)
  )
}

const ruleEmptyParams = (paramKeys: ParamKeys) => {
  return Object.keys(paramKeys).length === 0
}

const ruleOneParamAmong = (paramKeys: ParamKeys) => {
  const keys = Object.keys(paramKeys)

  return (
    Object.keys(paramKeys).length === 1 &&
    [
      SP_KEY_IPV6,
      SP_KEY_APPLOGIN,
      SP_KEY_LOCALFORAGE,
      SP_KEY_FID,
      SP_KEY_LANG,
      SP_KEY_ADDRESS,
      SP_KEY_DEBUG,
    ].some(spKey => keys.indexOf(spKey) !== -1)
  )
}

const ruleTwoParamsAmong = (paramKeys: ParamKeys) => {
  const keys = Object.keys(paramKeys)
  const fnEvery = (spKey: string) => keys.indexOf(spKey) !== -1
  const tuples = [
    [SP_KEY_APPLOGIN, SP_KEY_LOCALFORAGE],
    [SP_KEY_DEBUG, SP_KEY_FID],
    [SP_KEY_LANG, SP_KEY_FID],
    [SP_KEY_DEBUG, SP_KEY_LANG],
    [SP_KEY_DEBUG, SP_KEY_ADDRESS],
    [SP_KEY_LANG, SP_KEY_ADDRESS],
  ]

  return (
    Object.keys(paramKeys).length === 2 &&
    tuples.reduce(
      (prevResult, currRule) => prevResult || currRule.every(fnEvery),
      false
    )
  )
}

const ruleThreeParamsAmong = (paramKeys: ParamKeys) => {
  const keys = Object.keys(paramKeys)
  const fnEvery = (spKey: string) => keys.indexOf(spKey) !== -1
  const tuple1 = [SP_KEY_IPV6, SP_KEY_APPLOGIN, SP_KEY_LOCALFORAGE].every(
    fnEvery
  )
  const tuple2 = [SP_KEY_DEBUG, SP_KEY_FID, SP_KEY_LANG].every(fnEvery)
  const tuple3 = [SP_KEY_DEBUG, SP_KEY_ADDRESS, SP_KEY_LANG].every(fnEvery)

  return Object.keys(paramKeys).length === 3 && (tuple1 || tuple2 || tuple3)
}

// Extracted from code legacy:
// (paramKeys.length === 0 ||
//   (paramKeys.length === 1 && (paramKeys.indexOf('ipv6') >= 0 ||
//   paramKeys.indexOf('applogin') >= 0 || paramKeys.indexOf('localforage') >= 0)) ||
//   (paramKeys.length === 3 && (paramKeys.indexOf('ipv6') >= 0 &&
//   paramKeys.indexOf('applogin') >= 0 && paramKeys.indexOf('localforage') >= 0)) ||
//   (paramKeys.length === 2 && (paramKeys.indexOf('applogin') >= 0 &&
//   paramKeys.indexOf('localforage') >= 0)) ||
//   (paramKeys.length === 1 && (paramKeys.indexOf('debug') >= 0 ||
//   paramKeys.indexOf('fid') >= 0 || paramKeys.indexOf('lang') >= 0)) ||
//   (paramKeys.length === 1 && (paramKeys.indexOf('debug') >= 0 ||
//   paramKeys.indexOf('address') >= 0 || paramKeys.indexOf('lang') >= 0)) ||
//   (paramKeys.length === 2 &&
//   ((paramKeys.indexOf('debug') >= 0 && paramKeys.indexOf('fid') >= 0) ||
//   (paramKeys.indexOf('lang') >= 0 && paramKeys.indexOf('fid') >= 0) ||
//   (paramKeys.indexOf('debug') >= 0 && paramKeys.indexOf('lang') >= 0))) ||
//   (paramKeys.length === 2 &&
//   ((paramKeys.indexOf('debug') >= 0 && paramKeys.indexOf('address') >= 0) ||
//   (paramKeys.indexOf('lang') >= 0 && paramKeys.indexOf('address') >= 0) ||
//   (paramKeys.indexOf('debug') >= 0 && paramKeys.indexOf('lang') >= 0))) ||
//   (paramKeys.length === 3 &&
//   paramKeys.indexOf('debug') >= 0 && paramKeys.indexOf('fid') >= 0 &&
//   paramKeys.indexOf('lang') >= 0) ||
//   (paramKeys.length === 3 &&
//   paramKeys.indexOf('debug') >= 0 && paramKeys.indexOf('address') >= 0 &&
//   paramKeys.indexOf('lang') >= 0
//   ))
