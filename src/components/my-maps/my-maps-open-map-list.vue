<script setup lang="ts">
import { useTranslation } from 'i18next-vue'
import { computed, onMounted, ref, useTemplateRef } from 'vue'
import { storeToRefs } from 'pinia'

import ModalDialog from '@/components/common/modal-dialog.vue'
import DropdownList from '@/components/common/dropdown-list.vue'
import { MyMapJson } from '@/services/api/api-mymaps.service'
import { MyMap } from '@/stores/app.store.model'
import { formatDate } from '@/services/common/formatting.utils'
import { useAppStore } from '@/stores/app.store'

type SortType = 'title' | 'category' | 'owner' | 'last_feature_update'

const emit = defineEmits<{
  (e: 'cancel'): void
  (e: 'select', uuid: string): void
  (e: 'delete', map: MyMap): void
}>()

const props = defineProps<{
  maps: MyMapJson[]
  isLoadingMyMaps: boolean
}>()

const { t } = useTranslation()
const { isOffLine } = storeToRefs(useAppStore())
const mapNameSearch = ref<string>('')
const categorySearch = ref<string>('')
const categoriesOptions = computed(() =>
  [
    {
      label: t('Filter results by category'),
      value: '',
    },
  ].concat(
    [...new Set(props.maps.map(m => m.category))].map(c => ({
      label: c,
      value: c,
    }))
  )
)
const ownerSearch = ref<string>('')
const ownersOptions = computed(() =>
  [
    {
      label: t('Filter results by username'),
      value: '',
    },
  ].concat(
    [...new Set(props.maps.map(m => m.owner))].map(o => ({
      label: o,
      value: o,
    }))
  )
)
const sortType = ref<SortType | undefined>(undefined)
const sortAsc = ref(true)
const filteredMaps = computed(() =>
  props.isLoadingMyMaps
    ? []
    : props.maps
        .filter(filterMap)
        .sort((a, b) =>
          sortMap(
            a,
            b,
            sortType.value as unknown as keyof MyMapJson,
            sortAsc.value
          )
        )
)
const fWrapperRef = useTemplateRef<HTMLElement>('filtersWrapperDOM')
const rWrapperRef = useTemplateRef<HTMLElement>('resultsWrapperDOM')

onMounted(() => {
  // Dropdown filters with position absolute, add the margins manually here
  // FIXME: would be great to have intelligent dropdown positioning in DropdownList component
  const height = fWrapperRef.value?.offsetHeight

  if (height && rWrapperRef.value) {
    rWrapperRef.value.style.marginTop = height + 32 + 'px' // 32px => margin bottom
  }

  if (fWrapperRef.value && rWrapperRef.value) {
    fWrapperRef.value.style.width = rWrapperRef.value.offsetWidth + 'px'
    fWrapperRef.value.style.maxWidth = rWrapperRef.value.offsetWidth + 'px'
  }
})

function onClickSyncOfflineMaps(map: MyMapJson) {
  // eslint-disable-next-line no-console
  console.log('TODO', map)
}

function filterMap(map: MyMapJson) {
  const searchOnName = mapNameSearch.value
    ? map.title.toLowerCase().includes(mapNameSearch.value.toLowerCase())
    : true
  const searchOnCat = categorySearch.value
    ? map.category.toLowerCase() === categorySearch.value.toLowerCase()
    : true
  const searchOnOwner = ownerSearch.value
    ? map.owner.toLowerCase() === ownerSearch.value.toLowerCase()
    : true
  return searchOnName && searchOnCat && searchOnOwner
}

function sortMap(
  mapA: MyMapJson,
  mapB: MyMapJson,
  critera: keyof MyMapJson,
  direction: boolean
) {
  const a = (direction ? mapA[critera] : mapB[critera]) || '' // NB. '' => in case date null
  const b = (direction ? mapB[critera] : mapA[critera]) || ''

  if (a < b) {
    return -1
  } else if (a > b) {
    return 1
  }
  return 0
}
</script>

