<script setup lang="ts">
import { Ref, ref, computed, watch } from 'vue'
import { storeToRefs } from 'pinia'
import { useTranslation } from 'i18next-vue'

import SimpleStyleSelector from '@/components/style-selector/simple-style-selector.vue'
import MediumStyleSelector from '@/components/style-selector/medium-style-selector.vue'
import ExpertStyleSelector from '@/components/style-selector/expert-style-selector.vue'
import { useAppStore } from '@/stores/app.store'
import { useMapStore } from '@/stores/map.store'
import { useStyleStore } from '@/stores/style.store'
import useMvtStyles from '@/composables/mvt-styles/mvt-styles.composable'

const { t } = useTranslation()
const mapStore = useMapStore()
const appStore = useAppStore()
const styleStore = useStyleStore()
const { bgLayer } = storeToRefs(mapStore)
const styles = useMvtStyles()

const styleCapabilities = computed(() =>
  styles.getStyleCapabilitiesFromLayer(bgLayer.value)
)

watch(bgLayer, bgLayer => {
  if (!styles.isLayerStyleEditable(bgLayer)) {
    appStore.closeStyleEditorPanel()
  }
})

let panelOpen: Ref<
  undefined | 'simpleStyle' | 'mediumStyle' | 'advancedStyle'
> = ref(undefined)

function resetStyle() {
  styleStore.setStyle(null)
}
</script>

<template>
  <div v-if="styleCapabilities.isEditable">
    <div v-if="styleCapabilities.hasSimpleStyle" class="mb-px">
      <button
        @click="
          () =>
            (panelOpen =
              panelOpen === 'simpleStyle' ? undefined : 'simpleStyle')
        "
        class="group node-1 w-full text-left flex px-2 py-1.5 uppercase bg-tertiary"
      >
        <div
          class="grow"
          :class="panelOpen === 'simpleStyle' ? 'text-white' : 'text-secondary'"
        >
          {{ t('Choose a predefined style') }}
        </div>
        <div class="leading-6">
          <div
            class="fa fa-sharp fa-solid group-hover:text-white text-primary"
            :class="
              panelOpen === 'simpleStyle' ? 'fa-caret-up' : 'fa-caret-down'
            "
          ></div>
        </div>
      </button>
      <simple-style-selector
        :class="panelOpen === 'simpleStyle' ? '' : 'hidden'"
      />
    </div>

    <div v-if="styleCapabilities.hasAdvancedStyle" class="mb-px">
      <button
        @click="
          () =>
            (panelOpen =
              panelOpen === 'mediumStyle' ? undefined : 'mediumStyle')
        "
        class="group node-1 w-full text-left flex px-2 py-1.5 uppercase bg-tertiary"
      >
        <div
          class="grow"
          :class="panelOpen === 'mediumStyle' ? 'text-white' : 'text-secondary'"
        >
          {{ t('Change main colours') }}
        </div>
        <div class="leading-6">
          <div
            class="fa fa-sharp fa-solid group-hover:text-white text-primary"
            :class="
              panelOpen === 'mediumStyle' ? 'fa-caret-up' : 'fa-caret-down'
            "
          ></div>
        </div>
      </button>
      <medium-style-selector
        :class="panelOpen === 'mediumStyle' ? '' : 'hidden'"
        v-if="bgLayer"
        :layer="bgLayer"
      />
    </div>

    <div v-if="styleCapabilities.hasExpertStyle" class="mb-px">
      <button
        @click="
          () =>
            (panelOpen =
              panelOpen === 'advancedStyle' ? undefined : 'advancedStyle')
        "
        class="group node-1 w-full text-left flex px-2 py-1.5 uppercase bg-tertiary"
      >
        <div
          class="grow"
          :class="
            panelOpen === 'advancedStyle' ? 'text-white' : 'text-secondary'
          "
        >
          {{ t('Advanced settings') }}
        </div>
        <div class="leading-6">
          <div
            class="fa fa-sharp fa-solid group-hover:text-white text-primary"
            :class="
              panelOpen === 'advancedStyle' ? 'fa-caret-up' : 'fa-caret-down'
            "
          ></div>
        </div>
      </button>
      <expert-style-selector
        :class="panelOpen === 'advancedStyle' ? '' : 'hidden'"
        v-if="bgLayer"
        :layer="bgLayer"
      />
    </div>
    <button @click="resetStyle" class="lux-btn my-2">
      {{ t('Reset style', { ns: 'client' }) }}
    </button>
  </div>
</template>
