<script setup lang="ts">
import { useTranslation } from 'i18next-vue'

const { t } = useTranslation()
</script>

<template>
  <header
    class="w-full h-14 flex items-center justify-center bg-orange-600 shadow-header z-10 shrink-0"
    role="alert"
    aria-live="polite"
  >
    <div class="flex items-center gap-3 px-4">
      <!-- Offline Icon -->
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-6 w-6 text-white"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        stroke-width="2"
        aria-hidden="true"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M18.364 5.636a9 9 0 010 12.728m0 0l-2.829-2.829m2.829 2.829L21 21M15.536 8.464a5 5 0 010 7.072m0 0l-2.829-2.829m-4.243 2.829a4.978 4.978 0 01-1.414-2.83m-1.414 5.658a9 9 0 01-2.167-9.238m7.824 2.167a1 1 0 111.414 1.414m-1.414-1.414L3 3"
        />
      </svg>

      <!-- Message -->
      <div class="text-white">
        <p class="font-semibold text-base" data-cy="offlineHeaderMessage">
          {{ t('You are currently disconnected') }}
        </p>
        <p class="text-xs opacity-90 hidden sm:block">
          {{ t('Some features may be unavailable in offline mode') }}
        </p>
      </div>

      <!-- Government Logo (smaller version for branding consistency) -->
      <div class="ml-auto hidden md:block opacity-80">
        <img
          src="@/assets/images/gov-light.png"
          alt="Luxembourg Government"
          class="h-8 brightness-0 invert"
        />
      </div>
    </div>
  </header>
</template>

<style scoped>
/* Pulse animation for attention */
@keyframes pulse-subtle {
  0%,
  100% {
    opacity: 1;
  }
  50% {
    opacity: 0.9;
  }
}

header {
  animation: pulse-subtle 3s ease-in-out infinite;
}
</style>
