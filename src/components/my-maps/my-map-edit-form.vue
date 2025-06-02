<script setup lang="ts">
import { ref } from 'vue'
import { useTranslation } from 'i18next-vue'

const props = withDefaults(
  defineProps<{
    modalOpened?: boolean
  }>(),
  {
    modalOpened: false,
  }
)

const { t } = useTranslation()
const modalOpened = ref(props.modalOpened)
</script>

<template>
  <ModalDialog
    v-if="true"
    :title="t('Title and description of the map')"
    @close="modalOpened = false"
  >
    <template v-slot:content>
      <form>
        <div>
          <label>Titre de la carte</label>
          <input type="text" class="form-control" />
        </div>
        <div>
          <label>
            <input type="checkbox" />
            <span>Public Map</span>
          </label>
        </div>
        <div class="dropdown">
          <button type="button" class="btn btn-default" data-toggle="dropdown">
            Maps TODO<span class="caret"></span>
          </button>
        </div>
        <div class="form-group">
          <label>Description</label>
          <textarea
            class="form-control"
            rows="3"
            ng-model="ctrl.newDescription"
          ></textarea>
        </div>
      </form>
    </template>
  </ModalDialog>
</template>
