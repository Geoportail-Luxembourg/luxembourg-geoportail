<script setup lang="ts">
import { ref, shallowRef, ShallowRef, watchEffect } from 'vue'
import { storeToRefs } from 'pinia'
import { useTranslation } from 'i18next-vue'

import { useAppStore } from '@/stores/app.store'
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
} from '@/services/remote-layers/remote-layers.mapper'
import { remoteLayersService } from '@/services/remote-layers/remote-layers.service'
import { OgcClientWmsEndpoint } from '@/services/remote-layers/remote-layers.model'
import { proxyUrlHelper } from '@/services/proxyurl/proxyurl.helper'
import { WmtsEndpoint } from '@/services/remote-layers/wmts.endpoint'

const { t } = useTranslation()
const mapStore = useMapStore()
const layers = useLayers()
const wmsLayers: ShallowRef<DropdownOptionModel[]> = shallowRef([])
const layerTree: ShallowRef<LayerTreeNodeModel | undefined> = shallowRef()
const { remoteLayersOpen } = storeToRefs(useAppStore())
const { setRemoteLayersOpen } = useAppStore()

const isLoading = ref(false)
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
  isLoading.value = true
  currentRemoteEndpoint = await remoteLayersService
    .getRemoteEndpoint(url)
    .catch(() => alert(t('Impossible de contacter ce WMS', { ns: 'app' })))
  currentRemoteUrl = url
  isLoading.value = false
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
          url: proxyUrlHelper.getProxyfiedUrl(currentRemoteUrl),
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
    :title="t('Add external data', { ns: 'app' })"
    @close="setRemoteLayersOpen(false)"
  >
    <template v-slot:content>
      <fieldset
        class="relative text-center border-none p-0 m-0"
        data-cy="remoteLayerModalContent"
      >
        <legend class="sr-only">
          {{ t('Add external data', { ns: 'app' }) }}
        </legend>
        <dropdown-list
          class="lux-remote-services-dropdown"
          :options="wmsLayers"
          :placeholder="t('Predefined wms', { ns: 'app' })"
          @change="onChangeRemoteEndpoint"
        ></dropdown-list>
        <label for="remote-wms-url" class="sr-only">{{
          t('Choose or write a WMS url', { ns: 'app' })
        }}</label>
        <input
          id="remote-wms-url"
          class="lux-input w-[300px]"
          type="url"
          :placeholder="
            t('Choose or write a WMS url', {
              ns: 'app',
            })
          "
          :value="currentRemoteUrl || ''"
          @change="onChangeRemoteUrl"
        />
        <button
          type="button"
          class="lux-btn"
          :aria-label="t('Get the layers for the entered URL', { ns: 'app' })"
          @click="onClickGetLayers"
        >
          {{ t('Get the layers', { ns: 'app' }) }}
        </button>
      </fieldset>

      <div
        class="text-center"
        aria-live="polite"
        aria-atomic="true"
        v-if="!isLoading && currentRemoteEndpoint"
      >
        <span class="lux-label">{{
          t('Description du service :', {
            ns: 'app',
          })
        }}</span>
        {{ currentRemoteEndpoint.getServiceInfo()?.abstract }}
      </div>
      <div class="text-center" v-if="!isLoading && currentRemoteEndpoint">
        <span class="lux-label">{{
          t('Access constraints :', {
            ns: 'app',
          })
        }}</span>
        {{ currentRemoteEndpoint.getServiceInfo()?.constraints }}
      </div>
      <div
        v-if="isLoading"
        role="status"
        aria-live="polite"
        class="text-center"
      >
        <span aria-hidden="true" class="fa fa-refresh fa-spin"></span>
        <span>{{
          t('Chargement des informations', {
            ns: 'app',
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
  </ModalDialog>
</template>
