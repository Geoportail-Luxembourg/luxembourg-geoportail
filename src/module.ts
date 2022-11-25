import { createApp } from 'vue'
import TreeView from './vuejs/treeview.vue'

const treeviewApp = createApp(TreeView)
// // lux.component('Treeview', TreeView)
// lux.mount('#app')

console.log('Module esm')

module.exports = { treeviewApp, TreeView }
