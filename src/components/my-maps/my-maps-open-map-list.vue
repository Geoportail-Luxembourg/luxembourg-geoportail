<script setup lang="ts">
import { useTranslation } from 'i18next-vue'
import { computed, onMounted, ref, useTemplateRef } from 'vue'
import { storeToRefs } from 'pinia'

import ModalDialog from '@/components/common/modal-dialog.vue'
import DropdownList from '@/components/common/dropdown-list.vue'
import { MyMap, MyMapJson } from '@/services/api/api-mymaps.service'
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
  props.maps
    .filter(filterMap)
    .sort((a, b) =>
      sortMap(a, b, sortType.value as unknown as keyof MyMapJson, sortAsc.value)
    )
)
const fWrapperRef = useTemplateRef('filtersWrapperDOM')
const rWrapperRef = useTemplateRef('resultsWrapperDOM')

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
  console.log('TODO', map)
}

function filterMap(map: MyMapJson) {
  const searchOnName = mapNameSearch.value
    ? map.title.includes(mapNameSearch.value)
    : true
  const searchOnCat = categorySearch.value
    ? map.category === categorySearch.value
    : true
  const searchOnOwner = ownerSearch.value
    ? map.owner === ownerSearch.value
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
          <input
            :placeholder="t('Search Maps')"
            class="lux-input"
            type="text"
            v-model="mapNameSearch"
          />
        </div>
        <DropdownList
          class="inline-block min-w-36 w-60"
          :options="categoriesOptions"
          v-model="categorySearch"
          @change="v => (categorySearch = v)"
        ></DropdownList>
        <DropdownList
          class="inline-block min-w-36 w-60"
          :options="ownersOptions"
          v-model="ownerSearch"
          @change="v => (ownerSearch = v)"
        ></DropdownList>
      </div>

      <div
        class="separator border-b-[1px] bg-white mx-2"
        aria-hidden="true"
      ></div>

      <div ref="resultsWrapperDOM" class="px-2 h-96 overflow-y-auto">
        <table class="w-full">
          <thead>
            <tr>
              <td class="py-2 text-left w-40">
                <button
                  class="text-left text-primary w-full text-nowrap"
                  @click="
                    () => {
                      sortType = 'title'
                      sortAsc = !sortAsc
                    }
                  "
                >
                  {{ t('Titre') }}
                  <span class="w-5 inline-block">
                    <template v-if="sortType === 'title' && !sortAsc"
                      >&#9660;</template
                    >
                    <template v-if="sortType === 'title' && sortAsc"
                      >&#9650;</template
                    >
                  </span>
                </button>
              </td>
              <td class="text-left">
                <button
                  class="text-left text-primary text-nowrap w-full"
                  @click="
                    () => {
                      sortType = 'category'
                      sortAsc = !sortAsc
                    }
                  "
                >
                  {{ t('Catégorie') }}
                  <span class="w-5 inline-block">
                    <template v-if="sortType === 'category' && !sortAsc"
                      >&#9660;</template
                    >
                    <template v-if="sortType === 'category' && sortAsc"
                      >&#9650;</template
                    >
                  </span>
                </button>
              </td>
              <td class="text-left">
                <button
                  class="text-left text-primary text-nowrap w-full"
                  @click="
                    () => {
                      sortType = 'owner'
                      sortAsc = !sortAsc
                    }
                  "
                >
                  {{ t('Créateur carte') }}
                  <span
                    class="w-5 inline-block"
                    @click="
                      () => {
                        sortType = 'owner'
                        sortAsc != sortAsc
                      }
                    "
                  >
                    <template v-if="sortType === 'owner' && !sortAsc"
                      >&#9660;</template
                    >
                    <template v-if="sortType === 'owner' && sortAsc"
                      >&#9650;</template
                    >
                  </span>
                </button>
              </td>
              <td class="text-left">
                <button
                  class="text-left text-primary text-nowrap w-full"
                  @click="
                    () => {
                      sortType = 'last_feature_update'
                      sortAsc = !sortAsc
                    }
                  "
                >
                  {{ t('Dernière Actualisation') }}
                  <span
                    class="w-5 inline-block"
                    @click="
                      () => {
                        sortType = 'last_feature_update'
                        sortAsc != sortAsc
                      }
                    "
                  >
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
              </td>
              <td></td>
            </tr>
          </thead>

          <tbody>
            <tr class="border-t-[1px]" v-for="map in filteredMaps">
              <td
                class="py-2 cursor-pointer text-left w-44"
                @click="() => emit('select', map.uuid)"
              >
                <span class="line-clamp-2 overflow-hidden" :title="map.title">
                  <i
                    class="mr-2 fa"
                    :class="{ 'fa-lock': map.public, 'fa-unlock': !map.public }"
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
                >
                  <i class="fa fa-trash"></i>
                </button>
              </td>
              <td>
                <button
                  v-if="isOffLine && map.dirty"
                  @click="onClickSyncOfflineMaps(map)"
                >
                  <i class="fa fa-refresh"></i>
                </button>
              </td>
            </tr>
            <tr v-if="!filteredMaps.length">
              <td colspan="6" class="pt-2 border-t-[1px] italic">
                {{ t('No result') }}
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
