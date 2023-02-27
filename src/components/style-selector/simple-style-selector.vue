<script setup lang="ts">
import { useTranslation } from 'i18next-vue'
import { ref, watch } from 'vue'

import { useStyleStore } from '@/stores/style.store'
// import { statePersistorStyleService } from '@/services/state-persistor/state-persistor-style.service'
import SimpleStyleItem from './simple-style-item.vue'
import { bgConfigFixture } from '@/__fixtures__/background.config.fixture'
import { SimpleRoadStyle } from '@/composables/mvt-styles/mvt-styles.model'
import { storeToRefs } from 'pinia'
import useMvtStyles from '@/composables/mvt-styles/mvt-styles.composable'

const { t } = useTranslation()
const styleStore = useStyleStore()
const styleService = useMvtStyles()
const { bgStyle } = storeToRefs(styleStore)
const simpleStyles = ref(bgConfigFixture().simple_styles)

// statePersistorStyleService.bootstrapStyle()

const props = defineProps({
  isOpen: {
    type: Boolean,
    default: true,
  },
})
const simpleStyleConf = ref(bgConfigFixture().simple_styles)
// does not seem to work with "computed" => therefore using "watch"
watch(
  [bgStyle, simpleStyleConf],
  ([st, ss]) => (simpleStyles.value = styleService.checkSelection(st || [], ss))
)

function onStylingSelected(item: SimpleRoadStyle) {
  styleStore.setSimpleStyle(item)
}
function resetStyle() {
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
