<script setup lang="ts">
import { useTranslation } from 'i18next-vue'

const { i18next } = useTranslation()

function changeLanguages(event: Event) {
  if (event.target) {
    const lang = (event.target as HTMLInputElement).value
    i18next.changeLanguage(lang)
  }
}
</script>

<template>
  <select @change="changeLanguages">
    <option value="fr">FR</option>
    <option value="en">EN</option>
    <option value="de">DE</option>
    <option value="lb">LB</option>
  </select>
</template>
