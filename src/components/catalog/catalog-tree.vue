<script setup lang="ts">
import { computed, watchEffect, watch, nextTick, useTemplateRef } from 'vue'
import { storeToRefs } from 'pinia'

import useLayers from '@/composables/layers/layers.composable'
import useThemes from '@/composables/themes/themes.composable'
import { ThemeNodeModel } from '@/composables/themes/themes.model'
import { useThemeStore } from '@/stores/config.store'
import { useMapStore } from '@/stores/map.store'
import { useAppStore } from '@/stores/app.store'
import { useLayerTreeStore } from '@/stores/layer-tree.store'
import LayerTreeNode from '@/components/layer-tree/layer-tree-node.vue'
import { themesToLayerTree } from '@/components/layer-tree/layer-tree.mapper'
import type { LayerTreeNodeModel } from '@/components/layer-tree/layer-tree.model'
import {
  layerTreeService,
  EXCLUDED_PARENT_LAYER_IDS,
} from '@/components/layer-tree/layer-tree.service'

const mapStore = useMapStore()
const themeStore = useThemeStore()
const appStore = useAppStore()
const layerTreeStore = useLayerTreeStore()
const layers = useLayers()
const themes = useThemes()
const catalogRoot = useTemplateRef<HTMLElement>('catalogRoot')
const showDefaultCatalog = computed(
  () => !mapStore.is3dActive || (mapStore.is3dActive && !mapStore.is3dMesh)
)

const { layerTrees_3d } = storeToRefs(themeStore)
const { layerToLocateInCatalog } = storeToRefs(appStore)
const { themeName } = storeToRefs(themeStore)
const { layerTree, layerTree3d } = storeToRefs(layerTreeStore)

let lastCapturedThemeId: number | undefined
let lastCaptured3dTreeId: number | undefined

watchEffect(updateLayerTree)

function updateLayerTree() {
  if (themeStore.theme && mapStore.layers) {
    const themeId = themeStore.theme.id
    const isNewTheme = themeId !== lastCapturedThemeId

    const treeModel = isNewTheme
      ? themesToLayerTree(themeStore.theme as ThemeNodeModel)
      : layerTree.value

    if (isNewTheme) {
      layerTreeStore.captureServerDefaults(treeModel!)
      lastCapturedThemeId = themeId
    }

    const updated = layerTreeService.updateLayers(
      treeModel as LayerTreeNodeModel,
      mapStore.layers
    )
    layerTreeStore.setLayerTree(layerTreeStore.applyOverrides(updated))
  }
}

watchEffect(() => {
  if (layerTrees_3d.value) {
    const treeId = layerTrees_3d.value.id
    const isNewTree = treeId !== lastCaptured3dTreeId

    const treeModel = isNewTree
      ? themesToLayerTree(layerTrees_3d.value)
      : layerTree3d.value

    if (isNewTree) {
      layerTreeStore.captureServerDefaults(treeModel)
      lastCaptured3dTreeId = treeId
    }

    const updated = layerTreeService.updateLayers(treeModel, mapStore.layers3d)
    layerTreeStore.setLayerTree3d(layerTreeStore.applyOverrides(updated))
  }
})

watch(layerToLocateInCatalog, id => {
  if (id === undefined || id === null) return
  appStore.clearLayerToLocateInCatalog()

  const getLayerPresence = (tree: LayerTreeNodeModel) =>
    layerTreeService.getLayerPresence(id, tree, EXCLUDED_PARENT_LAYER_IDS)

  const tryExpand = (allowExcludedFallback = false) => {
    if (layerTree.value) {
      const layerPresence = getLayerPresence(layerTree.value)
      if (!layerPresence.hasAny) return false
      if (!allowExcludedFallback && !layerPresence.hasAllowed) return false

      const { found, node } = layerTreeService.expandToLayer(
        id,
        layerTree.value
      )
      if (found) {
        layerTreeStore.setLayerTree(node)
        nextTick(() => {
          // A same layer id can appear multiple times in the tree (e.g. shared across themes)
          const els = catalogRoot.value?.querySelectorAll<HTMLElement>(
            `[data-info="layerRow-${id}"]`
          )
          const elsArray = els ? Array.from(els) : []
          const el =
            // Prefer an occurrence that is NOT nested inside an excluded parent node
            elsArray.find(
              el =>
                !EXCLUDED_PARENT_LAYER_IDS.some((parentId: number) =>
                  el.closest(`[data-cy="subLayerLabel-${parentId}"]`)
                )
            ) ??
            // Fallback only when explicitly allowed
            (allowExcludedFallback ? elsArray[0] : undefined)
          if (!el) return
          el.scrollIntoView({ behavior: 'smooth', block: 'center' })
          el.classList.add('lux-layer-highlight')
          el.addEventListener(
            'animationend',
            () => el.classList.remove('lux-layer-highlight'),
            { once: true }
          )
        })
        return true
      }
    }
    return false
  }

  const switchThemeAndExpand = (
    targetThemeName: string,
    allowExcludedFallback = false
  ) => {
    if (targetThemeName === themeName.value) {
      tryExpand(allowExcludedFallback)
      return
    }

    themeStore.setTheme(targetThemeName)
    const stop = watch(layerTree, () => {
      stop()
      tryExpand(allowExcludedFallback)
    })
  }

  if (tryExpand()) return

  const currentLayerPresence = layerTree.value
    ? getLayerPresence(layerTree.value)
    : undefined

  const themeNames = themes.findThemeNamesByLayerId(id)
  const preferredThemeName = themeNames.find(themeName => {
    const themeNode = themes.findByName(themeName)
    return themeNode
      ? getLayerPresence(themesToLayerTree(themeNode)).hasAllowed
      : false
  })

  if (preferredThemeName) {
    switchThemeAndExpand(preferredThemeName)
    return
  }

  if (currentLayerPresence?.hasAny) {
    tryExpand(true)
    return
  }

  if (!themeNames.length) return
  switchThemeAndExpand(themeNames[0], true)
})

function toggleParent(node: LayerTreeNodeModel, is3d: boolean) {
  layerTreeStore.toggleParentNode(node.id, is3d)
}

function toggleLayer(node: LayerTreeNodeModel, is3d: boolean) {
  layers.toggleLayer(+node.id, !node.checked, is3d, true)
}
</script>

<template>
  <div ref="catalogRoot">
    <!-- 3D layers catalog, only displayed when 3D is active -->
    <div class="mb-7" v-if="layerTree3d && mapStore.is3dActive">
      <layer-tree-node
        :node="layerTree3d"
        :key="layerTree3d.id"
        @toggle-parent="node => toggleParent(node, true)"
        @toggle-layer="node => toggleLayer(node, true)"
      ></layer-tree-node>
    </div>

    <!-- Main catalog, displays by default and 3D terrain active -->
    <layer-tree-node
      v-if="layerTree && showDefaultCatalog"
      :node="layerTree"
      :key="layerTree.id"
      @toggle-parent="node => toggleParent(node, false)"
      @toggle-layer="node => toggleLayer(node, false)"
    ></layer-tree-node>
  </div>
</template>
