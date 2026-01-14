<script setup lang="ts">
import {
  onMounted,
  onUnmounted,
  shallowRef,
  ShallowRef,
  Ref,
  ref,
  watch,
} from 'vue'

import { type MenuPopupItem } from './menu-popup.d'

const props = defineProps<{
  items: MenuPopupItem[]
  direction?: 'up' | 'down'
  ariaLabel?: string
  ariaLabelledby?: string
}>()
const isOpen: ShallowRef<boolean> = shallowRef(false)
const btnElement: Ref<HTMLElement | null> = ref(null)
const ddElement: Ref<HTMLElement | null> = ref(null)
const focusedIndex: Ref<number> = ref(-1)

function handleClick(event: MouseEvent) {
  event.stopPropagation()
  toggleDropdown()
}

function toggleDropdown(forceOpen?: boolean) {
  const wasOpen = isOpen.value
  isOpen.value = forceOpen ?? !isOpen.value
  
  if (!wasOpen && isOpen.value) {
    // Menu ouvert, focus sur le premier item
    focusedIndex.value = 0
    // Augmenter le délai pour s'assurer que le DOM est mis à jour
    setTimeout(() => {
      focusMenuItem(0)
      // Donner le focus au menu ul pour capturer les événements clavier
      ddElement.value?.focus()
    }, 100)
  } else if (wasOpen && !isOpen.value) {
    // Menu fermé, retour focus sur le bouton
    focusedIndex.value = -1
    btnElement.value?.focus()
  }
}

function onClickOutsideOpenBtn() {
  toggleDropdown(false)
}

function handleKeyDown(event: KeyboardEvent) {
  if (!isOpen.value) {
    // Menu fermé, ouvrir avec Enter/Space/ArrowDown
    if (['Enter', ' ', 'ArrowDown'].includes(event.key)) {
      event.preventDefault()
      event.stopPropagation()
      toggleDropdown(true)
    }
    return
  }

  // Menu ouvert, navigation - empêcher propagation pour ne pas déplacer la carte
  switch (event.key) {
    case 'Escape':
      event.preventDefault()
      event.stopPropagation()
      toggleDropdown(false)
      break
    case 'ArrowDown':
      event.preventDefault()
      event.stopPropagation()
      focusNextItem()
      break
    case 'ArrowUp':
      event.preventDefault()
      event.stopPropagation()
      focusPreviousItem()
      break
    case 'ArrowLeft':
    case 'ArrowRight':
      // Empêcher le déplacement de la carte, mais ne rien faire
      event.preventDefault()
      event.stopPropagation()
      break
    case 'Home':
      event.preventDefault()
      event.stopPropagation()
      focusMenuItem(0)
      break
    case 'End':
      event.preventDefault()
      event.stopPropagation()
      focusMenuItem(props.items.length - 1)
      break
    case 'Tab':
      // Tab ferme le menu (on laisse le comportement par défaut du Tab)
      event.stopPropagation()
      toggleDropdown(false)
      break
    default:
      // Pour toutes les autres touches, empêcher la propagation quand le menu est ouvert
      event.stopPropagation()
      break
  }
}

function focusNextItem() {
  const nextIndex = (focusedIndex.value + 1) % props.items.length
  focusMenuItem(nextIndex)
}

function focusPreviousItem() {
  const prevIndex = focusedIndex.value <= 0 ? props.items.length - 1 : focusedIndex.value - 1
  focusMenuItem(prevIndex)
}

function focusMenuItem(index: number) {
  focusedIndex.value = index
  
  if (!ddElement.value) {
    return
  }
  
  const menuItems = ddElement.value.querySelectorAll('[role="menuitem"]')
  
  if (!menuItems || menuItems.length === 0) {
    return
  }
  
  if (menuItems[index]) {
    try {
      (menuItems[index] as HTMLElement).focus()
    } catch (error) {
      console.error('[MenuPopup] Error focusing item:', error)
    }
  }
}

function handleGlobalKeyDown(event: KeyboardEvent) {
  if (!isOpen.value) return
  
  try {
    handleKeyDown(event)
  } catch (error) {
    console.error('[MenuPopup] Error in handleGlobalKeyDown:', error)
  }
}

onMounted(() => {
  document.addEventListener('click', onClickOutsideOpenBtn)
  // Utiliser la phase de capture pour intercepter les événements AVANT la carte
  document.addEventListener('keydown', handleGlobalKeyDown, true)
})
onUnmounted(() => {
  document.removeEventListener('click', onClickOutsideOpenBtn)
  document.removeEventListener('keydown', handleGlobalKeyDown, true)
})

watch(isOpen, isOpen => {
  if (!isOpen) return

  const opener = btnElement.value!
  const dropdown = ddElement.value!
  const rect = opener.getBoundingClientRect()
  const top =
    props.direction === 'down' ? rect.bottom : rect.top - dropdown.offsetHeight

  dropdown.style.top = `${top}px`
  dropdown.style.left = `${rect.left + rect.width - dropdown.offsetWidth}px`
})
</script>

<template>
  <div class="lux-menu-popup">
    <button 
      @click="handleClick" 
      @keydown="handleKeyDown"
      ref="btnElement"
      :aria-expanded="isOpen"
      :aria-haspopup="true"
      :aria-label="ariaLabel"
    >
      <slot></slot>
    </button>

    <Teleport to="body">
      <ul
        :aria-label="ariaLabel"
        :aria-labelledby="ariaLabelledby"
        class="lux-menu-popup-list"
        :class="isOpen ? '' : 'invisible'"
        ref="ddElement"
        role="menu"
        tabindex="-1"
      >
        <li
          v-for="(item, index) in props.items"
          :key="item.label"
          :class="item.separator ? 'border-b-[1px] pb-2 mb-2' : ''"
          role="none"
        >
          <slot 
            v-if="item.label" 
            :name="`item`" 
            :item="item"
            :index="index"
            :isFocused="focusedIndex === index"
          >
            {{ item.label }} {{ item.separator }}
          </slot>
        </li>
      </ul>
    </Teleport>
  </div>
</template>
