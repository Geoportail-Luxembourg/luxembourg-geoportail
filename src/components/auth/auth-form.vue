<script setup lang="ts">
import { ref } from 'vue'
import { useTranslation } from 'i18next-vue'
import { storeToRefs } from 'pinia'

import { useAppStore } from '@/stores/app.store'

const MYACCOUNT_URL = import.meta.env.VITE_MYACCOUNT_URL
const MYACCOUNT_RECOVER_URL = import.meta.env.VITE_MYACCOUNT_RECOVER_URL
const MYACCOUNT_NEW_URL = import.meta.env.VITE_MYACCOUNT_NEW_URL

const { t } = useTranslation()
const { lang } = storeToRefs(useAppStore())
const isAuthenticated = ref(false)
const email = ref('')
const userName = ref('')

function logout() {
  alert('TODO: logout')
  isAuthenticated.value = false

  email.value = '' // TODO: remove when api ok
  userName.value = '' // TODO: remove when api ok
}

function submit() {
  alert('TODO: submit form')
  isAuthenticated.value = true

  email.value = 'random email (todo)' // TODO: remove when api ok
  userName.value = 'random user name (todo)' // TODO: remove when api ok
}
</script>

<template>
  <div data-cy="authForm" class="lux-account bg-secondary">
    <h4 class="lux-panel-title pt-5 pl-5 h-16 shrink-0 flex justify-between">
      {{ t('My account') }}
    </h4>

    <fieldset>
      <legend class="lux-account-tab"></legend>

      <div class="lux-account-content">
        <!-- When user is not authenticated -->
        <template v-if="!isAuthenticated">
          <form @submit.prevent="submit">
            <div class="flex flex-col gap-1 mb-2">
              <div>
                <input
                  class="w-full lux-input"
                  type="text"
                  name="userName"
                  v-model="userName"
                  :placeholder="t('Username')"
                />
              </div>
              <div>
                <input
                  class="w-full lux-input"
                  type="password"
                  name="userPassword"
                  :placeholder="t('Password')"
                />
              </div>
            </div>

            <div class="flex mt-3 items-center">
              <div class="grow">
                <p>
                  <a
                    data-cy="authFormLostPwd"
                    class="text-secondary hover:underline"
                    target="_blank"
                    :href="MYACCOUNT_RECOVER_URL"
                    >{{ t('I lost my password') }}</a
                  >
                </p>
                <p>
                  <a
                    data-cy="authFormNewAccount"
                    class="text-secondary hover:underline"
                    target="_blank"
                    :href="MYACCOUNT_NEW_URL"
                    >{{ t('Create a new user account') }}</a
                  >
                </p>
              </div>
              <div>
                <input class="lux-btn" type="submit" :value="t('Submit')" />
              </div>
            </div>
          </form>
        </template>

        <!--User is authenticated -->
        <template v-else>
          <div>
            <div class="flex flex-col gap-1 mb-2 text-white">
              <div class="bg-secondary p-1">{{ userName }}</div>
              <div class="bg-secondary p-1">{{ email }}</div>
            </div>
            <div class="flex items-center gap-3 justify-end">
              <div>
                <a
                  class="text-secondary hover:underline"
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
