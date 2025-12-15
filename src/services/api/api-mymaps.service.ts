import { DrawnFeatureId } from '@/services/ol-feature/ol-feature-drawn'
import { fetchApi } from './api.service'

const MYMAPS_URL = import.meta.env.VITE_MYMAPS_URL

export type MyMapsJson = MyMapJson[]

export interface MyMapJson {
  title: string
  uuid: string
  public: boolean
  create_date: string
  update_date: string
  last_feature_update: string
  category: string
  owner: string
  dirty?: boolean
  deletedWhileOffline?: boolean
}

export interface MyMap {
  uuid: string
  user_login: string
  title: string
  description: string
  public: boolean
  create_date: string
  update_date: string
  zoom: number | null
  x: number | null
  y: number | null
  theme: string
  bg_layer: string
  bg_opacity: number
  layers: string // eg. "pag_pos,pag_ssmn,pag_infos_supp,pag_pap_approuves,pag_pcn,pag_pag,tour_randonnee_all"
  layers_indices: string // eg. "0,1,2,3,4,5,6"
  layers_opacity: string // eg.  "1,1,1,1,1,0.7,1"
  layers_visibility: string // eg. "true,true,true,true,true,true,true"
  selected_node: null
  rating: number
  rating_count: number
  category_id: number
  label: string | null
  is_editable: boolean
}

/**
 * Get all the maps of the connected user
 * @returns The user's maps list
 */
export async function fetchMyMaps() {
  const response = await fetchApi(MYMAPS_URL + '/maps', {})

  if (!response.ok) {
    throw new Error('Error while trying to get My Maps')
  }

  const json = <MyMapsJson>await response.json()

  return json
}

/**
 * Get info for My Map with the given uuid
 * @param uuid
 * @returns
 */
export async function fetchMyMap(uuid: string) {
  const response = await fetchApi(MYMAPS_URL + '/map/' + uuid, {})

  if (!response.ok) {
    throw new Error('Error while trying to get My Map info')
  }

  const json = <MyMap>await response.json()

  return json
}

export async function fetchMyMapfeatures(uuid: string) {
  const response = await fetchApi(MYMAPS_URL + '/features/' + uuid, {})

  if (!response.ok) {
    throw new Error('Error while trying to get My Map features')
  }

  const json = <MyMap>await response.json()

  return json
}

export interface Cateorgy {
  id: number
  allow_labeling: boolean | null
  name: string
}

/**
 * Retrieve all My Maps categories
 * @returns
 */
export async function fetchCategories() {
  const response = await fetchApi(MYMAPS_URL + '/categories', {})

  if (!response.ok) {
    throw new Error('Error while trying to get categories')
  }

  const json = <Array<Cateorgy>>await response.json()

  return json
}

export interface MyMapCreatedJson {
  success: boolean
  uuid: string
}

/**
 * Call api to create a map for a user
 * @param title
 * @param description
 * @param categoryId
 * @param publique
 * @returns
 */
export async function createMyMap(
  title: string,
  description: string,
  categoryId: number,
  publique: boolean
) {
  const payload = {
    title,
    description,
    category_id: categoryId,
    public: publique,
  }
  const response = await fetchApi(MYMAPS_URL + '/create', payload, 'POST')

  if (!response.ok) {
    throw new Error('Error while trying to create My Map')
  }

  const json = <MyMapCreatedJson>await response.json()

  return json
}

/**
 * Call api to edit a map for a user (title, description, public and cat)
 * @param uuid
 * @param title
 * @param description
 * @param categoryId
 * @param publique
 * @returns
 */
export async function editMyMap(
  uuid: string,
  title: string,
  description: string,
  categoryId: number,
  publique: boolean
) {
  const payload = {
    title,
    description,
    category_id: categoryId,
    public: publique,
    dirty: true,
  }
  const response = await fetchApi(
    MYMAPS_URL + '/update/' + uuid,
    payload,
    'PUT'
  )

  if (!response.ok) {
    throw new Error('Error while trying to update My Map')
  }

  const json = <MyMapCreatedJson>await response.json()

  return json
}

/**
 * Call api to update layers and feature of a Mymap
 * @param uuid
 * @param bgLayer
 * @param bgOpacity
 * @param layers
 * @param layersOpacity
 * @param layersVisibility
 * @param layersIndices
 * @param theme
 * @returns
 */
