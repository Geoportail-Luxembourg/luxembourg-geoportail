<script setup lang="ts">
import { onMounted, ref, watch } from 'vue'
import { useTranslation } from 'i18next-vue'
import { storeToRefs } from 'pinia'

import * as AuthService from '@/services/auth/auth.service'
import { useAlertNotificationsStore } from '@/stores/alert-notifications.store'
import { AlertNotificationType } from '@/stores/alert-notifications.store.model'
import { useAppStore } from '@/stores/app.store'
import { useUserManagerStore } from '@/stores/user-manager.store'
import { User } from '@/stores/user-manager.store.model'

const MYACCOUNT_URL = import.meta.env.VITE_MYACCOUNT_URL
const MYACCOUNT_RECOVER_URL = import.meta.env.VITE_MYACCOUNT_RECOVER_URL
const MYACCOUNT_NEW_URL = import.meta.env.VITE_MYACCOUNT_NEW_URL

const { t } = useTranslation()
const { addNotification } = useAlertNotificationsStore()
const { lang, isApp } = storeToRefs(useAppStore())
const userManagerStore = useUserManagerStore()
const { setCurrentUser, clearUser } = userManagerStore
const { authenticated, currentUser } = storeToRefs(userManagerStore)
const autoAuthenticated = ref(false) // Will be set to true if user is authenticated via cookie on first call AuthService.getUserInfo()
const userName = ref('')
const userPassword = ref('')

watch(authenticated, authenticated => {
  if (!autoAuthenticated.value && authenticated) {
    addNotification(t('Vous êtes maintenant correctement connecté.'))
  }
})

onMounted(() => {
  AuthService.getUserInfo()
    .then(user => {
      autoAuthenticated.value = true
      onAuthenticateSuccess(user)
    })
    .catch(() => {
      // do nothing, don't display errors
    })
})

function logout() {
  AuthService.logout()
    .then(() => clearUser())
    .catch(() =>
      addNotification(
        t('Une erreur est survenue durant la déconnexion.'),
        AlertNotificationType.ERROR
      )
    )
  resetAuthForm()
}

function submit() {
  AuthService.authenticate(userName.value, userPassword.value, isApp.value)
    .then(user => {
      autoAuthenticated.value = false
      onAuthenticateSuccess(user)
    })
    .catch(onAuthenticateFailure)
  resetAuthForm()
}

function onAuthenticateSuccess(user: User) {
  setCurrentUser(user)
}

function onAuthenticateFailure() {
  addNotification(
    t('Invalid username or password.'),
    AlertNotificationType.WARNING
  )
  clearUser()
}

function resetAuthForm() {
  userName.value = ''
  userPassword.value = ''
}
</script>

<template>
  <div data-cy="authForm" class="lux-account bg-secondary">
    <h4
      class="lux-panel-title pt-5 mb-5 pl-5 h-16 shrink-0 flex justify-between"
    >
      {{ t('My account') }}
    </h4>

    <fieldset>
      <legend class="lux-account-tab"></legend>

      <div class="lux-account-content">
        <!-- When user is not authenticated -->
        <template v-if="!authenticated">
          <form @submit.prevent="submit">
            <div class="flex flex-col gap-2 mb-2">
              <div>
                <input
                  class="w-full lux-input h-11"
                  type="text"
                  name="userName"
                  v-model="userName"
                  :placeholder="t('Username')"
                  required
                />
              </div>
              <div>
                <input
                  class="w-full lux-input h-11"
                  type="password"
                  name="userPassword"
                  v-model="userPassword"
                  :placeholder="t('Password')"
                  required
                />
              </div>
            </div>

            <div class="flex mt-3 items-center">
              <div class="grow leading-5">
                <p>
                  <a
                    data-cy="authFormLostPwd"
                    class="text-secondary hover:underline hover:text-white"
                    target="_blank"
                    :href="MYACCOUNT_RECOVER_URL"
                    >{{ t('I lost my password') }}</a
                  >
                </p>
                <p>
                  <a
                    data-cy="authFormNewAccount"
                    class="text-secondary hover:underline hover:text-white"
                    target="_blank"
                    :href="MYACCOUNT_NEW_URL"
                    >{{ t('Create a new user account') }}</a
                  >
                </p>
              </div>
              <div>
                <input
                  class="lux-btn h-11 w-24 text-white placeholder:italic bg-secondary border-none uppercase hover:text-primary hover:bg-secondary"
                  type="submit"
                  :value="t('Submit')"
                />
              </div>
            </div>
          </form>
        </template>

        <!--User is authenticated -->
        <template v-else>
          <div>
            <div class="flex flex-col gap-[1px] mb-2 text-white">
              <div class="bg-secondary py-1 px-3">{{ currentUser?.login }}</div>
              <div class="bg-secondary py-1 px-3">{{ currentUser?.mail }}</div>
            </div>
            <div class="flex items-center gap-3 justify-end">
              <div>
                <a
                  class="text-secondary hover:underline hover:text-white"
                  target="_blank"
                  :href="`${MYACCOUNT_URL}?lang=${lang}`"
                  >{{ t('My account') }}</a
                >
              </div>
              <div>
                <button class="lux-btn" @click="logout">
                  {{ t('Logout') }}
                </button>
              </div>
            </div>
          </div>
        </template>
      </div>
    </fieldset>
  </div>
</template>
