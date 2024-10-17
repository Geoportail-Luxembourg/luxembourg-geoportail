import { computed, Ref, ref } from 'vue'
import { acceptHMRUpdate, defineStore, storeToRefs } from 'pinia'

import { useAppStore } from '@/stores/app.store'
import { User } from './user-manager.store.model'

export const useUserManagerStore = defineStore(
  'user-manager',
  () => {
    const appStore = useAppStore()
    const { isOffLine } = storeToRefs(appStore)
    const currentUser: Ref<User | undefined> = ref(undefined)
    const authenticated = computed(() => isOffLine.value || !!currentUser.value) // Mimic v3 when broadcasting "authenticated"

    /**
     * True if user is authenticated or if app is offline mode, false otherwise.
     */
    function isAuthenticated() {
      return authenticated.value
    }

    function setCurrentUser(user: User) {
      if (user.login) {
        currentUser.value = user
      } else {
        clearUser()
        throw new Error('Invalid username or password')
      }
    }

    function clearUser() {
      currentUser.value = undefined
    }

    return {
      authenticated,
      currentUser,
      clearUser,
      isAuthenticated,
      setCurrentUser,
    }
  },
  {}
)

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useUserManagerStore, import.meta.hot))
}