export async function updateMyMap(
  uuid: string,
  bgLayer: string,
  bgOpacity: number,
  layers: string,
  layersOpacity: string,
  layersVisibility: string,
  layersIndices: string,
  theme: string
) {
  const payload = {
    bgLayer,
    bgOpacity,
    layers,
    layers_opacity: layersOpacity,
    layers_visibility: layersVisibility,
    layers_indices: layersIndices,
    theme,
  }
  const response = await fetchApi(
    MYMAPS_URL + '/update/' + uuid,
    payload,
    'PUT'
  )

  if (!response.ok) {
    throw new Error('Error while trying to update My Map')
  }

  const json = <MyMapCreatedJson>await response.json()

  return json
}

/**
 * Call api to copy a map for a user
 * @param uuid
 * @param title
 * @param description
 * @param categoryId
 * @param publique
 * @returns
 */
export async function copyMyMap(
  uuid: string,
  title: string,
  description: string,
  categoryId: number,
  publique: boolean
) {
  const payload = {
    title,
    description,
    category_id: categoryId,
    public: publique,
  }
  const response = await fetchApi(MYMAPS_URL + '/copy/' + uuid, payload, 'POST')

  if (!response.ok) {
    throw new Error('Error while trying to copy My Map')
  }

  const json = <MyMapCreatedJson>await response.json()

  return json
}

/**
 * Call api to delete My Map with uuid
 * @param uuid My Map uuid
 * @returns true if map was successfully deleted
 */
export async function deleteMyMap(uuid: string) {
  const response = await fetchApi(MYMAPS_URL + '/delete/' + uuid, {}, 'DELETE')

  if (!response.ok) {
    throw new Error('Error while trying to delete My Map')
  }

  const json = <{ success: boolean }>await response.json()

  return json.success
}

export async function clearMyMap(uuid: string) {
  const response = await fetchApi(
    MYMAPS_URL + '/delete_all_features/' + uuid,
    {},
    'DELETE'
  )

  if (!response.ok) {
    throw new Error('Error while trying to clear My Map')
  }

  const json = <{ success: boolean }>await response.json()

  return json.success
}

export interface MyMapSaveFeatureJson {
  success: boolean
  id?: number
}

export async function saveMyMapFeature(uuid: string, feature: string) {
  const payload = {
    feature,
  }
  const response = await fetchApi(
    MYMAPS_URL + '/save_feature/' + uuid,
    payload,
    'POST'
  )

  if (!response.ok) {
    throw new Error('Error while trying to save feature to My Map')
  }

  const json = <MyMapSaveFeatureJson>await response.json()

  return json
}

export interface MyMapSaveOrderJson {
  success: boolean
}

/**
 * Save the order of features in a My Map
 * @param uuid My Map uuid
 * @param order Array of objects: { fid: number, display_order: number }
 * @returns
 */
export async function saveMyMapOrder(
  uuid: string,
  orders: { fid: number; display_order: number }[]
) {
  const payload = {
    orders: JSON.stringify(orders),
  }
  const response = await fetchApi(
    MYMAPS_URL + '/save_order/' + uuid,
    payload,
    'POST'
  )

  if (!response.ok) {
    throw new Error('Error while trying to save features order to My Map')
  }

  const json = <MyMapSaveOrderJson>await response.json()

  return json
}

export async function deleteMyMapFeature(featureId: DrawnFeatureId) {
  const response = await fetchApi(
    MYMAPS_URL + '/delete_feature/' + featureId,
    {},
    'DELETE'
  )

  if (!response.ok) {
    throw new Error('Error while trying to delete feature to My Map')
  }

  const json = <MyMapSaveFeatureJson>await response.json()

  return json
}

export interface MyMapFetchFeatureJson {
  geometry: { [key: string]: any }
  id: number
  properties: {
    map_id: string
    description: string
    color: string
    stroke: string
    linestyle: string
    isLabel: boolean
    label: string
    display_order: number
  }
}

export interface MyMapFetchFeaturesJson {
  type: 'FeatureCollection'
  features: MyMapFetchFeatureJson[]
}

export async function fetchMyMapFeatures(uuid: string) {
  const response = await fetchApi(MYMAPS_URL + '/features/' + uuid, {})

  if (!response.ok) {
    throw new Error('Error while trying to fetch My Map features')
  }

  const json = <MyMapFetchFeaturesJson>await response.json()

  return json
}
