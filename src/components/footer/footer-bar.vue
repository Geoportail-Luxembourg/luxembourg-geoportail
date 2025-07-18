<script setup lang="ts">
import { useAppStore } from '@/stores/app.store'
import { useDrawStore } from '@/stores/draw.store'
import { useFeatureInfoStore } from '@/stores/feature-info.store'
import { useTranslation } from 'i18next-vue'
import { storeToRefs } from 'pinia'
import { watch } from 'vue'
import ButtonIcon from './button-icon.vue'
import ButtonLink from './button-link.vue'
import ToolbarDraw from './toolbar-draw.vue'
import ToolbarMeasure from './toolbar-measure.vue'
import ToolbarPrint from './toolbar-print.vue'

const { t, i18next } = useTranslation()
const appStore = useAppStore()
const drawStore = useDrawStore()
const {
  setLayersOpen,
  togglePrintToolbarOpen,
  toggleDrawToolbarOpen,
  toggleMyMapsOpen,
  toggleLegendsOpen,
  toggleInfoOpen
} = appStore
const {
  layersOpen,
  legendsOpen,
  drawToolbarOpen,
  measureToolbarOpen,
  styleEditorOpen,
  myMapsOpen,
  infoOpen,
  lidarOpen,
  themeGridOpen,
  printToolbarOpen,
} = storeToRefs(appStore)
const { setEditActiveState } = drawStore

function onClickLayersIcon() {
  const open = !layersOpen.value
  setLayersOpen(open)

  if (open) {
    styleEditorOpen.value = false
    myMapsOpen.value = false
    infoOpen.value = false
    lidarOpen.value = false
  }

  themeGridOpen.value = false
}

watch(drawToolbarOpen, isOpen => {
  if (isOpen) {
    measureToolbarOpen.value = false
    printToolbarOpen.value = false
    lidarOpen.value = false
  } else {
    // Deactivate edition mode when draw toolbar is closed
    setEditActiveState(undefined)
  }
})
watch(measureToolbarOpen, isOpen => {
  if (isOpen) {
    drawToolbarOpen.value = false
    printToolbarOpen.value = false
    lidarOpen.value = false
  }
})
watch(printToolbarOpen, isOpen => {
  if (isOpen) {
    drawToolbarOpen.value = false
    measureToolbarOpen.value = false
    lidarOpen.value = false
  }
})
watch(lidarOpen, isOpen => {
  if (isOpen) {
    layersOpen.value =
    legendsOpen.value =
    drawToolbarOpen.value =
    measureToolbarOpen.value =
    styleEditorOpen.value =
    myMapsOpen.value =
    infoOpen.value =
    themeGridOpen.value =
    printToolbarOpen.value =
    drawToolbarOpen.value =
    measureToolbarOpen.value =
    styleEditorOpen.value =
    myMapsOpen.value =
    infoOpen.value = false
  }
})
const featureInfoStore = useFeatureInfoStore()
const { displayStarOnMobile } = storeToRefs(featureInfoStore)
const { setDisplayStarOnMobile } = featureInfoStore

function onClickInfoIcon() {
  toggleInfoOpen()
  setDisplayStarOnMobile(false)
}
</script>

