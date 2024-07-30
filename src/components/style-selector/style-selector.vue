<script setup lang="ts">
import { computed, onMounted, watch } from 'vue'
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
import { StyleSection } from '@/composables/mvt-styles/mvt-styles.model'

const { t } = useTranslation()
const mapStore = useMapStore()
const appStore = useAppStore()
const styleStore = useStyleStore()
const { bgStyle, isExpertStyleActive } = storeToRefs(styleStore)
const { bgLayer } = storeToRefs(mapStore)
const { styleEditorOpenedSection: openedSection } = storeToRefs(appStore)
const styles = useMvtStyles()

const styleCapabilities = computed(() =>
  styles.getStyleCapabilitiesFromLayer(bgLayer.value)
)

const styleEditors = computed(() => styleCapabilities.value.styleEditors)

watch(bgLayer, bgLayer => {
  if (!styles.isLayerStyleEditable(bgLayer)) {
    appStore.closeStyleEditorPanel()
  } else {
    openFirstPanel()
  }
})

onMounted(() => {
  openFirstPanel()
})

function openFirstPanel() {
  if (
    !openedSection.value ||
    !styleEditors.value.includes(openedSection.value)
  ) {
    // Set first panel opened if none previously opened
    openedSection.value = styleEditors.value[0]
  }
}

function resetStyle() {
  styleStore.setStyle(null)
}

function onTogglePanel(panelName: StyleSection) {
  openedSection.value =
    openedSection.value === panelName ? undefined : panelName
}
</script>

<template>
  <div class="lux" v-if="styleCapabilities.isEditable" data-cy="styleSelector">
    <div v-if="styleEditors.includes(StyleSection.simpleStyle)" class="mb-px">
      <expandable-panel
        :title="t('Simple')"
        :expanded="openedSection === StyleSection.simpleStyle"
        @togglePanel="() => onTogglePanel(StyleSection.simpleStyle)"
      >
        <simple-style-selector></simple-style-selector>
      </expandable-panel>
    </div>

    <div v-if="styleEditors.includes(StyleSection.mediumStyle)" class="mb-px">
      <expandable-panel
        :title="t('Medium')"
        :expanded="openedSection === StyleSection.mediumStyle"
        @togglePanel="() => onTogglePanel(StyleSection.mediumStyle)"
      >
        <medium-style-selector
          v-if="bgLayer"
          :layer="bgLayer"
        ></medium-style-selector>
      </expandable-panel>
    </div>

    <div v-if="styleEditors.includes(StyleSection.advancedStyle)" class="mb-px">
      <expandable-panel
        :title="t('Expert (style.json)')"
        :expanded="openedSection === StyleSection.advancedStyle"
        @togglePanel="() => onTogglePanel(StyleSection.advancedStyle)"
      >
        <expert-style-selector
          v-if="bgLayer"
          :layer="bgLayer"
        ></expert-style-selector>
      </expandable-panel>
    </div>
    <button
      v-if="bgStyle || isExpertStyleActive"
      @click="resetStyle"
      class="lux-btn my-2"
    >
      {{ t('Réinitialiser style', { ns: 'client' }) }}
    </button>
  </div>
</template>
