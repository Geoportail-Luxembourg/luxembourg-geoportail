<script setup lang="ts">
import { Ref, ref, computed, watch } from 'vue'
import { storeToRefs } from 'pinia'
import { useTranslation } from 'i18next-vue'

import SimpleStyleSelector from '@/components/style-selector/simple-style-selector.vue'
import MediumStyleSelector from '@/components/style-selector/medium-style-selector.vue'
import ExpertStyleSelector from '@/components/style-selector/expert-style-selector.vue'
import ExpandablePanel from '@/components/common/expandable-panel.vue'
import { useAppStore } from '@/stores/app.store'
import { useMapStore } from '@/stores/map.store'
import { useStyleStore } from '@/stores/style.store'
import useMvtStyles from '@/composables/mvt-styles/mvt-styles.composable'

const { t } = useTranslation()
const mapStore = useMapStore()
const appStore = useAppStore()
const styleStore = useStyleStore()
const { bgStyle, isExpertStyleActive } = storeToRefs(styleStore)
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

let currentOpenPanel: Ref<
  undefined | 'simpleStyle' | 'mediumStyle' | 'advancedStyle'
> = ref(undefined)

function resetStyle() {
  styleStore.setStyle(null)
}
</script>

<template>
  <div class="lux" v-if="styleCapabilities.isEditable" data-cy="styleSelector">
    <div v-if="styleCapabilities.hasSimpleStyle" class="mb-px">
      <expandable-panel
        :title="t('Simple')"
        :expanded="currentOpenPanel === 'simpleStyle'"
        @togglePanel="
          () =>
            (currentOpenPanel =
              currentOpenPanel === 'simpleStyle' ? undefined : 'simpleStyle')
        "
      >
        <simple-style-selector
      /></expandable-panel>
    </div>

    <div v-if="styleCapabilities.hasAdvancedStyle" class="mb-px">
      <expandable-panel
        :title="t('Medium')"
        :expanded="currentOpenPanel === 'mediumStyle'"
        @togglePanel="
          () =>
            (currentOpenPanel =
              currentOpenPanel === 'mediumStyle' ? undefined : 'mediumStyle')
        "
      >
        <medium-style-selector v-if="bgLayer" :layer="bgLayer"
      /></expandable-panel>
    </div>

    <div v-if="styleCapabilities.hasExpertStyle" class="mb-px">
      <expandable-panel
        :title="t('Expert (style.json)')"
        :expanded="currentOpenPanel === 'advancedStyle'"
        @togglePanel="
          () =>
            (currentOpenPanel =
              currentOpenPanel === 'advancedStyle'
                ? undefined
                : 'advancedStyle')
        "
      >
        <expert-style-selector v-if="bgLayer" :layer="bgLayer"
      /></expandable-panel>
    </div>
    <button
      v-if="bgStyle || isExpertStyleActive"
      @click="resetStyle"
      class="lux-btn my-2"
    >
      {{ t('Reset style', { ns: 'client' }) }}
    </button>
  </div>
</template>
