<template>
  <div
    v-if="!isOnline"
    class="fixed top-0 left-0 right-0 bg-yellow-500 text-white text-center py-2 z-50"
    role="alert"
    aria-live="assertive"
  >
    <span class="font-semibold">{{ $t('Offline Mode') }}</span>
    <span class="ml-2">{{ $t('Some features may be unavailable') }}</span>
  </div>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { useAppStore } from '@/stores/app.store'

const { isOffLine: isOnline } = storeToRefs(useAppStore())
</script>
