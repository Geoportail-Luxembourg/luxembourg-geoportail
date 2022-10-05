export interface ConfigModel {
  ogcServers: {}
  themes: ThemeNodeModel[]
  background_layers: []
  errors: []
  lux_3d: {}
}

export interface ThemeNodeModel {
  id: number
  name: string
  children?: ThemeNodeModel[]
  metadata: {
    is_expanded: boolean
  }
}
