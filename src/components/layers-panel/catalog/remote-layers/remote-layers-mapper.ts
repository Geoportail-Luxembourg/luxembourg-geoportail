import { Layer, LayerImageType } from '../../../../state/map/map.state.model'
import { LayerTreeNodeModel } from '../layer-tree/layer-tree.model'
import {
  OlClientWmsLayerSummary,
  OlClientWmsLayerFull,
} from './remote-layers.model'

function sortLayerTreeNoChildrenFirst(
  a: OlClientWmsLayerSummary,
  b: OlClientWmsLayerSummary
) {
  if (a.children && !b.children) {
    return 1
  }

  if (b.children && !a.children) {
    return -1
  }

  return 0
}

export function remoteLayersToLayerTreeMapper(
  node: OlClientWmsLayerSummary,
  urlWms: string,
  depth = 0
): LayerTreeNodeModel {
  const { name, children } = node

  return {
    id: `WMS||${urlWms}${name}`.split('-').join('%2D'),
    name,
    depth,
    children: children
      ?.sort(sortLayerTreeNoChildrenFirst)
      .map(child => remoteLayersToLayerTreeMapper(child, urlWms, depth + 1)),
    checked: false,
    expanded: false,
  }
}

export function remoteLayerToLayer({
  id,
  url,
  remoteLayer,
}: {
  id: string
  url: string
  remoteLayer: OlClientWmsLayerFull
}): Layer {
  const { name } = remoteLayer

  return {
    id,
    name: name || '',
    layers: name || '',
    url,
    type: 'WMS',
    imageType: LayerImageType.PNG,
  }
}
