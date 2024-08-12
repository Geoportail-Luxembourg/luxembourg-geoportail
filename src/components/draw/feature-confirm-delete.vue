<script setup lang="ts">
import { useTranslation } from 'i18next-vue'

const { t } = useTranslation()
</script>

<template>
  {{ t('Êtes-vous certain de vouloir effacer cet élément de la carte ?') }}

  <slot name="footer"></slot>
</template>
