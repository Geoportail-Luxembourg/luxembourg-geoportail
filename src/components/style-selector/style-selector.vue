<script setup lang="ts">
import { ref } from 'vue'
import { storeToRefs } from 'pinia'
import { useTranslation } from 'i18next-vue'

import SimpleStyleSelector from '@/components/style-selector/simple-style-selector.vue'
import MediumStyleSelector from '@/components/style-selector/medium-style-selector.vue'
import { useAppStore } from '@/stores/app.store'
import { useMapStore } from '@/stores/map.store'

const { t } = useTranslation()
const mapStore = useMapStore()
const appStore = useAppStore()
const { bgLayer } = storeToRefs(mapStore)

let isSimpleStyleOpen = ref(false)
let isMediumStyleOpen = ref(false)
let isAdvancedStyleOpen = ref(false)
</script>

<template>
  <div>
    <button @click="() => appStore.toggleStyleEditorPanel()">X close</button>
    <h2 class="h-20 shrink-0 flex justify-between lux-panel-title">
      {{ t('Style editor') }}
    </h2>
    <div>
      <button @click="() => (isSimpleStyleOpen = !isSimpleStyleOpen)">
        {{ t('Choose a predefined style') }}
      </button>
      <simple-style-selector :class="isSimpleStyleOpen ? '' : 'hidden'" />
    </div>

    <div>
      <button @click="() => (isMediumStyleOpen = !isMediumStyleOpen)">
        {{ t('Change main colours') }}
      </button>
      <medium-style-selector
        :class="isMediumStyleOpen ? '' : 'hidden'"
        v-if="bgLayer"
        :layer="bgLayer"
      />
    </div>

    <div>
      <button @click="() => (isAdvancedStyleOpen = !isAdvancedStyleOpen)">
        {{ t('Advanced settings') }}
      </button>
      <!-- Advanced style editor here -->
    </div>
  </div>
</template>
