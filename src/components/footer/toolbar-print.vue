<script setup lang="ts">
import DropdownList from '@/components/common/dropdown-list.vue'
import useMap from '@/composables/map/map.composable'
import { usePrint } from '@/composables/print/print.composable'
import { Mask } from '@/lib/ol-mask-layer'
import { PRINT_FORMAT, PrintOptions } from '@/services/print/print.model'
import { printService } from '@/services/print/print.service'
import { useAlertNotificationsStore } from '@/stores/alert-notifications.store'
import { AlertNotificationType } from '@/stores/alert-notifications.store.model'
import { useAppStore } from '@/stores/app.store'
import { useTranslation } from 'i18next-vue'
import { FrameState } from 'ol/Map'
import { v4 as uuidv4 } from 'uuid'
import { computed, onMounted, onUnmounted, ref, watch } from 'vue'

const MASK_ZINDEX = 2000

const { addNotification } = useAlertNotificationsStore()

const { t } = useTranslation()
const { lang } = useAppStore()
const { print, abortPrint, url, error, loading } = usePrint()
const uuid = uuidv4()
let framestate: FrameState | null = null

const map = useMap().getOlMap()
const mask = new Mask({ id: 'mask', opacity: 0 })
mask.setZIndex(MASK_ZINDEX)

const title = ref<string>('')
const legend = ref<boolean>(false)
const printPngAllowed = computed(() => !legend.value)

const layout = ref<string>('')
const layouts = computed(() =>
  printService.getLayouts().map(layout => ({
    label: t(layout),
    value: layout,
    ariaLabel: t('Change layout:', { ns: 'app' }),
  }))
)
const changeLayout = (value: string) => {
  layout.value = value
  layoutPlaceholder.value = value
  mask.setSize(printService.getSize(value))
  map.render()
}
const layoutPlaceholder = ref<string>('')

const scale = ref<string>('')
const scales = computed(() =>
  printService.getScales().map(scale => ({
    label: `1 : ${scale.toLocaleString()}`,
    value: scale.toString(),
    ariaLabel: t('Change scale:', { ns: 'app' }),
  }))
)
const changeScale = (value: string) => {
  scale.value = value
  mask.setScale(parseInt(value, 10))
  map.render()
}

function clickPrint(format: PRINT_FORMAT) {
  print({
    format,
    layout: layout.value,
    scale: parseInt(scale.value, 10),
    resolution: map.getView().getResolution()!,
    title: title.value,
    legend: legend.value,
    lang,
    framestate,
  } as PrintOptions)
}

watch(error, error => {
  if (error) {
    addNotification(
      t('An error occurred while printing'),
      AlertNotificationType.ERROR
    )
  }
})
watch(url, downloadURL => downloadURL && window.open(downloadURL, '_blank'))

onMounted(() => {
  map.addLayer(mask)
  mask.setOpacity(0.5)
  map.on('rendercomplete', e => {
    framestate = e.frameState || null
  })

  // Initial values
  changeLayout(layouts.value[0].value)
  changeScale(
    printService
      .getNearestScale(
        map.getSize()![0],
        layout.value,
        map.getView().getResolution()!
      )
      .toString()
  )
})
onUnmounted(() => {
  map.removeLayer(mask)
  mask.setOpacity(0)
})
</script>
<template>
  <div data-cy="toolbarPrint">
    <div
      class="absolute bottom-full top-auto z-20 flex flex-col divide-gray-400 divide-solid box-content border-y border-x border-gray-400 bg-primary md:w-64 p-3 gap-3"
    >
      <div class="md:w-full">
        <input
          class="cursor-pointer w-full p-2 lux-input"
          type="text"
          v-model="title"
          :placeholder="t('Title', { ns: 'client' })"
          data-cy="printTitle"
        />
      </div>

      <div class="flex gap-1 items-center">
        <input
          :id="uuid"
          class="hover:cursor-pointer"
          type="checkbox"
          v-model="legend"
          data-cy="printWithLegend"
        />
        <label
          class="font-bold block lux-text-default hover:cursor-pointer"
          :for="uuid"
        >
          {{ t('Avec légende') }}
        </label>
      </div>

      <div class="flex gap-1 items-center secondary-button">
        <div class="md:w-1/2">
          <dropdown-list
            data-cy="printLayouts"
            class="w-full"
            :options="layouts"
            v-model="layout"
            @change="changeLayout"
            :direction="'up'"
          ></dropdown-list>
        </div>
        <div class="md:w-1/2">
          <dropdown-list
            data-cy="printScales"
            class="w-full"
            :options="scales"
            v-model="scale"
            @change="changeScale"
            :direction="'up'"
          ></dropdown-list>
        </div>
      </div>

      <div class="flex gap-1 justify-end items-center">
        <div
          v-if="loading"
          data-cy="printLoading"
          class="mr-4 flex gap-2 items-center"
        >
          <span
            class="text-black fa-solid fa-arrows-rotate animate-spin"
            aria-hidden="true"
          ></span>
          <button
            class="btn btn-link opacity-75 text-white hover:underline hover:opacity-100"
            @click="abortPrint()"
          >
            {{ t('Abort') }}
          </button>
        </div>
        <button
          data-cy="printPng"
          class="bg-white disabled:opacity-75 disabled:cursor-not-allowed text-primary hover:bg-primary hover:text-white border border-slate-300 py-1.5 px-2.5"
          @click="clickPrint(PRINT_FORMAT.PNG)"
          :disabled="loading || !printPngAllowed"
        >
          {{ t('PNG') }}
        </button>
        <button
          data-cy="printPdf"
          class="bg-white disabled:opacity-75 disabled:cursor-not-allowed text-primary hover:bg-primary hover:text-white border border-slate-300 py-1.5 px-2.5"
          @click="clickPrint(PRINT_FORMAT.PDF)"
          :disabled="loading"
        >
          {{ t('PDF') }}
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.secondary-button {
  --button-theme: secondary;
}
</style>
