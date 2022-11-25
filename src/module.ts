import { createApp } from 'vue'
import TreeView from './vuejs/treeview.vue'
import LayerManager from './vuejs/LayerManager.vue'

const treeviewApp = createApp(TreeView)
const layerManager = createApp(LayerManager)
// // lux.component('Treeview', TreeView)
// lux.mount('#app')

console.log('Module esm')

module.exports = { treeviewApp, TreeView, layerManager }
