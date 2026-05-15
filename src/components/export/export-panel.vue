<script setup lang="ts">
import { useTranslation } from 'i18next-vue'
import ExportPanelItem from './export-panel-item.vue'
import ExportPanelLidarLink from './export-panel-lidar-link.vue'
import ExportPanelObliqueLink from './export-panel-oblique-link.vue'

const { t } = useTranslation()

const printUrl = import.meta.env.VITE_3DPRINT_URL
const act2bimUrl = import.meta.env.VITE_ACT2BIM_URL
const minecraftUrl = import.meta.env.VITE_MINECRAFT_URL
</script>

<template>
  <div data-cy="exportPanel">
    <div
      class="absolute bottom-full right-0 top-auto z-20 flex flex-col text-white box-content border border-gray-400 bg-primary md:w-60 overflow-hidden shadow-lg"
    >
      <ul class="divide-y divide-gray-400/50">
        <li>
          <ExportPanelItem
            :href="printUrl"
            :label="t('3D Print', { ns: 'app' })"
            :description="t('3D Print desc', { ns: 'app' })"
          >
            <i class="fa-solid fa-cube w-5 text-lg shrink-0 text-center"></i>
          </ExportPanelItem>
        </li>
        <li>
          <ExportPanelLidarLink />
        </li>
        <li>
          <ExportPanelObliqueLink />
        </li>
        <li>
          <ExportPanelItem
            :href="act2bimUrl"
            :label="t('ACT2BIM', { ns: 'app' })"
            :description="t('ACT2BIM desc', { ns: 'app' })"
          >
            <i
              class="fa-solid fa-building w-5 text-lg shrink-0 text-center"
            ></i>
          </ExportPanelItem>
        </li>
        <li>
          <ExportPanelItem
            :href="minecraftUrl"
            :label="t('Minecraft', { ns: 'app' })"
            :description="t('Minecraft desc', { ns: 'app' })"
          >
            <i class="fa-solid fa-gamepad w-5 text-lg shrink-0 text-center"></i>
          </ExportPanelItem>
        </li>
      </ul>
    </div>
  </div>
</template>
