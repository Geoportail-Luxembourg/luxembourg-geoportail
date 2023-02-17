import { useMapStore } from '@/stores/map.store'
import { Layer, LayerId, LayerImageType } from '@/stores/map.store.model'
import { LayerTreeNodeModel } from '@/components/layer-tree/layer-tree.model'
import { RemoteLayer } from './remote-layers.model'
import { remoteLayersService } from './remote-layers.service'

function sortLayerTreeNoChildrenFirst(a: RemoteLayer, b: RemoteLayer) {
  if (a.children && !b.children) {
    return 1
  }

  if (b.children && !a.children) {
    return -1
  }

  return 0
}

export function remoteLayersToLayerTreeMapper(
  node: RemoteLayer,
  urlWms: string,
  depth = 0
): LayerTreeNodeModel {
  const { name = '', type = 'WMS', children } = node
  const id = `${type}||${urlWms}||${name}`.split('-').join('%2D')
  const mapStore = useMapStore()

  return {
    id,
    name,
    depth,
    children: children
      ?.sort(sortLayerTreeNoChildrenFirst)
      .map(child => remoteLayersToLayerTreeMapper(child, urlWms, depth + 1)),
    checked: mapStore.hasLayer(id),
    expanded: false,
  }
}

// TODO: also handle WMTS here
export function remoteLayerIdtoLayer(layerId: string) {
  const id = decodeURIComponent(layerId)
  const [url, name] = id.replace('WMS||', '').split('||')

  return remoteLayerToLayer({
    id,
    url: remoteLayersService.getProxyfiedUrl(url),
    remoteLayer: { name } as RemoteLayer,
  })
}

export function remoteLayerToLayer({
  id,
  url,
  remoteLayer,
}: {
  id: LayerId
  url: string
  remoteLayer: RemoteLayer
}): Layer {
  const { name = '', type = 'WMS' } = remoteLayer

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
