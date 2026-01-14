<script setup lang="ts">
import { computed, nextTick, onBeforeMount, ref, shallowRef } from 'vue'
import { storeToRefs } from 'pinia'
import { useTranslation } from 'i18next-vue'

import ModalDialog from '@/components/common/modal-dialog.vue'
import DropdownList from '@/components/common/dropdown-list.vue'
import {
  Cateorgy,
  copyMyMap,
  createMyMap,
  editMyMap,
  updateMyMap,
  fetchCategories,
  MyMap,
  MyMapCreatedJson,
} from '@/services/api/api-mymaps.service'
import { useAlertNotificationsStore } from '@/stores/alert-notifications.store'
import { AlertNotificationType } from '@/stores/alert-notifications.store.model'
import { useThemeStore } from '@/stores/config.store'
import { useMapStore } from '@/stores/map.store'
import useMyMaps from '@/composables/my-maps/my-maps.composable'

import { EditFormModeType } from './my-maps.model'
import { useAppStore } from '@/stores/app.store'

const emit = defineEmits<{
  (e: 'cancel'): void
  (e: 'confirm', uuid: string): void
}>()

const props = defineProps<{
  map: MyMap | undefined
  mode: EditFormModeType
}>()

const { t } = useTranslation()
const { addNotification } = useAlertNotificationsStore()
const myMaps = useMyMaps()
const appStore = useAppStore()
const { myMapId } = storeToRefs(appStore)
const mapStore = useMapStore()
const { bgLayer } = storeToRefs(mapStore)
const themeStore = useThemeStore()
const { theme } = storeToRefs(themeStore)
const copyMode = props.map && props.mode === EditFormModeType.COPY
const mapIsPublic = ref(props.map ? props.map.public : false)
const mapTitle = ref(props.map ? props.map.title : t('Map without Title'))
const mapDescription = ref(props.map ? props.map.description : '')
const category = ref<string | undefined>(
  props.map ? props.map.category_id + '' : undefined
)
const categories = shallowRef<Cateorgy[]>([])
const categoriesOptions = computed(() =>
  categories.value.map(c => ({ label: c.name, value: '' + c.id }))
)

async function onClickSave() {
  const catId = category.value ? parseInt(category.value, 10) : 999
  let createdResponse: MyMapCreatedJson | undefined = undefined

  try {
    if (props.map && props.mode === EditFormModeType.COPY) {
      createdResponse = await copyMyMap(
        props.map.uuid,
        mapTitle.value,
        mapDescription.value,
        catId,
        mapIsPublic.value
      )
    } else if (props.map && props.mode === EditFormModeType.EDIT) {
      createdResponse = await editMyMap(
        props.map.uuid,
        mapTitle.value,
        mapDescription.value,
        catId,
        mapIsPublic.value
      )
    } else {
      createdResponse = await createMyMap(
        mapTitle.value,
        mapDescription.value,
        catId,
        mapIsPublic.value
      )

      await updateMyMap(
        createdResponse.uuid,
        bgLayer.value?.name || '',
        1,
        '',
        '',
        '',
        '',
        theme.value?.name || ''
      )

      if (
        createdResponse?.success &&
        props.mode === EditFormModeType.CREATE_FROM_FEATURES
      ) {
        myMapId.value = createdResponse.uuid // Force here, otherwise features are not added
        nextTick(() => {
          myMaps.addInMyMap()
        })
      }
    }

    if (createdResponse?.success) {
      emit('confirm', createdResponse.uuid)
    } else {
      emit('cancel')
    }
  } catch (e) {
    addNotification(<string>e, AlertNotificationType.ERROR)
  }
}

onBeforeMount(async () => {
  categories.value = await fetchCategories()
})
</script>

<template>
  <ModalDialog
    :title="
      copyMode
        ? t('Modify title and description of the map')
        : t('Title and description of the map')
    "
    @close="emit('cancel')"
  >
    <template v-slot:content>
      <form class="flex flex-col gap-4">
        <div class="flex flex-col">
          <label for="map-title-input">{{ t('Titre de la carte') }}</label>
          <input 
            id="map-title-input" 
            class="lux-input" 
            type="text" 
            v-model="mapTitle" 
            required
            :aria-required="true"
          />
        </div>

        <div>
          <input id="mapIsPublic" v-model="mapIsPublic" type="checkbox" />
          <label class="ml-2 hover:cursor-pointer" for="mapIsPublic">{{
            t('Public Map')
          }}</label>
        </div>

        <div>
          <label for="category-select" class="sr-only">{{ t('Please select a Category') }}</label>
          <DropdownList
            id="category-select"
            class="min-w-36"
            :placeholder="t('Please select a Category')"
            :options="categoriesOptions"
            v-model="category"
            @change="v => (category = v)"
            :aria-label="t('Please select a Category')"
          ></DropdownList>
        </div>

        <div class="flex flex-col">
          <label for="map-description-input">{{ t('Description') }}</label>
          <textarea
            id="map-description-input"
            class="lux-input"
            rows="3"
            v-model="mapDescription"
          ></textarea>
        </div>
      </form>
    </template>

    <template v-slot:footer>
      <div class="flex flex-row justify-end gap-2">
        <button class="lux-btn" data-dismiss="modal" @click="emit('cancel')">
          {{ t('Annuler') }}
        </button>
        <button
          class="lux-btn-primary"
          data-dismiss="modal"
          @click="onClickSave"
        >
          {{ map && !copyMode ? t('Save changes') : t('Save new map') }}
        </button>
      </div>
    </template>
  </ModalDialog>
</template>
