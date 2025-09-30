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
  layers: string | null // eg. "pag_pos,pag_ssmn,pag_infos_supp,pag_pap_approuves,pag_pcn,pag_pag,tour_randonnee_all"
  layers_indices: string | null // eg. "0,1,2,3,4,5,6"
  layers_opacity: string | null // eg.  "1,1,1,1,1,0.7,1"
  layers_visibility: string | null // eg. "true,true,true,true,true,true,true"
  selected_node: null
  rating: number
  rating_count: number
  category_id: number
  label: string | null
  is_editable: boolean
}
