import { Layer, LayerId } from '@/stores/map.store.model'
import {
  fetchMyMapsLayer,
  isMyMapsLayerId,
  uuidFromMyMapsLayerId,
} from '@/services/my-maps/my-maps-layer.service'

export interface AsyncLayerResolver {
  match: (layerId: LayerId) => boolean
  resolve: (layerId: LayerId) => Promise<Layer>
}

const resolvers: AsyncLayerResolver[] = [
  {
    match: isMyMapsLayerId,
    resolve: layerId => fetchMyMapsLayer(uuidFromMyMapsLayerId(layerId)),
  },
]

export function isAsyncLayerStub(layer: Layer): boolean {
  return resolvers.some(r => r.match(layer.id))
}

export async function resolveLayerStub(
  stub: Layer
): Promise<Layer | undefined> {
  const entry = resolvers.find(r => r.match(stub.id))
  if (!entry) {
    return undefined
  }

  const layer = await entry.resolve(stub.id)
  layer.opacity = stub.opacity ?? 1
  return layer
}
