<script setup lang="ts">
import { ref, watch, onMounted, onUnmounted } from 'vue'
import { useTranslation } from 'i18next-vue'
import { storeToRefs } from 'pinia'

import { useAppStore } from '@/stores/app.store'
import { urlStorage } from '@/services/state-persistor/storage/url-storage'

const { t } = useTranslation()
const appStore = useAppStore()
const { mapId, shareOpen } = storeToRefs(appStore)

const url = ref('')
const longurl = ref('')
const showLongUrl = ref(false)
const onlyMymaps = ref(false)

let urlWatchRemoveFn: (() => void) | null = null
let lastCheckedUrl = ''

async function updateUrl() {
  const strippedUrl = urlStorage.getStrippedUrl()
  let finalUrl = strippedUrl.toString()

  if (onlyMymaps.value && mapId.value) {
    // Replace search params with only map_id
    const urlObj = new URL(finalUrl)
    urlObj.search = `?map_id=${mapId.value}`
    finalUrl = urlObj.toString()
  }

  longurl.value = finalUrl
  lastCheckedUrl = finalUrl // Update the last checked URL

  try {
    if (onlyMymaps.value && mapId.value) {
      // For MyMaps-only mode, call the shortener directly with the filtered URL
      const data = new URLSearchParams()
      data.set('url', finalUrl)

      const response = await fetch(import.meta.env.VITE_SHORT_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: data.toString(),
      })
      const mymapsShortUrl = await response.json()
      url.value = mymapsShortUrl.short_url
    } else {
      // For normal mode, use the urlStorage service
      const shortUrlResponse = await urlStorage.getShortUrl(undefined)
      url.value = shortUrlResponse.short_url
    }
  } catch (error) {
    // Fallback to long URL on error
    url.value = finalUrl
  }
}

function selectInput(event: Event) {
  const input = event.target as HTMLInputElement
  input.select()
}

// Watch for URL changes when panel is open
function setupUrlWatch() {
  const checkInterval = setInterval(() => {
    if (shareOpen.value) {
      const currentUrl = urlStorage.getStrippedUrl().toString()
      const currentFinalUrl =
        onlyMymaps.value && mapId.value
          ? (() => {
              const urlObj = new URL(currentUrl)
              urlObj.search = `?map_id=${mapId.value}`
              return urlObj.toString()
            })()
          : currentUrl

      if (lastCheckedUrl !== currentFinalUrl) {
        updateUrl()
      }
    }
  }, 500)

  return () => clearInterval(checkInterval)
}

// Watch onlyMymaps changes
watch(onlyMymaps, () => {
  if (shareOpen.value) {
    updateUrl()
  }
})

onMounted(() => {
  watch(
    shareOpen,
    isOpen => {
      if (isOpen) {
        updateUrl()
        urlWatchRemoveFn = setupUrlWatch()
      } else {
        if (urlWatchRemoveFn) {
          urlWatchRemoveFn()
          urlWatchRemoveFn = null
        }
      }
    },
    { immediate: true }
  )
})

onUnmounted(() => {
  if (urlWatchRemoveFn) {
    urlWatchRemoveFn()
  }
})

const isMymapsSelected = () => !!mapId.value
</script>

<template>
  <div class="flex flex-col gap-3">
    <div class="md:w-full">
      <label
        for="share-url-input"
        class="block text-white text-sm font-medium mb-2"
      >
        {{ t('Short Url', { ns: 'client' }) }}
      </label>
      <input
        v-if="!showLongUrl"
        id="share-url-input"
        type="text"
        class="w-full px-3 py-2 lux-input cursor-pointer"
        :value="url"
        :aria-label="t('Short Url', { ns: 'client' })"
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
        :aria-label="t('Long Url', { ns: 'client' })"
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
        {{ t('Show long url', { ns: 'client' }) }}
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
        {{ t('Share only Mymaps', { ns: 'client' }) }}
      </label>
    </div>
  </div>
</template>
