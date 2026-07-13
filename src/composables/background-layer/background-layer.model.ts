export interface IBackgroundLayer {
  name: string
  id: number
  labelKey?: string
}
export interface BgLayerDefaultsType {
  [theme: string]: number
}

export const BLANK_BACKGROUNDLAYER: IBackgroundLayer = {
  name: 'blank',
  id: 0,
}

export type BackgroundLayerConfig = {
  icon_id: string
  label_key?: string
  vector_id: string
  simple_style_class: string
  medium_style_class: string
  expert_style_class: string
  id: number
  is_default: boolean
}
