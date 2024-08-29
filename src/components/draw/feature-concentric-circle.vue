<script setup lang="ts">
import { useTranslation } from 'i18next-vue'

const { t } = useTranslation()
</script>

<template>
  {{ t('Veuillez entrer les caractéristiques de votre nouveau cercle') }}

  <div class="flex items-center">
    <span>{{ t('Rayon:') }}</span>
    <div class="flex items-center">
      <input class="form-control block mr-1" type="text" />
      <span>{{ t('mètres') }}</span>
    </div>
  </div>
  <slot name="footer"></slot>
</template>
