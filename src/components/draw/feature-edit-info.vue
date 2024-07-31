<script setup lang="ts">
import { useTranslation } from 'i18next-vue'

const { t } = useTranslation()
</script>

<template>
  {{ t('Modification des informations') }}
  <input type="text" class="block mt-2 mb-4" />
  <textarea rows="3" class="block mb-4 w-full"></textarea>
</template>
