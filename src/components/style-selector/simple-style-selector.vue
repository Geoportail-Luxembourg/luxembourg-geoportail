<script setup lang="ts">
import { useTranslation } from 'i18next-vue'
import { ref, watch } from 'vue'

import { useStyleStore } from '@/stores/style.store'
import SimpleStyleItem from './simple-style-item.vue'
import { bgConfigFixture } from '@/__fixtures__/background.config.fixture'
import { SimpleStyle } from '@/composables/mvt-styles/mvt-styles.model'
import { storeToRefs } from 'pinia'
import useMvtStyles from '@/composables/mvt-styles/mvt-styles.composable'

const { t } = useTranslation()
const styleStore = useStyleStore()
const styleService = useMvtStyles()
const { bgStyle } = storeToRefs(styleStore)
const simpleStyles = ref(bgConfigFixture().simple_styles.road)

const props = defineProps({
  isOpen: {
    type: Boolean,
    default: true,
  },
})
const simpleStyleConf = bgConfigFixture().simple_styles.road
// does not seem to work with "computed" => therefore using "watch"
watch(
  bgStyle,
  newBgStyle =>
    (simpleStyles.value = styleService.checkSelection(
      newBgStyle || [],
      simpleStyleConf
    ))
)

function onStylingSelected(item: SimpleStyle) {
  styleStore.setSimpleStyle(item)
}
function resetStyle() {
  styleStore.setStyle(null)
}
</script>

<template>
  <div
    :title="t('Simple style editor', { ns: 'client' })"
    :class="`border-2 p-[10px] ${props.isOpen ? '' : 'hidden'}`"
  >
    <!-- TODO: create clean container for simple and advanced style editors -->
    <div class="w-full text-white text-lg text-center">
      {{ t('Select a style', { ns: 'client' }) }}
    </div>
    <div
      v-for="item in simpleStyles"
      :key="item.unlocalized_label"
      :title="t(item.unlocalized_label, { ns: 'client' })"
      :class="`${
        item.selected ? 'border-dotted' : 'border-hidden'
      } border-2 p-px`"
    >
      <span class="text-white"
        >{{ t(item.unlocalized_label, { ns: 'client' }) }} :
      </span>
      <button
        :title="
          t('Select style: {{styleName}}', {
            styleName: t(item.unlocalized_label),
          })
        "
        @click="onStylingSelected(item)"
        class="w-full"
      >
        <span class="flex">
          <simple-style-item
            :colors="item.colors"
            :style-name="item.unlocalized_label"
          ></simple-style-item>
        </span>
      </button>
    </div>
    <button @click="resetStyle" class="lux-btn">
      {{ t('Reset style', { ns: 'client' }) }}
    </button>
  </div>
</template>
