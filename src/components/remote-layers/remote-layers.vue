<script setup lang="ts">
import { shallowRef, ShallowRef, watchEffect, onMounted } from 'vue'
import { useTranslation } from 'i18next-vue'

import { useMapStore } from '@/stores/map.store'
import DropdownList from '@/components/common/dropdown-list.vue'
import { DropdownOptionModel } from '@/components/common/dropdown-list.model'
import LayerTreeNode from '@/components/layer-tree/layer-tree-node.vue'
import { LayerTreeNodeModel } from '@/components/layer-tree/layer-tree.model'
import { layerTreeService } from '@/components/layer-tree/layer-tree.service'
import useLayers from '@/composables/layers/layers.composable'

import {
  remoteLayersToLayerTreeMapper,
  remoteLayerToLayer,
} from './remote-layers.mapper'
import { remoteLayersService } from './remote-layers.service'
import { OgcClientWmsEndpoint } from './remote-layers.model'
import LayerMetadata from '../layer-metadata/layer-metadata.vue'
import { layerMetadataService } from '@/composables/layer-metadata/layer-metadata.service'
import { LayerMetadataModel } from '@/composables/layer-metadata/layer-metadata.model'

const { t } = useTranslation()
const mapStore = useMapStore()
const layers = useLayers()
const wmsLayers: ShallowRef<DropdownOptionModel[]> = shallowRef([])
const layerTree: ShallowRef<LayerTreeNodeModel | undefined> = shallowRef()

let isLoading = false
let inputWmsUrl: string
let currentWmsUrl: string
let currentWmsEndpoint: OgcClientWmsEndpoint

watchEffect(updateLayerTree)

function updateLayerTree() {
  layerTree.value = layerTree.value
    ? layerTreeService.updateLayers(
        layerTree.value as LayerTreeNodeModel,
        mapStore.layers
      )
    : void 0
}

remoteLayersService.fetchRemoteWmsEndpoint().then(wmsLayersFetch => {
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
    layerTree.value = layerTreeService.updateLayers(
      remoteLayersToLayerTreeMapper(remoteLayers[0], currentWmsUrl),
      mapStore.layers
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

function toggleParent(node: LayerTreeNodeModel) {
  layerTree.value = layerTreeService.toggleNode(
    node.id,
    layerTree.value as LayerTreeNodeModel,
    'expanded'
  )
}

function toggleLayer(node: LayerTreeNodeModel) {
  const { id, name } = node
  const wmsEndpoint = currentWmsEndpoint

  if (node.checked === true) {
    mapStore.removeLayers(id)
  } else {
    const remoteLayer = wmsEndpoint?.getLayerByName(name)

    if (remoteLayer) {
      const layer = layers.initLayer(
        remoteLayerToLayer({
          id,
          url: remoteLayersService.getProxyfiedUrl(currentWmsUrl),
          remoteLayer,
        })
      )

      mapStore.addLayers(layer)
    }
  }
}

const { i18next } = useTranslation()
const metadata: ShallowRef<LayerMetadataModel | undefined> = shallowRef()
const displayedMetadataNode: ShallowRef<LayerTreeNodeModel | undefined> =
  shallowRef()

async function displayLayerMetadata(node: LayerTreeNodeModel) {
  metadata.value = await layerMetadataService.getLayerMetadata(node, i18next)
  displayedMetadataNode.value = node
}

onMounted(() => {
  i18next.on('languageChanged', () => {
    if (displayedMetadataNode.value)
      displayLayerMetadata(displayedMetadataNode.value)
  })
})

function closeLayerMetadata() {
  metadata.value = undefined
}
</script>

<template>
  <layer-metadata
    v-if="metadata"
    :layer-metadata="metadata"
    @close-layer-metadata="closeLayerMetadata"
  ></layer-metadata>
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
          @toggle-parent="toggleParent"
          @toggle-layer="toggleLayer"
          @display-layer-metadata="displayLayerMetadata"
        ></layer-tree-node>
      </div>
    </div>
  </div>
</template>
