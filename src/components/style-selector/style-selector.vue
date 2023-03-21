<script setup lang="ts">
import { ref, computed, watch } from 'vue'
import { storeToRefs } from 'pinia'
import { useTranslation } from 'i18next-vue'

import SimpleStyleSelector from '@/components/style-selector/simple-style-selector.vue'
import MediumStyleSelector from '@/components/style-selector/medium-style-selector.vue'
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
    appStore.toggleStyleEditorPanel(false)
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
    <button @click="() => appStore.toggleStyleEditorPanel(false)">
      X close
    </button>
    <h2 class="h-20 shrink-0 flex justify-between lux-panel-title">
      {{ t('Style editor') }}
    </h2>
    <div v-if="styleCapabilities.hasSimpleStyle">
      <button @click="() => (isSimpleStyleOpen = !isSimpleStyleOpen)">
        {{ t('Choose a predefined style') }}
      </button>
      <simple-style-selector :class="isSimpleStyleOpen ? '' : 'hidden'" />
    </div>

    <div v-if="styleCapabilities.hasAdvancedStyle">
      <button @click="() => (isMediumStyleOpen = !isMediumStyleOpen)">
        {{ t('Change main colours') }}
      </button>
      <medium-style-selector
        :class="isMediumStyleOpen ? '' : 'hidden'"
        v-if="bgLayer"
        :layer="bgLayer"
      />
    </div>

    <div v-if="styleCapabilities.hasExpertStyle">
      <button @click="() => (isAdvancedStyleOpen = !isAdvancedStyleOpen)">
        {{ t('Advanced settings') }}
      </button>
      <!-- Advanced style editor here -->
    </div>
    <button @click="resetStyle" class="lux-btn">
      {{ t('Reset style', { ns: 'client' }) }}
    </button>
  </div>
</template>
