import { createApp } from 'vue'
import TreeView from './vuejs/treeview.vue'

export const lux = createApp(TreeView)
// lux.component('Treeview', TreeView)
lux.mount('#app')

console.log(lux)
