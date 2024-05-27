export interface OfflineLayerSpec {
  id: string
  backgroundLayer: boolean
  key: string
  layerType: string
  layerSerialization: string
  type: 'tile' | 'vector'
}
