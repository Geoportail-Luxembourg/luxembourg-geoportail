<script setup lang="ts">
import { ref } from 'vue'
import { useTranslation } from 'i18next-vue'
import { computed } from 'vue'

const { t } = useTranslation()
const elevation = ref(0)
const elevationLabel = computed(() =>
  t('Elevation: {{ featureElevation }}', { featureElevation: elevation.value })
)
</script>

<template>
  <span class="cursor-default">{{ elevationLabel }}</span>
</template>