<template>
  <footer
    class="flex flex-col w-12 justify-between bg-white z-5 shrink-0 sm:flex-row sm:w-full sm:h-14 sm:shadow-footer"
  >
    <!-- left buttons -->
    <ul
      class="flex flex-col w-full sm:w-80 sm:flex-row justify-start text-primary divide-y sm:divide-y-0 sm:divide-x divide-gray-400 divide-solid box-content border-y sm:border-y-0 border-x border-gray-400"
    >
      <li data-cy="layersOpenClose">
        <button-icon
          :label="t('layers', { ns: 'client' })"
          icon="layers"
          :active="layersOpen"
          @click="onClickLayersIcon"
        >
        </button-icon>
      </li>

      <!--TODOs in each button when implemented
        - remove class="text-gray-300"
        - add click handler that calls setLayersOpen(true) and opens tool (also via app store)
      -->
      <li data-cy="mymapsOpenClose">
        <button-icon
          :label="t('my_maps', { ns: 'client' })"
          icon="mymaps"
          :active="myMapsOpen"
          @click="() => toggleMyMapsOpen()"
        >
        </button-icon>
      </li>
      <li data-cy="infoOpenClose">
        <button-icon
          :label="`${t('Infos', { ns: 'client' })}${
            displayStarOnMobile ? '(*)' : ''
          }`"
          icon="infos"
          :active="infoOpen"
          @click="onClickInfoIcon"
        >
        </button-icon>
      </li>
      <li data-cy="legendsOpenClose">
        <button-icon
          :label="t('Legends', { ns: 'client' })"
          icon="legends"
          :active="legendsOpen"
          @click="() => toggleLegendsOpen()"
        >
        </button-icon>
      </li>
      <li>
        <button-icon
          class="text-gray-300"
          :label="t('Routing', { ns: 'client' })"
          icon="routing"
        >
        </button-icon>
      </li>
    </ul>

    <!-- center buttons -->
    <div
      class="relative flex flex-col w-12 sm:w-64 sm:flex-row justify-start text-primary divide-y sm:divide-y-0 sm:divide-x divide-gray-400 divide-solid box-content border-y sm:border-y-0 border-x border-gray-400"
    >
      <!-- Drawing tools -->
      <toolbar-draw v-if="drawToolbarOpen" />
      <toolbar-print v-if="printToolbarOpen" />
      <button-icon
        :label="t('Dessin', { ns: 'client' })"
        icon="draw"
        :active="drawToolbarOpen"
        @click="() => toggleDrawToolbarOpen()"
        data-cy="drawButton"
      >
      </button-icon>

      <!-- Measures tools -->
      <toolbar-measure v-if="measureToolbarOpen" />
      <button-icon
        :label="t('Mesurer', { ns: 'client' })"
        :active="measureToolbarOpen"
        icon="measure"
        @click="() => (measureToolbarOpen = !measureToolbarOpen)"
      >
      </button-icon>

      <!-- Print tools -->
      <button-icon
        class="hidden sm:block"
        :label="t('Imprimer', { ns: 'client' })"
        :active="printToolbarOpen"
        @click="() => togglePrintToolbarOpen()"
        icon="print"
        data-cy="printButton"
      >
      </button-icon>

      <!-- Social sharing tools -->
      <button-icon
        class="text-gray-300"
        :label="t('Partager', { ns: 'client' })"
        icon="share"
      >
      </button-icon>
    </div>

    <!-- Right buttons (links) -->
    <div
      class="w-[466px] hidden sm:flex flex-row justify-end text-gray-500 whitespace-nowrap"
    >
      <ButtonLink
        class="hidden lg:flex text-gray-500"
        :label="t('What\'s new', { ns: 'client' })"
        :link="`https://geoportail.lu/${i18next.language}/questions/whats-new/`"
      >
      </ButtonLink>
      <!--TODO get geonetworkBaseUrl from config-->
      <ButtonLink
        class="hidden lg:flex text-gray-500"
        :label="t('Geocatalogue', { ns: 'client' })"
        link=""
      >
      </ButtonLink>
      <!--TODO handle feedback links (for different portals?)-->
      <ButtonLink
        class="hidden lg:flex text-gray-500"
        :label="t('Feedback', { ns: 'client' })"
        link=""
      >
      </ButtonLink>
      <ButtonLink
        class="hidden lg:flex text-gray-500"
        :label="t('A Propos', { ns: 'client' })"
        :link="`https://www.geoportail.lu/${i18next.language}/propos/`"
      >
      </ButtonLink>
      <ButtonLink
        class="hidden lg:flex text-gray-500"
        :label="t('Aide', { ns: 'client' })"
        :link="`https://www.geoportail.lu/${i18next.language}/documentation/`"
      >
      </ButtonLink>
      <ButtonLink
        class="hidden lg:flex text-gray-500"
        :label="t('Contact', { ns: 'client' })"
        :link="`https://www.geoportail.lu/${i18next.language}/propos/contactez-nous/`"
      >
      </ButtonLink>
      <ButtonLink
        class="text-gray-500"
        :label="t('Legalites', { ns: 'client' })"
        :link="`https://www.geoportail.lu/${i18next.language}/propos/mentions-legales/`"
      >
      </ButtonLink>
      <ButtonLink
        class="text-gray-500"
        :label="t('ACT', { ns: 'client' })"
        :link="`http://www.act.public.lu/`"
      >
      </ButtonLink>
    </div>
  </footer>
</template>
