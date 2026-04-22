<script setup lang="ts">
import { inject, ref, Reactive } from 'vue'
import { useTranslation } from 'i18next-vue'

import { DrawnFeature } from '@/services/ol-feature/ol-feature-drawn'
import { useUserManagerStore } from '@/stores/user-manager.store'
import { getMymapsPath } from '@/services/url.utils'
import { fetchApi } from '@/services/api/api.service'

defineEmits(['cancel', 'validate'])

const { t } = useTranslation()
const feature: Reactive<DrawnFeature> = inject('feature')!
const userManagerStore = useUserManagerStore()

const MYMAPS_URL = import.meta.env.VITE_MYMAPS_URL

const fileInput = ref<HTMLInputElement | null>(null)
const tempThumbnail = ref<string>(feature.get('thumbnail') ?? '')
const tempImage = ref<string>(feature.get('image') ?? '')

async function onFileChange(event: Event) {
  const file = (event.target as HTMLInputElement).files?.[0]
  if (!file) return

  const fd = new FormData()
  fd.append('file', file)

  try {
    const response = await fetchApi(MYMAPS_URL + '/upload_image', fd, 'POST')
    const data = await response.json()
    if (data.success) {
      tempThumbnail.value = data.thumbnail
      tempImage.value = data.image
      feature.set('thumbnail', data.thumbnail)
      feature.set('image', data.image)
    }
  } catch (e) {
    // eslint-disable-next-line no-console
    console.error('Image upload failed', e)
  }
}

function removeImage() {
  tempThumbnail.value = ''
  tempImage.value = ''
  feature.set('thumbnail', '')
  feature.set('image', '')
}
</script>

<template>
  {{ t('Modification des informations') }}
  <input
    data-cy="featureLabelEdit"
    type="text"
    class="form-control block mt-2 mb-4"
    v-if="feature"
    v-model="feature.label"
  />
  <textarea
    rows="3"
    class="form-control block w-full"
    v-if="feature"
    v-model="feature.description"
  ></textarea>

  <div v-if="userManagerStore.isAuthenticated()" class="mt-3">
    <template v-if="!tempThumbnail">
      <input
        ref="fileInput"
        type="file"
        accept="image/*"
        name="file"
        hidden
        @change="onFileChange"
      />
      <button class="lux-btn" @click="() => fileInput?.click()">
        {{ t('Ajouter vignette') }}
      </button>
    </template>
    <template v-else>
      <img
        class="mymaps-thumbnail"
        :src="getMymapsPath(tempThumbnail)"
        alt="thumbnail"
      />
      <button class="lux-btn mt-2" @click="removeImage">
        {{ t('Retirer vignette') }}
      </button>
    </template>
  </div>

  <slot name="footer"></slot>
</template>
