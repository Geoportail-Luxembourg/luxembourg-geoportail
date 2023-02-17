import { useMapStore } from '@/stores/map.store'
import { Layer, LayerId, LayerImageType } from '@/stores/map.store.model'
import { LayerTreeNodeModel } from '@/components/layer-tree/layer-tree.model'
import {
  OgcClientWmsLayerSummary,
  OgcClientWmsLayerFull,
  WmtsCapabilitiesLayer,
} from './remote-layers.model'
import { remoteLayersService } from './remote-layers.service'
import { LayerType } from './../../composables/themes/themes.model'

function sortLayerTreeNoChildrenFirst(
  a: OgcClientWmsLayerSummary,
  b: OgcClientWmsLayerSummary
) {
  if (a.children && !b.children) {
    return 1
  }

  if (b.children && !a.children) {
    return -1
  }

  return 0
}

export function remoteWmsLayersToLayerTreeMapper(
  node: OgcClientWmsLayerSummary,
  urlWms: string,
  depth = 0
): LayerTreeNodeModel {
  const { name, children } = node
  const id = `WMS||${urlWms}||${name}`.split('-').join('%2D')
  const mapStore = useMapStore()

  return {
    id,
    name,
    depth,
    children: children
      ?.sort(sortLayerTreeNoChildrenFirst)
      .map(child => remoteWmsLayersToLayerTreeMapper(child, urlWms, depth + 1)),
    checked: mapStore.hasLayer(id),
    expanded: false,
  }
}

export function remoteWmtsLayersToLayerTreeMapper(
  layers: WmtsCapabilitiesLayer[],
  urlWmts: string
): LayerTreeNodeModel {
  const mapStore = useMapStore()
  // root node for flat wmts layers
  return {
    id: '',
    name: '',
    depth: 0,
    checked: false,
    expanded: true,
    children: layers.map(layer => {
      const id = `WMTS||${urlWmts}||${layer.Identifier}`.split('-').join('%2D')
      return {
        id,
        abstract: layer.Abstract,
        name: layer.Identifier,
        title: layer.Title,
        checked: mapStore.hasLayer(id),
        expanded: false,
        depth: 0,
      }
    }),
  }
}

export function remoteLayerIdtoLayer(layerId: string) {
  const id = decodeURIComponent(layerId)
  const [url, name] = id.replace('WMS||', '').split('||')

  return remoteLayerToLayer({
    id,
    url: remoteLayersService.getProxyfiedUrl(url),
    remoteLayer: { name } as OgcClientWmsLayerFull,
  })
}

export function remoteLayerToLayer({
  id,
  url,
  remoteLayer,
}: {
  id: LayerId
  url: string
  remoteLayer: OgcClientWmsLayerFull | WmtsCapabilitiesLayer
}): Layer {
  let name
  let type: LayerType
  if ((id as string).indexOf('WMS') === 0) {
    name = (remoteLayer as OgcClientWmsLayerFull).name || ''
    type = 'WMS'
  } else {
    name = (remoteLayer as WmtsCapabilitiesLayer).Identifier || ''
    type = 'WMTS'
  }

  return {
    id,
    name,
    layers: name,
    url,
    type,
    imageType: LayerImageType.PNG,
    // might need to add more params for wmts
    // wmts_params: {
    //   Format: remoteLayer.Format,
    //   TileMatrixSetLink: remoteLayer.TileMatrixSetLink,
    //   WGS84BoundingBox: remoteLayer.WGS84BoundingBox,
    // },
  }
}
