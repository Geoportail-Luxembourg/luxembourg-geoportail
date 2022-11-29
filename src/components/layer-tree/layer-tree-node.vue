<script setup lang="ts">
import { useTranslation } from 'i18next-vue'
import type { LayerTreeNodeModel } from './layer-tree.model'

const { t } = useTranslation()

const props = defineProps<{
  node: LayerTreeNodeModel
}>()
const emit = defineEmits<{
  (e: 'toggleLayer', node: LayerTreeNodeModel): void
  (e: 'toggleParent', node: LayerTreeNodeModel): void
}>()

const isParent = !!props.node.children
const isRoot = props.node.depth === 0
const isMaxDepth = props.node.depth >= 10
const label = t(props.node.name, { ns: 'client' })

function toggleLayer(node: LayerTreeNodeModel) {
  emit('toggleLayer', node)
}
function toggleParent(node: LayerTreeNodeModel) {
  emit('toggleParent', node)
}
</script>

<template>
  <div v-if="node">
    <div class="mb-px" v-if="isParent" key="node.id">
      <!--    First level parents-->
      <button
        v-if="node.depth === 1"
        class="group node-1 w-full text-left flex px-2 py-1.5 uppercase bg-tertiary"
        :class="node.expanded ? 'text-white' : 'text-secondary'"
        :aria-expanded="node.expanded"
        @click="toggleParent(node)"
      >
        <div class="grow">{{ label }}</div>
        <div class="leading-6">
          <div
            class="fa fa-sharp fa-solid group-hover:text-white"
            :class="node.expanded ? 'fa-caret-up' : 'fa-caret-down'"
          ></div>
        </div>
      </button>

      <!--    Other parents-->
      <button
        v-else-if="node.depth > 1 && !isMaxDepth"
        class="w-full text-left flex px-2 py-1.5 pl-2"
        :class="
          node.expanded ? 'bg-secondary text-tertiary' : 'bg-white text-primary'
        "
        :aria-expanded="node.expanded"
        @click="toggleParent(node)"
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
        class="self-start before:text-[.85rem] before:transform before:translate-y-[.1rem] before:inline-block fa-solid fa-fw fa-fh fa-info"
      ></button>
      <button
        class="w-full text-left"
        :class="{ 'font-bold': node.checked }"
        @click="toggleLayer(node)"
      >
        <i
          class="fa-solid"
          :class="node.checked ? 'fa-check-square' : 'fa-square'"
        ></i>
        <span class="hover:underline">{{ label }}</span>
      </button>
    </div>
  </div>
</template>