export const SP_KEY_IPV6 = 'ipv6'
export const SP_KEY_APPLOGIN = 'applogin'
export const SP_KEY_LOCALFORAGE = 'localforage'
export const SP_KEY_DEBUG = 'debug'
export const SP_KEY_FID = 'fid'
export const SP_KEY_LANG = 'lang'
export const SP_KEY_ADDRESS = 'address'
export const SP_KEY_VERSION = 'version'
export const SP_KEY_MAPID = 'map_id'
export const SP_KEY_BGLAYER = 'bgLayer'

export enum SP_AVAILABLE_STORAGES {
  localStorage = 0,
  permalink = 1,
  both = 2,
}

export type ParamKeys = { [key: string]: string }

export interface StatePersistorRules {
  processRules(paramKeys: ParamKeys): SP_AVAILABLE_STORAGES
  processRulesForKey(
    key: string,
    paramKeys: ParamKeys
  ): SP_AVAILABLE_STORAGES | undefined
}
