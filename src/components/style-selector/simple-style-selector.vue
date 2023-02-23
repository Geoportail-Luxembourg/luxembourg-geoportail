<script setup lang="ts">
import { useTranslation } from 'i18next-vue'
import { ref } from 'vue'

import { useStyleStore } from '@/stores/style.store'
import { statePersistorLayerService } from '@/services/state-persistor/state-persistor-layer.service'
import SimpleStyleItem from './simple-style-item.vue'
import { bgConfigFixture } from '@/__fixtures__/background.config.fixture'
import { SimpleRoadStyle } from '@/composables/mvt-styles/mvt-styles.model'

const { t } = useTranslation()
const styleStore = useStyleStore()

statePersistorLayerService.bootstrapBgLayer()

const props = defineProps({
  isOpen: {
    type: Boolean,
    default: true,
  },
})
const simpleStyles = ref(bgConfigFixture().simple_styles)

function onStylingSelected(item: SimpleRoadStyle) {
  simpleStyles.value = simpleStyles.value.map(st => {
    if (st.unlocalized_label == item.unlocalized_label) {
      st.selected = true
    } else {
      st.selected = false
    }
    return st
  })
  styleStore.setSimpleStyle(item)
}
function resetStyle() {
  simpleStyles.value = bgConfigFixture().simple_styles
  styleStore.setSimpleStyle(null)
}
</script>

<template>
  <div
    :title="t('Open editor panel', { ns: 'client' })"
    :class="props.isOpen ? '' : 'hidden'"
  >
    <div
      v-for="item in simpleStyles"
      :key="item.unlocalized_label"
      :title="t(item['unlocalized_label'], { ns: 'client' })"
      :class="`${
        item.selected ? 'border-dotted' : 'border-hidden'
      } border-2 p-px`"
    >
      <span class="text-white"
        >{{ t(item['unlocalized_label'], { ns: 'client' }) }} :
      </span>
      <button @click="onStylingSelected(item)" class="w-full">
        <div class="flex">
          <simple-style-item :colors="item['colors']"></simple-style-item>
        </div>
      </button>
    </div>
    <button
      @click="resetStyle"
      type="button"
      title="Reset Style"
      class="lux-btn"
    >
      Reset style
    </button>
  </div>
</template>
