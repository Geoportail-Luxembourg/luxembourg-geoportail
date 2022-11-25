<script lang="ts">
import TreeItem from './treeitem.vue'

console.log("TreeVue")

const treeData = {
  name: 'My Tree',
  children: [
    { name: 'hello' },
    { name: 'wat' },
    {
      name: 'child folder',
      children: [
        {
          name: 'child folder',
          children: [{ name: 'hello' }, { name: 'wat' }]
        },
        { name: 'hello' },
        { name: 'wat' },
        {
          name: 'child folder',
          children: [{ name: 'hello' }, { name: 'wat' }]
        }
      ]
    }
  ]
}

export default {
  components: {
    TreeItem
  },
  data() {
    return {
      treeData
    }
  }
}
</script>

<template>
  <ul>
    <TreeItem class="item" :model="treeData"></TreeItem>
  </ul>
</template>

<style>
.item {
  cursor: pointer;
  line-height: 1.5;
}
.bold {
  font-weight: bold;
}
</style>