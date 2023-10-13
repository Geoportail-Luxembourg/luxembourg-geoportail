<script setup lang="ts">
import { ref, computed, watch } from 'vue'
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

let isSimpleStyleOpen = ref(false)
let isMediumStyleOpen = ref(false)
let isAdvancedStyleOpen = ref(false)

function resetStyle() {
  styleStore.setStyle(null)
}
</script>

<template>
  <div v-if="styleCapabilities.isEditable">
    <div v-if="styleCapabilities.hasSimpleStyle" class="mb-px">
      <button
        @click="() => (isSimpleStyleOpen = !isSimpleStyleOpen)"
        class="group node-1 w-full text-left flex px-2 py-1.5 uppercase bg-tertiary"
      >
        <div
          class="grow"
          :class="isSimpleStyleOpen ? 'text-white' : 'text-secondary'"
        >
          {{ t('Choose a predefined style') }}
        </div>
        <div class="leading-6">
          <div
            class="fa fa-sharp fa-solid group-hover:text-white text-primary"
            :class="isSimpleStyleOpen ? 'fa-caret-up' : 'fa-caret-down'"
          ></div>
        </div>
      </button>
      <simple-style-selector :class="isSimpleStyleOpen ? '' : 'hidden'" />
    </div>

    <div v-if="styleCapabilities.hasAdvancedStyle" class="mb-px">
      <button
        @click="() => (isMediumStyleOpen = !isMediumStyleOpen)"
        class="group node-1 w-full text-left flex px-2 py-1.5 uppercase bg-tertiary"
      >
        <div
          class="grow"
          :class="isMediumStyleOpen ? 'text-white' : 'text-secondary'"
        >
          {{ t('Change main colours') }}
        </div>
        <div class="leading-6">
          <div
            class="fa fa-sharp fa-solid group-hover:text-white text-primary"
            :class="isMediumStyleOpen ? 'fa-caret-up' : 'fa-caret-down'"
          ></div>
        </div>
      </button>
      <medium-style-selector
        :class="isMediumStyleOpen ? '' : 'hidden'"
        v-if="bgLayer"
        :layer="bgLayer"
      />
    </div>

    <div v-if="styleCapabilities.hasExpertStyle" class="mb-px">
      <button
        @click="() => (isAdvancedStyleOpen = !isAdvancedStyleOpen)"
        class="group node-1 w-full text-left flex px-2 py-1.5 uppercase bg-tertiary"
      >
        <div
          class="grow"
          :class="isAdvancedStyleOpen ? 'text-white' : 'text-secondary'"
        >
          {{ t('Advanced settings') }}
        </div>
        <div class="leading-6">
          <div
            class="fa fa-sharp fa-solid group-hover:text-white text-primary"
            :class="isAdvancedStyleOpen ? 'fa-caret-up' : 'fa-caret-down'"
          ></div>
        </div>
      </button>
      <expert-style-selector
        :class="isAdvancedStyleOpen ? '' : 'hidden'"
        v-if="bgLayer"
        :layer="bgLayer"
      />
    </div>
    <button @click="resetStyle" class="lux-btn my-2">
      {{ t('Reset style', { ns: 'client' }) }}
    </button>
  </div>
</template>
