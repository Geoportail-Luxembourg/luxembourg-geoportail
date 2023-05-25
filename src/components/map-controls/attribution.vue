<script setup lang="ts">
import Attribution from 'ol/control/Attribution'
import useControl from "@/composables/control/control.composable"

const props = withDefaults(defineProps<{
    className?: string
    collapsed?: boolean
    collapsible?: boolean
}>(), {
    className: 'geoportailv3-attribution',
    collapsed: false,
    collapsible: false
})

useControl(Attribution, props)
</script>

<template></template>