<template>
  <ModalDialog :title="t('Ouvrir une carte')" @close="emit('cancel')">
    <template v-slot:content>
      <div
        ref="filtersWrapperDOM"
        class="mt-2 mb-8 mx-2 flex flex-row gap-2 fixed"
      >
        <div>
          <label for="map-search-input" class="sr-only">{{
            t('Search Maps')
          }}</label>
          <input
            id="map-search-input"
            :placeholder="t('Search Maps')"
            class="lux-input"
            type="text"
            v-model="mapNameSearch"
            :aria-label="t('Search Maps')"
          />
        </div>
        <div>
          <label for="category-filter" class="sr-only">{{
            t('Filter results by category')
          }}</label>
          <DropdownList
            id="category-filter"
            class="inline-block min-w-36 w-60"
            :options="categoriesOptions"
            v-model="categorySearch"
            @change="v => (categorySearch = v)"
            :aria-label="t('Filter results by category')"
          ></DropdownList>
        </div>
        <div>
          <label for="owner-filter" class="sr-only">{{
            t('Filter results by username')
          }}</label>
          <DropdownList
            id="owner-filter"
            class="inline-block min-w-36 w-60"
            :options="ownersOptions"
            v-model="ownerSearch"
            @change="v => (ownerSearch = v)"
            :aria-label="t('Filter results by username')"
          ></DropdownList>
        </div>
      </div>

      <div
        class="separator border-b-[1px] bg-white mx-2"
        aria-hidden="true"
      ></div>

      <div ref="resultsWrapperDOM" class="px-2 h-96 overflow-y-auto">
        <table class="w-full" role="table" :aria-label="t('Liste des cartes')">
          <thead>
            <tr>
              <th scope="col" class="py-2 text-left w-40">
                <button
                  class="text-left text-primary w-full text-nowrap"
                  :aria-label="
                    t('Trier par titre') +
                    (sortType === 'title'
                      ? sortAsc
                        ? ' (croissant)'
                        : ' (décroissant)'
                      : '')
                  "
                  @click="
                    () => {
                      sortType = 'title'
                      sortAsc = !sortAsc
                    }
                  "
                >
                  {{ t('Titre') }}
                  <span class="w-5 inline-block" aria-hidden="true">
                    <template v-if="sortType === 'title' && !sortAsc"
                      >&#9660;</template
                    >
                    <template v-if="sortType === 'title' && sortAsc"
                      >&#9650;</template
                    >
                  </span>
                </button>
              </th>
              <th scope="col" class="text-left">
                <button
                  class="text-left text-primary text-nowrap w-full"
                  :aria-label="
                    t('Trier par catégorie') +
                    (sortType === 'category'
                      ? sortAsc
                        ? ' (croissant)'
                        : ' (décroissant)'
                      : '')
                  "
                  @click="
                    () => {
                      sortType = 'category'
                      sortAsc = !sortAsc
                    }
                  "
                >
                  {{ t('Catégorie') }}
                  <span class="w-5 inline-block" aria-hidden="true">
                    <template v-if="sortType === 'category' && !sortAsc"
                      >&#9660;</template
                    >
                    <template v-if="sortType === 'category' && sortAsc"
                      >&#9650;</template
                    >
                  </span>
                </button>
              </th>
              <th scope="col" class="text-left">
                <button
                  class="text-left text-primary text-nowrap w-full"
                  :aria-label="
                    t('Trier par créateur') +
                    (sortType === 'owner'
                      ? sortAsc
                        ? ' (croissant)'
                        : ' (décroissant)'
                      : '')
                  "
                  @click="
                    () => {
                      sortType = 'owner'
                      sortAsc = !sortAsc
                    }
                  "
                >
                  {{ t('Créateur carte') }}
                  <span class="w-5 inline-block" aria-hidden="true">
                    <template v-if="sortType === 'owner' && !sortAsc"
                      >&#9660;</template
                    >
                    <template v-if="sortType === 'owner' && sortAsc"
                      >&#9650;</template
                    >
                  </span>
                </button>
              </th>
              <th scope="col" class="text-left">
                <button
                  class="text-left text-primary text-nowrap w-full"
                  :aria-label="
                    t('Trier par date de mise à jour') +
                    (sortType === 'last_feature_update'
                      ? sortAsc
                        ? ' (croissant)'
                        : ' (décroissant)'
                      : '')
                  "
                  @click="
                    () => {
                      sortType = 'last_feature_update'
                      sortAsc = !sortAsc
                    }
                  "
                >
                  {{ t('Dernière Actualisation') }}
                  <span class="w-5 inline-block" aria-hidden="true">
                    <template
                      v-if="sortType === 'last_feature_update' && !sortAsc"
                      >&#9660;</template
                    >
                    <template
                      v-if="sortType === 'last_feature_update' && sortAsc"
                      >&#9650;</template
                    >
                  </span>
                </button>
              </th>
              <th scope="col">
                <span class="sr-only">{{ t('Actions') }}</span>
              </th>
            </tr>
          </thead>

          <tbody>
            <tr
              class="border-t-[1px]"
              v-for="map in filteredMaps"
              :key="map.uuid"
            >
              <td
                class="py-2 cursor-pointer text-left w-44"
                @click="() => emit('select', map.uuid)"
                role="button"
                :aria-label="t('Ouvrir la carte') + ' ' + map.title"
                tabindex="0"
                @keydown.enter="() => emit('select', map.uuid)"
                @keydown.space.prevent="() => emit('select', map.uuid)"
              >
                <span class="line-clamp-2 overflow-hidden" :title="map.title">
                  <i
                    class="mr-2 fa"
                    :class="{ 'fa-lock': !map.public, 'fa-unlock': map.public }"
                    :aria-label="
                      map.public ? t('Carte publique') : t('Carte privée')
                    "
                  ></i>
                  {{ map.title }}</span
                >
              </td>
              <td
                class="cursor-pointer text-left"
                @click="() => emit('select', map.uuid)"
              >
                {{ map.category }}
              </td>
              <td
                class="cursor-pointer text-left"
                @click="() => emit('select', map.uuid)"
              >
                {{ map.owner }}
              </td>
              <td
                class="cursor-pointer text-left"
                @click="() => emit('select', map.uuid)"
              >
                {{ formatDate(map.last_feature_update) }}
              </td>
              <td>
                <button
                  v-if="!map.deletedWhileOffline"
                  @click="emit('delete', map as unknown as MyMap)"
                  :aria-label="t('Supprimer la carte') + ' ' + map.title"
                  class="hover:text-red-500"
                >
                  <i class="fa fa-trash" aria-hidden="true"></i>
                </button>
              </td>
              <td>
                <button
                  v-if="isOffLine && map.dirty"
                  @click="onClickSyncOfflineMaps(map)"
                  :aria-label="t('Synchroniser la carte') + ' ' + map.title"
                  class="hover:text-blue-500"
                >
                  <i class="fa fa-refresh" aria-hidden="true"></i>
                </button>
              </td>
            </tr>
            <tr v-if="!filteredMaps.length && !isLoadingMyMaps">
              <td colspan="6" class="pt-2 border-t-[1px] italic" role="status">
                {{ t('No result', { ns: 'client' }) }}
              </td>
            </tr>
            <tr v-if="isLoadingMyMaps">
              <td
                colspan="6"
                class="pt-2 border-t-[1px] italic"
                role="status"
                aria-live="polite"
                aria-busy="true"
              >
                {{ t('Chargement des cartes en cours', { ns: 'client' }) }}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </template>

    <template v-slot:footer>
      <div class="flex flex-row justify-end gap-2">
        <button class="lux-btn" data-dismiss="modal" @click="emit('cancel')">
          {{ t('Annuler') }}
        </button>
      </div>
    </template>
  </ModalDialog>
</template>
