<script setup lang="ts">
import { shallowRef, ShallowRef, watchEffect } from 'vue'
import { useTranslation } from 'i18next-vue'

import { useMapStore } from '@/stores/map.store'
import DropdownList from '@/components/common/dropdown-list.vue'
import ModalDialog from '@/components/common/modal-dialog.vue'
import { DropdownOptionModel } from '@/components/common/dropdown-list.model'
import LayerTreeNode from '@/components/layer-tree/layer-tree-node.vue'
import { LayerTreeNodeModel } from '@/components/layer-tree/layer-tree.model'
import { layerTreeService } from '@/components/layer-tree/layer-tree.service'
import useLayers from '@/composables/layers/layers.composable'

import {
  remoteLayersToLayerTreeMapper,
  remoteLayerToLayer,
} from '../../services/remote-layers/remote-layers.mapper'
import { remoteLayersService } from '../../services/remote-layers/remote-layers.service'
import { OgcClientWmsEndpoint } from '../../services/remote-layers/remote-layers.model'
import { WmtsEndpoint } from '@/services/remote-layers/wmts.endpoint'
import { storeToRefs } from 'pinia'
import { useAppStore } from '@/stores/app.store'

const { t } = useTranslation()
const mapStore = useMapStore()
const layers = useLayers()
const wmsLayers: ShallowRef<DropdownOptionModel[]> = shallowRef([])
const layerTree: ShallowRef<LayerTreeNodeModel | undefined> = shallowRef()
const { remoteLayersOpen } = storeToRefs(useAppStore())
const { setRemoteLayersOpen } = useAppStore()

let isLoading = false
let inputRemoteUrl: string
let currentRemoteUrl: string
let currentRemoteEndpoint: OgcClientWmsEndpoint | WmtsEndpoint

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

async function getRemoteEndpoint(url: string) {
  isLoading = true
  currentRemoteEndpoint = await remoteLayersService
    .getRemoteEndpoint(url)
    .catch(() => alert(t('Impossible de contacter ce WMS', { ns: 'client' })))
  currentRemoteUrl = url
  isLoading = false
}

async function getRemoteLayers() {
  const remoteEndpoint = currentRemoteEndpoint
  const remoteLayers = remoteEndpoint?.getLayers()

  if (remoteLayers && remoteLayers[0]) {
    const treeLayers = remoteLayersToLayerTreeMapper(
      remoteLayers[0],
      currentRemoteUrl
    )
    layerTree.value = layerTreeService.updateLayers(treeLayers, mapStore.layers)
  }
}

async function onChangeRemoteEndpoint(url: string) {
  currentRemoteUrl = inputRemoteUrl = url
  await getRemoteEndpoint(currentRemoteUrl)
  getRemoteLayers()
}

function onChangeRemoteUrl(event: Event) {
  inputRemoteUrl = (event.target as HTMLSelectElement).value
}

async function onClickGetLayers() {
  await getRemoteEndpoint(inputRemoteUrl)
  getRemoteLayers()
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
  const remoteEndpoint = currentRemoteEndpoint

  if (node.checked === true) {
    mapStore.removeLayers(id)
  } else {
    const remoteLayer = remoteEndpoint?.getLayerByName(name)

    if (remoteLayer) {
      const layer = layers.initLayer(
        remoteLayerToLayer({
          id,
          url: remoteLayersService.getProxyfiedUrl(currentRemoteUrl),
          remoteLayer,
        })
      )

      mapStore.addLayers(layer)
    }
  }
}
</script>

<template>
  <ModalDialog
    v-if="remoteLayersOpen"
    :title="t('Add external data', { ns: 'client' })"
    @close="setRemoteLayersOpen(false)"
  >
    <template v-slot:content>
      <div class="relative text-center" data-cy="remoteLayerModalContent">
        <dropdown-list
          :options="wmsLayers"
          :placeholder="t('Predefined wms', { ns: 'client' })"
          @change="onChangeRemoteEndpoint"
        ></dropdown-list>
        <input
          class="lux-input w-[300px]"
          type="url"
          :placeholder="
            t('Choose or write a WMS url', {
              ns: 'client',
            })
          "
          :value="currentRemoteUrl || ''"
          @change="onChangeRemoteUrl"
        />
        <button type="button" class="lux-btn" @click="onClickGetLayers">
          {{ t('Get the layers', { ns: 'client' }) }}
        </button>
      </div>

      <div class="text-center" v-if="!isLoading && currentRemoteEndpoint">
        <span class="lux-label">{{
          t('Description du service :', {
            ns: 'client',
          })
        }}</span>
        {{ currentRemoteEndpoint.getServiceInfo()?.abstract }}
      </div>
      <div class="text-center" v-if="!isLoading && currentRemoteEndpoint">
        <span class="lux-label">{{
          t('Access constraints :', {
            ns: 'client',
          })
        }}</span>
        {{ currentRemoteEndpoint.getServiceInfo()?.constraints }}
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
        ></layer-tree-node>
      </div>
    </template>
    <template v-slot:footer>
      <div class="flex flex-row justify-end">
        <button
          type="button"
          class="lux-btn"
          data-dismiss="modal"
          @click="setRemoteLayersOpen(false)"
        >
          {{ t('Close', { ns: 'client' }) }}
        </button>
      </div>
    </template>
  </ModalDialog>
</template>
