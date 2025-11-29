<script setup lang="ts">
import { useTranslation } from 'i18next-vue'
import { computed, ref, watch } from 'vue'
import { storeToRefs } from 'pinia'

import MenuPopup from '@/components/common/menu-popup/menu-popup.vue'
import MenuPopupItem from '@/components/common/menu-popup/menu-popup-item.vue'
import { MyMap } from '@/services/api/api-mymaps.service'
import { useAppStore } from '@/stores/app.store'
import {
  exportFeatureService,
  ExportFormat,
  FeatExport,
} from '@/services/export-feature/export-feature.service'
import useMap from '@/composables/map/map.composable'
import { useDrawStore } from '@/stores/draw.store'
import { readFileContent } from '@/services/file.utils'
import useDrawnFeatures from '@/composables/draw/drawn-features.composable'

const { t } = useTranslation()
const emit = defineEmits<{
  (e: 'close'): void
  (e: 'new'): void
  (e: 'open'): void
  (e: 'copy', map: MyMap): void
  (e: 'edit', map: MyMap): void
  (e: 'share', map: MyMap): void
  (e: 'delete', map: MyMap): void
  (e: 'clear', map: MyMap): void
  (e: 'resetLayers', map: MyMap): void
  (e: 'saveLayers', map: MyMap): void
  (e: 'draw:mergelines', map: MyMap): void
  (e: 'draw:cutlines', map: MyMap): void
}>()
const props = defineProps<{
  myMap: MyMap
}>()
const map = useMap().getOlMap()
const { generateDrawnFeature } = useDrawnFeatures()
const { myMapLayersChanged } = storeToRefs(useAppStore())
const drawStore = useDrawStore()
const { drawnFeaturesMyMaps } = storeToRefs(drawStore)
const fileInputRef = ref<HTMLInputElement | null>(null)
const selectedFile = ref<File | null>(null)
const menuOptions = computed(() => [
  {
    label: 'Créer une nouvelle carte',
    action: () => emit('new'),
  },
  {
    label: 'Ouvrir une carte existante',
    action: () => emit('open'),
  },
  {
    label: 'Créer une copie',
    action: () => emit('copy', props.myMap),
  },
  {
    label: 'Partager la carte',
    action: () => emit('share', props.myMap),
    separator: true,
  },
  {
    label: 'Supprimer la carte',
    action: () => emit('delete', props.myMap),
  },
  {
    label: 'Supprimer tous les élements de la carte',
    action: () => emit('clear', props.myMap),
  },
  {
    label: 'Fusionner des lignes',
    action: () => emit('draw:mergelines', props.myMap),
  },
  {
    label: 'Couper une ligne',
    action: () => emit('draw:cutlines', props.myMap),
    separator: true,
  },
  {
    label: 'Fermer',
    action: () => emit('close'),
    separator: true,
  },
  {
    label: 'Exporter un GPX',
    action: () => download('gpx'),
  },
  {
    label: 'Exporter un KML',
    action: () => download('kml'),
  },
  {
    label: 'Exporter un Shapefile',
    action: () => download('shapefile'),
  },
  {
    label: 'Importer un fichier GPX/KML/KMZ',
    action: () => importFeatures(),
  },
])

watch(selectedFile, async file => {
  if (!file) return

  try {
    const result = await readFileContent(file, map)
    const { features } = result

    features.forEach(feature => {
      const drawFeature = generateDrawnFeature(feature)
      drawStore.addDrawnFeatureToCollection(drawFeature)
      drawFeature.fit()
    })
  } catch (error) {
    console.error('Error importing file:', error)
  } finally {
    // Reset the file input so the same file can be selected again
    selectedFile.value = null
  }
})

function download(format: ExportFormat) {
  exportFeatureService.export(
    map,
    format,
    <FeatExport>(<unknown>drawnFeaturesMyMaps.value),
    props.myMap.title,
    true
  )
}

function importFeatures() {
  fileInputRef.value?.click()
}
</script>

<template>
  <div class="flex items-center">
    <h2
      data-cy="mymap-title"
      class="text-white font-bold grow max-w-full text-ellipsis overflow-hidden text-nowrap hover:cursor-pointer"
      role="button"
      :title="myMap.title"
      @click="emit('edit', myMap)"
    >
      {{ myMap.title }}
    </h2>
    <button
      @click="emit('close')"
      class="text-slate-400 hover:text-slate-700 text-2xl"
      :aria-label="t('Close')"
    >
      <span aria-hidden="true">×</span>
    </button>
  </div>

  <p
    data-cy="mymap-description"
    class="text-white mb-2 hover:cursor-pointer"
    role="button"
    @click="emit('edit', myMap)"
  >
    <template v-if="myMap.description">{{ myMap.description }}</template>
    <span v-else class="italic">{{ t('Aucune description') }}</span>
  </p>

  <!-- Warning message if layers list difers from MyMaps layers -->
  <div v-if="myMapLayersChanged" class="lux-alert-warning p-4 mb-2">
    <span class="font-bold">{{ t('Attention!') }}</span
    >&nbsp;<span
      v-html="
        t(
          'Les couches sélectionnées dans le catalogue sont différentes de celles chargées avec votre carte. Voulez vous sauvegarder ces modifications dans votre carte?'
        )
      "
    ></span>
    <div class="flex gap-2 mt-2 justify-end">
      <button class="lux-btn" @click="emit('resetLayers', myMap)">
        {{ t('Reset') }}
      </button>
      <button class="lux-btn" @click="emit('saveLayers', myMap)">
        {{ t('Oui') }}
      </button>
    </div>
  </div>

  <div class="flex items-center text-white mr-0.5">
    <span class="text-sm italic grow">
      <i v-if="myMap.public" class="fa fa-unlock mr-1"></i>
      <i v-else class="fa fa-lock mr-1"></i>
      {{ t('Carte créée par') }} {{ myMap.user_login }}
    </span>

    <input
      type="file"
      class="hidden"
      ref="fileInputRef"
      accept=".gpx,.kml,.kmz"
      v-on:change="(e) => selectedFile = (e.target as HTMLInputElement).files?.[0] || null"
    />

    <!-- Dropdown menu -->
    <MenuPopup
      data-cy="drawPanelMenuPopup"
      :items="menuOptions"
      :direction="'down'"
      :ariaLabel="t('My Map menu')"
    >
      <i class="fa-solid fa-square-caret-down hover:text-tertiary"></i>
      <template #item="{ item }">
        <MenuPopupItem :item="item" @click="item.action">
          {{ t(item.label) }}
        </MenuPopupItem>
      </template>
    </MenuPopup>
  </div>
</template>
