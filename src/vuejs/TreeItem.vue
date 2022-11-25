<script setup lang="ts">
  import { ref, computed } from 'vue'

  const emit = defineEmits(['inFocus', 'submit'])

  const props = defineProps({
    model: Object
  })

  const isOpen = ref(false)
  const isFolder = computed(() => {
    return props.model.children && props.model.children.length
  })

  const toggle = () => {
    if (isFolder) {
      isOpen.value = !isOpen.value
    }
  }

  const addChild = () => {
    props.model.children.push({
      name: 'new stuff'
    })
  }

  const changeType = () => {
    if (!isFolder) {
      props.model.children = []
      addChild()
      isOpen.value = true
    }
  }
</script>

<template>
  <li>
    <div
      :class="{ bold: isFolder }"
      @click="toggle"
      @dblclick="changeType">
      {{ model.name }}
      <span v-if="isFolder">[{{ isOpen ? '-' : '+' }}]</span>      
    </div>
    <button 
      class="btn inline-block bg-green-800"
      @click="$emit('clickRemove', model.id)">
      - Remove -
    </button>
    <ul v-show="isOpen" v-if="isFolder">
      <!--
        A component can recursively render itself using its
        "name" option (inferred from filename if using SFC)
      -->
      <TreeItem
        class="item"
        :model="model"
        v-for="model in model.children">
      </TreeItem>
      <li class="add" @click="addChild">+</li>
    </ul>
  </li>
</template>