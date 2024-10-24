<script setup lang="ts">
import { computed } from 'vue'
import { useTranslation } from 'i18next-vue'

import { useMetadataStore } from '@/stores/metadata.store'
import { Layer } from '@/stores/map.store.model'
import ExpandablePanel from '@/components/common/expandable-panel.vue'

import type { LayerTreeNodeModel } from './layer-tree.model'

const props = defineProps<{
  node: LayerTreeNodeModel
}>()
const emit = defineEmits<{
  (e: 'toggleLayer', node: LayerTreeNodeModel): void
  (e: 'toggleParent', node: LayerTreeNodeModel): void
}>()

const { t } = useTranslation()
const { setMetadataLayer } = useMetadataStore()
const isParent = !!props.node.children
const isRoot = props.node.depth === 0
const isMaxDepth = props.node.depth >= 10
const label = computed(() => t(props.node.name, { ns: 'client' }))

function toggleLayer(node: LayerTreeNodeModel) {
  emit('toggleLayer', node)
}

function toggleParent(node: LayerTreeNodeModel) {
  emit('toggleParent', node)
}
</script>

<template>
  <div class="mb-px" v-if="isParent" key="node.id">
    <!--    First level parents-->
    <div v-if="node.depth === 1" :data-cy="`parentLayerLabel-${node.id}`">
      <expandable-panel
        :title="label"
        :expanded="node.expanded"
        @togglePanel="toggleParent(node)"
      />
    </div>

    <!--    Other parents (with custom panel style)-->
    <button
      v-else-if="node.depth > 1 && !isMaxDepth"
      class="w-full text-left flex px-2 py-1.5 pl-2"
      :class="node.expanded ? 'text-tertiary' : 'bg-white text-primary'"
      :aria-expanded="node.expanded"
      @click="toggleParent(node)"
      :data-cy="`parentLayerLabel-${node.id}`"
    >
      <div class="grow">{{ label }}</div>
      <div class="leading-6">
        <div
          class="fa-sharp fa-solid"
          :class="node.expanded ? 'fa-minus' : 'fa-plus'"
        ></div>
      </div>
    </button>

    <!--    Children-->
    <div
      v-if="!isMaxDepth"
      class="bg-secondary"
      :class="[
        { 'pl-2': node.depth > 1 },
        { 'lux-collapse': !isRoot },
        { expanded: !isRoot && node.expanded },
      ]"
    >
      <layer-tree-node
        v-for="child in node.children"
        :key="child.id"
        :node="child"
        @toggle-parent="toggleParent($event)"
        @toggle-layer="toggleLayer($event)"
      ></layer-tree-node>
    </div>
  </div>
  <div v-else class="flex text-tertiary pr-2">
    <button
      :data-cy="`layerMetadata-${node.id}`"
      class="self-start before:text-[.85rem] before:transform before:translate-y-[.1rem] before:inline-block before:content-['\f129'] fa-solid fa-fw fa-fh fa-info"
      @click="setMetadataLayer(node as unknown as Layer)"
    ></button>
    <button
      class="w-full text-left"
      :class="{ 'font-bold': node.checked }"
      @click="toggleLayer(node)"
      :data-cy="`layerLabel-${node.id}`"
    >
      <i
        class="fa-solid"
        :class="node.checked ? 'fa-check-square' : 'fa-square'"
      ></i>
      <span class="ml-1 hover:underline">{{ label }}</span>
    </button>
  </div>
</template>
