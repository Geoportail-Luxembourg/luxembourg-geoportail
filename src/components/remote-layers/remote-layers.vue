<script setup lang="ts">
import { DropdownOptionModel } from '../common/dropdown-list.modelmodel'
import { remoteLayersService } from './remote-layers.service'
import { LayerTreeNodeModel } from '../layer-tree/layer-tree.model'
import {
  remoteLayersToLayerTreeMapper,
  remoteLayerToLayer,
} from './remote-layers.mapper'
import { layerTreeService } from '../layer-tree/layer-tree.service'
import {
  OgcClientWmsEndpoint,
  RemoteWmsEndpointModel,
} from './remote-layers.model'
import { layersService } from '../../services/layers/layers.service'
import { useTranslation } from 'i18next-vue'
import DropdownList from '../common/dropdown-list.vue'
import LayerTreeNode from '../layer-tree/layer-tree-node.vue'
import { shallowRef, ShallowRef } from 'vue'

const { t } = useTranslation()
const wmsLayers: ShallowRef<DropdownOptionModel[]> = shallowRef([])
const layerTree: ShallowRef<LayerTreeNodeModel | undefined> = shallowRef()
let isLoading = false
let inputWmsUrl: string
let currentWmsUrl: string
let currentWmsEndpoint: OgcClientWmsEndpoint

remoteLayersService.fetchRemoteWmsEndpoint().then((wmsLayersFetch) => {
  wmsLayers.value = wmsLayersFetch.map(({ url, label }) => ({
    label,
    value: url,
  }))
})

async function getWmsEndpoint(url: string) {
  isLoading = true

  try {
    const wmsEndpoint = remoteLayersService.getWmsEndpoint(url)

    await wmsEndpoint.isReady()

    currentWmsEndpoint = wmsEndpoint
    currentWmsUrl = url
  } catch (e) {
    alert(t('Impossible de contacter ce WMS', { ns: 'client' }))
  }

  isLoading = false
}

async function getWmsLayers() {
  const wmsEndpoint = currentWmsEndpoint
  const remoteLayers = wmsEndpoint?.getLayers()

  if (remoteLayers && remoteLayers[0]) {
    layerTree.value = remoteLayersToLayerTreeMapper(
      remoteLayers[0],
      currentWmsUrl
    )
  }
}

async function onChangeWmsEndpoint(wmsUrl: string) {
  currentWmsUrl = inputWmsUrl = wmsUrl
  await getWmsEndpoint(currentWmsUrl)
  getWmsLayers()
}

function onChangeWmsUrl(event: Event) {
  inputWmsUrl = (event.target as HTMLSelectElement).value
}

async function onClickGetLayers() {
  await getWmsEndpoint(inputWmsUrl)
  getWmsLayers()
}

function toggleParent(event: Event) {
  const node = (event as CustomEvent).detail

  layerTree.value = layerTreeService.toggleNode(
    node.id,
    layerTree.value as LayerTreeNodeModel,
    'expanded'
  )
}

function toggleLayer(event: Event) {
  const node = (event as CustomEvent).detail
  const { id, name } = node
  const wmsEndpoint = currentWmsEndpoint

  if (node.checked === true) {
    mapState.removeLayers(id)
  } else {
    const remoteLayer = wmsEndpoint?.getLayerByName(name)

    if (remoteLayer) {
      const layer = layersService.initLayer(
        remoteLayerToLayer({
          id,
          url: remoteLayersService.getProxyfiedUrl(currentWmsUrl),
          remoteLayer,
        })
      )

      mapState.addLayers(layer)
    }
  }
}

// this.subscribe(
//   'layerTree' as keyof this,
//   mapState.map$.pipe(
//     map(mapContext =>
//       this.layerTree
//         ? layerTreeService.updateLayers(
//             this.layerTree as LayerTreeNodeModel,
//             mapContext.layers
//           )
//         : void 0
//     )
//   )
// )
</script>

<template>
  <div
    class="absolute right-0 top-52 z-50 bg-white lux-modal w-[600px]"
    role="dialog"
  >
    <div class="lux-modal-header">
      <h4>{{ t('Add external data', { ns: 'client' }) }}</h4>
    </div>

    <div class="p-[15px]">
      <div class="relative text-center">
        <dropdown-list
          :options="wmsLayers"
          :placeholder="t('Predefined wms', { ns: 'client' })"
          @change="onChangeWmsEndpoint"
        ></dropdown-list>
        <input
          class="lux-input w-[300px]"
          type="url"
          :placeholder="
            t('Choose or write a WMS url', {
              ns: 'client',
            })
          "
          :value="currentWmsUrl || ''"
          @change="onChangeWmsUrl"
        />
        <button type="button" class="lux-btn" @click="onClickGetLayers">
          {{ t('Get the layers', { ns: 'client' }) }}
        </button>
      </div>

      <div class="text-center" v-if="!isLoading && currentWmsEndpoint">
        <span class="lux-label">{{
          t('Description du service :', {
            ns: 'client',
          })
        }}</span>
        {{ currentWmsEndpoint.getServiceInfo()?.abstract }}
      </div>
      <div class="text-center" v-if="!isLoading && currentWmsEndpoint">
        <span class="lux-label">{{
          t('Access constraints :', {
            ns: 'client',
          })
        }}</span>
        {{ currentWmsEndpoint.getServiceInfo()?.constraints }}
      </div>
      <div v-if="isLoading" class="text-center">
        <div class="fa fa-refresh fa-spin"></div>
        <span>{{
          t('Chargement des informations', {
            ns: 'client',
          })
        }}</span>
      </div>
      <div v-if="!isLoading" class="overflow-auto max-h-[calc(400px-36px)]">
        <layer-tree-node
          class="block p-[10px] mb-[11px]"
          v-if="layerTree"
          :node="layerTree"
          @parent-toggle="toggleParent"
          @layer-toggle="toggleLayer"
        ></layer-tree-node>
      </div>
    </div>
  </div>
</template>
