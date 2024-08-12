<script setup lang="ts">
const emit = defineEmits(['closePopup'])
</script>

<template>
  <Teleport to="body">
    <div class="popup">
      <button
        class="fa-sharp fa-solid fa-close float-right mt-2 hover:text-primary"
        @click="() => emit('closePopup')"
      ></button>
      <slot></slot>
    </div>
  </Teleport>
</template>

<style>
.popup {
  @apply absolute bg-white px-2 rounded-lg;
  filter: drop-shadow(0 1px 4px rgba(0, 0, 0, 0.2));
  top: 50%;
  left: 50%;
  min-width: 340px;
}
.popup:after,
.popup:before {
  top: 100%;
  border: solid transparent;
  content: ' ';
  height: 0;
  width: 0;
  position: absolute;
  pointer-events: none;
}
.popup:after {
  border-top-color: white;
  border-width: 10px;
  left: 48px;
  margin-left: -10px;
}
.popup:before {
  border-top-color: #cccccc;
  border-width: 11px;
  left: 48px;
  margin-left: -11px;
}
</style>
