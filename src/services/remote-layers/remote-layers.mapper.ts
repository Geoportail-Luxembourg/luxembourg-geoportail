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
  const { name = '', title, type = REMOTE_SERVICE_TYPE.WMS, children } = node
  // Encode dashes as %2D for v3 compatibility (v3 uses dash as layer separator)
  const id = `${type}||${urlWms}||${name}`.split('-').join('%2D')
  const mapStore = useMapStore()

  return {
    id,
    name,
    label: title || name,
    depth,
    children: children
      ?.sort(sortLayerTreeNoChildrenFirst)
      .map(child => remoteLayersToLayerTreeMapper(child, urlWms, depth + 1)),
    checked: mapStore.hasLayer(id),
    expanded: false,
  }
}

export function remoteLayerIdtoLayer(layerId: string) {
  // Some permalinks double-encode the layer ID (e.g. %257C%257C instead of %7C%7C).
  // Decode until the string stabilises so that split('||') works correctly.
  let id = layerId
  try {
    let prev = id
    do {
      prev = id
      id = decodeURIComponent(id)
    } while (id !== prev)
  } catch {
    // malformed URI — keep last successfully decoded value
  }

  const [type, url, name] = id.split('||')

  if (!type || !url) {
    console.warn(`[remoteLayerIdtoLayer] malformed layerId: ${layerId}`) // eslint-disable-line no-console
    return null
  }

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
