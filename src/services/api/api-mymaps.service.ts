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

export async function fetchMyMap(uuid: string) {
  const response = await fetchApi(MYMAPS_URL + '/map/' + uuid, {})

  if (!response.ok) {
    throw new Error('Error while trying to get My Map info')
  }

  const json = <MyMap>await response.json()

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
export async function createMyMaps(
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
