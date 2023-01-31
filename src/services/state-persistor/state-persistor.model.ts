import { UrlStorage } from './storage/url-storage'

export const SP_KEY_IPV6 = 'ipv6'
export const SP_KEY_APPLOGIN = 'applogin'
export const SP_KEY_LOCALFORAGE = 'localforage'
export const SP_KEY_DEBUG = 'debug'
export const SP_KEY_FID = 'fid'
export const SP_KEY_LANG = 'lang'
export const SP_KEY_ADDRESS = 'address'
export const SP_KEY_VERSION = 'version'
export const SP_KEY_MAPID = 'map_id'
export const SP_KEY_LAYERS = 'layers'
export const SP_KEY_BGLAYER = 'bgLayer'
export const SP_KEY_OPACITIES = 'opacities'
export const SP_KEY_ZOOM = 'zoom'
export const SP_KEY_SRS = 'SRS'
export const SP_KEY_X = 'X'
export const SP_KEY_Y = 'Y'

export enum SP_AVAILABLE_STORAGES {
  localStorage = 0,
  permalink = 1,
  both = 2,
}

export type ParamKeys = { [key: string]: string }
export type StatePersistorStorage = Storage | UrlStorage

export abstract class StatePersistorRulesHelper {
  abstract processRules(paramKeys: ParamKeys): SP_AVAILABLE_STORAGES | undefined
  abstract processRulesForKey(
    key: string,
    paramKeys: ParamKeys
  ): SP_AVAILABLE_STORAGES | undefined
}