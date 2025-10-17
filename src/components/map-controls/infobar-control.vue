<script setup lang="ts">
import { CLASS_CONTROL, CLASS_UNSELECTABLE } from 'ol/css'
import { useTranslation } from 'i18next-vue'
import { ref } from 'vue'
import InfobarContent from './infobar/infobar-content.vue'

const isInfobarOpened = ref(false)
const { t } = useTranslation()
const props = withDefaults(
  defineProps<{
    className?: string
    label?: string
    tipLabel?: string
  }>(),
  {
    className: 'infobar-button',
    label: '\ue600',
    tipLabel: 'Infobar',
  }
)
function handleInfobar() {
  isInfobarOpened.value = !isInfobarOpened.value
}
</script>

<template>
  <div :class="[props.className, CLASS_CONTROL]" class="infobar-wrapper">
    <div class="infobar-container" v-if="isInfobarOpened">
      <InfobarContent />
    </div>
    <div
      ref="controlElement"
      :class="[
        { 'infobar-on': isInfobarOpened, 'infobar-off': !isInfobarOpened },
        CLASS_UNSELECTABLE,
      ]"
    >
      <button :title="t(props.tipLabel)" @click="handleInfobar">
        {{ props.label }}
      </button>
    </div>
  </div>
</template>

<style scoped>
.infobar-wrapper {
  display: flex;
  align-items: center;
}

.infobar-container {
  position: absolute;
  right: 42px; /* Position to the left of the button (40px button + 2px spacing) */
}

.infobar-on button {
  background-color: var(--color-primary) !important;
  color: white !important;
}

.infobar-wrapper button {
  font-family: 'geoportail-icons-wc';
  width: 40px;
  height: 40px;
  text-align: center;
  font-size: 1.25rem;
  background-color: white;
  border: 1px solid var(--color-border-default);
  cursor: pointer;
}

.infobar-wrapper button:hover {
  background-color: var(--color-primary);
  color: white;
}
</style>
