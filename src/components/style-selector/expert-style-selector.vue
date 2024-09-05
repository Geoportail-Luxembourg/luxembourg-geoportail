<script setup lang="ts">
import { useTranslation } from 'i18next-vue'
import { storeToRefs } from 'pinia'
import { saveAs } from 'file-saver'

import { useMapStore } from '@/stores/map.store'
import { useStyleStore } from '@/stores/style.store'
import { styleUrlHelper } from '@/services/styleurl/styleurl.helper'
import useMvtStyles from '@/composables/mvt-styles/mvt-styles.composable'

const mapStore = useMapStore()
const styleStore = useStyleStore()
const styleService = useMvtStyles()

const { appliedStyle } = storeToRefs(styleStore)

const { t } = useTranslation()

function downloadCustomStyleFile() {
  const currentStyle = appliedStyle.value
  const content = JSON.stringify(currentStyle)
  const blob = new Blob([content], { type: 'text/plain;charset=utf-8' })
  const fileName = 'styles.json'
  saveAs(blob, fileName)
}

function setCustomStyle(styleEvent: Event) {
  const files = (styleEvent.target as HTMLInputElement).files
  if (files?.length !== 1) {
    return
  }
  const file = files[0]

  if (file.type !== 'application/json') {
    return
  }

  file.text().then(result => {
    styleStore.enableExpertStyle()
    appliedStyle.value = JSON.parse(result)
  })
  // Reset form value
  ;(styleEvent.target as HTMLInputElement).value = ''
}

function getStyleUrl() {
  if (styleStore.styleSerial === null) {
    return styleService.getDefaultMapBoxStyleUrl(
      styleService.getVectorId(mapStore.bgLayer)
    )
  } else {
    return `${styleUrlHelper.mvtStylesGetUrl}?id=${styleStore.styleSerial}`
  }
}
</script>

<template>
  <div
    class="text-white border-2 p-[10px] m-[10px] flex flex-col overflow-hidden"
  >
    <h5 class="text-center mb-3">
      {{ t('Lancer éditeur externe ou importer json') }}
    </h5>
    <div class="flex flex-row justify-center">
      <a
        href="#"
        class="text-white border-2 relative h-[100px] w-[85px] mx-[10px] my-0 mb-[15px] z-5 text-sm after:absolute after:left-[20px] after:top-[10px] after:z-4 after:w-[3.6em] after:text-center after:content-download hover:bg-secondary"
        @click="downloadCustomStyleFile()"
      >
        <span
          class="absolute top-[70px] w-full text-center text-base leading-3 font-medium text-white"
        >
          {{ t('Download style') }}
        </span>
      </a>
      <div
        class="text-white border-2 relative h-[100px] w-[85px] mx-[10px] my-0 mb-[15px] text-sm hover:bg-secondary"
      >
        <label
          class="'block z-[5] w-full h-full cursor-pointer after:absolute after:pt-[15px] after:px-[15px] after:w-full after:text-center after:content-upload"
          for="uploadMvtStyle"
        >
          <span
            class="absolute top-[70px] w-full text-center text-base leading-3 font-medium"
          >
            {{ t('Upload style') }}
          </span>
        </label>
        <input
          class="invisible"
          type="file"
          name="uploadMvtStyle"
          id="uploadMvtStyle"
          @change="setCustomStyle"
        />
      </div>
    </div>
    <a
      :href="`https://maputnik.github.io/editor/?style=${getStyleUrl()}`"
      target="_blank"
      class="lux-btn text-center"
      >{{ t('Open Maputnik editor') }}</a
    >
  </div>
</template>
