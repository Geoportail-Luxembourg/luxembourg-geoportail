<script setup lang="ts">
import DropdownList from '@/components/common/dropdown-list.vue'
import useMap from '@/composables/map/map.composable'
import { useJobStatus } from '@/composables/print/jobStatus.composable'
import { Mask } from '@/lib/ol-mask-layer'
import { PRINT_FORMAT, printService } from '@/services/print.service'
import { useAlertNotificationsStore } from '@/stores/alert-notifications.store'
import { AlertNotificationType } from '@/stores/alert-notifications.store.model'
import { useAppStore } from '@/stores/app.store'
import { useTranslation } from 'i18next-vue'
import { FrameState } from 'ol/PluggableMap'
import { v4 as uuidv4 } from 'uuid'
import { computed, onMounted, onUnmounted, ref, watch } from 'vue'

const { url, startPolling, error } = useJobStatus()
const { addNotification } = useAlertNotificationsStore()

const { t } = useTranslation()
const { lang } = useAppStore()
const uuid = uuidv4()
let framestate: FrameState | null = null

const map = useMap().getOlMap()
const mask = new Mask({ id: 'mask', opacity: 0 })

const title = ref<string>('')
const legend = ref<boolean>(false)

const layout = ref<string>('')
const layouts = computed(() =>
  printService.getLayouts().map(layout => ({
    label: t(layout),
    value: layout,
    ariaLabel: t('Change layout: {{lang}}', { ns: 'app', lang: 'fr' }),
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
    label: t(`1:${scale}`),
    value: scale.toString(),
    ariaLabel: t('Change scale: {{lang}}', { ns: 'app', lang: 'fr' }),
  }))
)
const changeScale = (value: string) => {
  scalePlaceholder.value = value
  scale.value = value
  mask.setScale(parseInt(value, 10))
  map.render()
}
const scalePlaceholder = ref<string>('')

const print = async (format: PRINT_FORMAT) => {
  try {
    const pollingURL = await printService.print(
      {
        format,
        layout: layout.value,
        scale: parseInt(scale.value, 10),
        resolution: map.getView().getResolution()!,
        title: title.value,
        legend: legend.value,
        lang,
        t,
        framestate,
      },
      map
    )
    startPolling(pollingURL)
  } catch {
    addNotification(
      t('An error occurred while printing'),
      AlertNotificationType.ERROR
    )
  }
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
          class="cursor-pointer"
          type="checkbox"
          v-model="legend"
          data-cy="printWithLegend"
        />
        <label class="font-bold block lux-text-default" :for="uuid">
          {{ t('Avec légende') }}
        </label>
      </div>

      <div class="flex gap-1 items-center secondary-button">
        <div class="md:w-1/2">
          <dropdown-list
            class="w-full"
            :options="layouts"
            :placeholder="layoutPlaceholder"
            v-model="layout"
            @change="changeLayout"
            :direction="'up'"
          ></dropdown-list>
        </div>
        <div class="md:w-1/2">
          <dropdown-list
            class="w-full"
            :options="scales"
            :placeholder="scalePlaceholder"
            v-model="scale"
            @change="changeScale"
            :direction="'up'"
          ></dropdown-list>
        </div>
      </div>

      <div class="flex gap-1 justify-end">
        <button
          data-cy="printPng"
          class="bg-white text-primary hover:bg-primary hover:text-white border border-slate-300 py-1.5 px-2.5"
          @click="print(PRINT_FORMAT.PNG)"
        >
          {{ t('PNG') }}
        </button>
        <button
          data-cy="printPdf"
          class="bg-white text-primary hover:bg-primary hover:text-white border border-slate-300 py-1.5 px-2.5"
          @click="print(PRINT_FORMAT.PDF)"
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
