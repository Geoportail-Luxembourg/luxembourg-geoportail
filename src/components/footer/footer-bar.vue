<script setup lang="ts">
import { storeToRefs } from 'pinia'

import ButtonIcon from './button-icon.vue'
import ButtonLink from './button-link.vue'
import ToolbarDraw from './toolbar-draw.vue'
import { useTranslation } from 'i18next-vue'
import { useAppStore } from '@/stores/app.store'

const { t, i18next } = useTranslation()
const { setLayersOpen, setDrawToolbarOpen, toggleMyMapsOpen } = useAppStore()
const { layersOpen, drawToolbarOpen, styleEditorOpen, myMapsOpen } =
  storeToRefs(useAppStore())

function onClickLayersIcon() {
  const open = !layersOpen.value
  setLayersOpen(open)

  if (open) {
    styleEditorOpen.value = false
    myMapsOpen.value = false
  }
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
      <li>
        <button-icon
          class="text-gray-300"
          :label="t('infos', { ns: 'client' })"
          icon="infos"
        >
        </button-icon>
      </li>
      <li>
        <button-icon
          class="text-gray-300"
          :label="t('Legends', { ns: 'client' })"
          icon="legends"
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
      <toolbar-draw v-if="drawToolbarOpen" />
      <button-icon
        :label="t('Dessin', { ns: 'client' })"
        icon="draw"
        :active="drawToolbarOpen"
        @click="() => setDrawToolbarOpen(!drawToolbarOpen)"
        data-cy="drawButton"
      >
      </button-icon>
      <button-icon
        class="text-gray-300 hidden sm:block"
        :label="t('Mesurer', { ns: 'client' })"
        icon="measure"
      >
      </button-icon>
      <button-icon
        class="text-gray-300 hidden sm:block"
        :label="t('Imprimer', { ns: 'client' })"
        icon="print"
      >
      </button-icon>
      <button-icon
        class="text-gray-300"
        :label="t('Partager', { ns: 'client' })"
        icon="share"
      >
      </button-icon>
    </div>

    <!-- right buttons -->
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
