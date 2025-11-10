<script setup lang="ts">
import { ref, onMounted, computed } from 'vue'
import useServiceWorker, {
  type CacheStats,
} from '@/composables/offline/service-worker.composable'

const {
  isSupported,
  isRegistered,
  getCacheStats,
  clearCache,
  formatCacheStats,
} = useServiceWorker()

const stats = ref<CacheStats>({
  entries: 0,
  caches: 0,
  isSupported: false,
  isRegistered: false,
})
const isLoading = ref(false)
const isClearing = ref(false)
const lastUpdated = ref<Date | null>(null)

const canManageCache = computed(
  () => stats.value.isSupported && stats.value.isRegistered
)

const hasCache = computed(() => stats.value.entries > 0)

async function refreshStats() {
  isLoading.value = true
  try {
    stats.value = await getCacheStats()
    lastUpdated.value = new Date()
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error('Failed to get cache stats:', error)
  } finally {
    isLoading.value = false
  }
}

async function handleClearCache() {
  if (
    !confirm(
      'Clear all cached vector tiles? This will require re-downloading tiles when you browse the map.'
    )
  ) {
    return
  }

  isClearing.value = true
  try {
    const success = await clearCache()
    if (success) {
      await refreshStats()
      alert('Cache cleared successfully')
    } else {
      alert('Failed to clear cache')
    }
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error('Failed to clear cache:', error)
    alert('Failed to clear cache')
  } finally {
    isClearing.value = false
  }
}

onMounted(() => {
  refreshStats()
})
</script>

<template>
  <div
    class="sw-cache-manager border border-gray-300 rounded-lg p-4 bg-white"
    data-cy="swCacheManager"
  >
    <div class="flex items-center justify-between mb-3">
      <h3 class="text-lg font-semibold text-gray-800">
        {{ $t('Vector Tiles Cache', { ns: 'client' }) }}
      </h3>
      <button
        v-if="canManageCache"
        @click="refreshStats"
        :disabled="isLoading"
        class="text-sm text-primary hover:underline disabled:opacity-50"
        data-cy="swRefreshStats"
      >
        <span v-if="isLoading">{{ $t('Loading...', { ns: 'client' }) }}</span>
        <span v-else>{{ $t('Refresh', { ns: 'client' }) }}</span>
      </button>
    </div>

    <!-- Status message -->
    <div class="mb-3 text-sm">
      <div v-if="!isSupported" class="text-amber-600">
        {{
          $t('Service Worker not supported in this browser', { ns: 'client' })
        }}
      </div>
      <div v-else-if="!isRegistered" class="text-amber-600">
        {{
          $t('Service Worker not active. Caching disabled.', { ns: 'client' })
        }}
      </div>
      <div v-else class="text-gray-600">
        {{ formatCacheStats(stats) }}
      </div>
    </div>

    <!-- Last updated -->
    <div v-if="lastUpdated" class="text-xs text-gray-500 mb-3">
      {{ $t('Last updated', { ns: 'client' }) }}:
      {{ lastUpdated.toLocaleTimeString() }}
    </div>

    <!-- Cache breakdown -->
    <div v-if="canManageCache && hasCache" class="mb-3 text-sm text-gray-600">
      <div class="grid grid-cols-2 gap-2">
        <div class="flex items-center gap-2">
          <span class="w-2 h-2 bg-blue-500 rounded-full"></span>
          <span
            >{{ stats.entries }} {{ $t('resources', { ns: 'client' }) }}</span
          >
        </div>
        <div class="flex items-center gap-2">
          <span class="w-2 h-2 bg-green-500 rounded-full"></span>
          <span
            >{{ stats.caches }} {{ $t('cache stores', { ns: 'client' }) }}</span
          >
        </div>
      </div>
    </div>

    <!-- Info text -->
    <div class="text-xs text-gray-500 mb-3 p-2 bg-gray-50 rounded">
      {{
        $t(
          'Cached tiles allow offline map viewing in previously visited areas',
          { ns: 'client' }
        )
      }}
    </div>

    <!-- Actions -->
    <div class="flex gap-2">
      <button
        v-if="canManageCache && hasCache"
        @click="handleClearCache"
        :disabled="isClearing"
        class="flex-1 px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 disabled:opacity-50 disabled:cursor-not-allowed text-sm font-medium transition-colors"
        data-cy="swClearCache"
      >
        <span v-if="isClearing">{{ $t('Clearing...', { ns: 'client' }) }}</span>
        <span v-else>{{ $t('Clear Cache', { ns: 'client' }) }}</span>
      </button>
      <div
        v-else-if="canManageCache"
        class="text-sm text-gray-500 italic text-center w-full"
      >
        {{ $t('No cached data', { ns: 'client' }) }}
      </div>
    </div>
  </div>
</template>

<style scoped>
.sw-cache-manager {
  max-width: 400px;
}
</style>
