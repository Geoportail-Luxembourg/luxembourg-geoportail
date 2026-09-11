<script setup lang="ts">
import { ref, computed, watch, onUnmounted } from 'vue'
import { useTranslation } from 'i18next-vue'
import { storeToRefs } from 'pinia'

import { useAppStore } from '@/stores/app.store'
import { useLayerTreeStore } from '@/stores/layer-tree.store'
import { urlStorage } from '@/services/state-persistor/storage/url-storage'
import { storageLayerTreeMapper } from '@/services/state-persistor/state-persistor-layer-tree.mapper'
import { SP_KEY_EXPANDED_NODES } from '@/services/state-persistor/state-persistor.model'

const { t } = useTranslation()
const appStore = useAppStore()
const layerTreeStore = useLayerTreeStore()
const { myMapId, shareOpen } = storeToRefs(appStore)

const url = ref('')
const longurl = ref('')
const showLongUrl = ref(false)
const onlyMymaps = ref(false)
const shareExpandedNodes = ref(false)

const hasExpandedNodes = computed(
  () => Object.keys(layerTreeStore.expandedNodes).length > 0
)

let urlWatchInterval: ReturnType<typeof setInterval> | null = null
let lastCheckedUrl = ''

// Helper function to get the final URL (with MyMaps-only or expandedNodes transformation)
function getFinalUrl(baseUrl: string): string {
  const urlObj = new URL(baseUrl)

  if (onlyMymaps.value && myMapId.value) {
    urlObj.search = `?map_id=${myMapId.value}`
  }

  if (shareExpandedNodes.value && hasExpandedNodes.value) {
    const encoded = storageLayerTreeMapper.expandedNodesToStorage(
      layerTreeStore.expandedNodes
    )
    urlObj.searchParams.set(SP_KEY_EXPANDED_NODES, encoded)
  }

  return urlObj.toString()
}

async function updateUrl() {
  const strippedUrl = urlStorage.getStrippedUrl()
  const finalUrl = getFinalUrl(strippedUrl.toString())

  longurl.value = finalUrl
  lastCheckedUrl = finalUrl // Update the last checked URL

  try {
    const shortUrlResponse = await urlStorage.getShortUrl(undefined, finalUrl)
    url.value = shortUrlResponse.short_url
  } catch (error) {
    // Fallback to long URL on error
    url.value = finalUrl
  }
}

function selectInput(event: Event) {
  const input = event.target as HTMLInputElement
  input.select()
}

// Start watching for URL changes
function startUrlWatch() {
  // Clear any existing interval first
  if (urlWatchInterval !== null) {
    clearInterval(urlWatchInterval)
  }

  // Start polling for URL changes
  urlWatchInterval = setInterval(() => {
    const currentUrl = urlStorage.getStrippedUrl().toString()
    const currentFinalUrl = getFinalUrl(currentUrl)

    if (lastCheckedUrl !== currentFinalUrl) {
      updateUrl()
    }
  }, 500)
}

// Stop watching for URL changes
function stopUrlWatch() {
  if (urlWatchInterval !== null) {
    clearInterval(urlWatchInterval)
    urlWatchInterval = null
  }
}

// Watch onlyMymaps changes
watch(onlyMymaps, () => {
  if (shareOpen.value) {
    updateUrl()
  }
})

watch(shareExpandedNodes, () => {
  if (shareOpen.value) {
    updateUrl()
  }
})

// Watch shareOpen to start/stop URL monitoring
watch(
  shareOpen,
  isOpen => {
    if (isOpen) {
      updateUrl()
      startUrlWatch()
    } else {
      stopUrlWatch()
    }
  },
  { immediate: true }
)

onUnmounted(() => {
  stopUrlWatch()
})

const isMymapsSelected = () => !!myMapId.value
</script>

<template>
  <div class="flex flex-col gap-3">
    <div class="md:w-full">
      <label
        for="share-url-input"
        class="block text-white text-sm font-medium mb-2"
      >
        {{ t('Short Url', { ns: 'app' }) }}
      </label>
      <input
        v-if="!showLongUrl"
        id="share-url-input"
        type="text"
        class="w-full px-3 py-2 lux-input cursor-pointer"
        :value="url"
        :aria-label="t('Short Url', { ns: 'app' })"
        @click="selectInput"
        readonly
        data-cy="shareShortUrl"
      />
      <input
        v-else
        id="share-url-input"
        type="text"
        class="w-full px-3 py-2 lux-input cursor-pointer"
        :value="longurl"
        :aria-label="t('Long Url', { ns: 'app' })"
        @click="selectInput"
        readonly
        data-cy="shareLongUrl"
      />
    </div>

    <div class="flex gap-1 items-center">
      <input
        id="show-long-url-checkbox"
        type="checkbox"
        v-model="showLongUrl"
        class="hover:cursor-pointer"
        data-cy="showLongUrlCheckbox"
      />
      <label
        for="show-long-url-checkbox"
        class="font-bold block lux-text-default hover:cursor-pointer"
      >
        {{ t('Show long url', { ns: 'app' }) }}
      </label>
    </div>

    <div v-if="hasExpandedNodes" class="flex gap-1 items-center">
      <input
        id="share-expanded-nodes-checkbox"
        type="checkbox"
        v-model="shareExpandedNodes"
        class="hover:cursor-pointer"
        data-cy="shareExpandedNodesCheckbox"
      />
      <label
        for="share-expanded-nodes-checkbox"
        class="font-bold block lux-text-default hover:cursor-pointer"
      >
        {{ t('Share current layer view', { ns: 'app' }) }}
      </label>
    </div>

    <div v-if="isMymapsSelected()" class="flex gap-1 items-center">
      <input
        id="only-mymaps-checkbox"
        type="checkbox"
        v-model="onlyMymaps"
        class="hover:cursor-pointer"
        data-cy="onlyMymapsCheckbox"
      />
      <label
        for="only-mymaps-checkbox"
        class="font-bold block lux-text-default hover:cursor-pointer"
      >
        {{ t('Share only Mymaps', { ns: 'app' }) }}
      </label>
    </div>
  </div>
</template>
