<script setup lang="ts">
import { useTranslation } from 'i18next-vue'

const { t } = useTranslation()

const props = defineProps<{
  feature: string
}>()
const feature = props.feature
</script>

<template>
  {{ t('Modification des informations') }}
  <input type="text" class="form-control block mt-2 mb-4" v-model="feature" />
  <textarea rows="3" class="form-control block mb-4 w-full"></textarea>
</template>
