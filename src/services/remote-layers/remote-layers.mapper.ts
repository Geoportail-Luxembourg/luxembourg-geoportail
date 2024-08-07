import { proxyUrlHelper } from '@/services/proxyurl/proxyurl.helper'
import { useMapStore } from '@/stores/map.store'
import { Layer, LayerId, LayerImageType } from '@/stores/map.store.model'
import { LayerTreeNodeModel } from '@/components/layer-tree/layer-tree.model'

import { RemoteLayer, REMOTE_SERVICE_TYPE } from './remote-layers.model'

function sortLayerTreeNoChildrenFirst(a: RemoteLayer, b: RemoteLayer) {
  if ((a.children && !b.children) || b.children?.length === 0) {
    return 1
  }

  if ((b.children && !a.children) || a.children?.length === 0) {
    return -1
  }

  return 0
}

export function remoteLayersToLayerTreeMapper(
  node: RemoteLayer,
  urlWms: string,
  depth = 0
): LayerTreeNodeModel {
  const { name = '', type = REMOTE_SERVICE_TYPE.WMS, children } = node
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

export function remoteLayerIdtoLayer(layerId: string) {
  const id = decodeURIComponent(layerId)
  const [type, url, name] = id.split('||')

  return remoteLayerToLayer({
    id,
    url: proxyUrlHelper.getProxyfiedUrl(url),
    remoteLayer: { name, type } as RemoteLayer,
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
  const { name = '', type = REMOTE_SERVICE_TYPE.WMS } = remoteLayer
  return {
    id,
    name,
    layers: name,
    url,
    type,
    imageType: LayerImageType.PNG,
    // TODO for displaying WMTS: might need to add more params here
    // wmts_params: {
    //   Format: remoteLayer.Format,
    //   TileMatrixSetLink: remoteLayer.TileMatrixSetLink,
    //   WGS84BoundingBox: remoteLayer.WGS84BoundingBox,
    // },
  }
}
