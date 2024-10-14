<script setup lang="ts"></script>

<template>
  <slot name="color"></slot>
  <slot name="size" :maxsize="40"></slot>
  <slot name="angle"></slot>
</template>
