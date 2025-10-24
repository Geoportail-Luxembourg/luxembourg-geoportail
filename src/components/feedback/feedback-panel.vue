<script setup lang="ts">
import { ref, computed, watch, nextTick } from 'vue'
import { useTranslation } from 'i18next-vue'
import { storeToRefs } from 'pinia'

import SidePanelLayout from '@/components/common/side-panel-layout.vue'
import { useAppStore } from '@/stores/app.store'
import { useMapStore } from '@/stores/map.store'
import { useUserManagerStore } from '@/stores/user-manager.store'
import { useAlertNotificationsStore } from '@/stores/alert-notifications.store'
import { AlertNotificationType } from '@/stores/alert-notifications.store.model'
import { urlStorage } from '@/services/state-persistor/storage/url-storage'
import { fetchApi } from '@/services/api/api.service'

const FEEDBACK_URL =
  (import.meta.env.VITE_FEEDBACK_URL as string) || '/feedback'

const { t } = useTranslation()
const appStore = useAppStore()
const mapStore = useMapStore()
const userManagerStore = useUserManagerStore()
const { addNotification } = useAlertNotificationsStore()
const { feedbackOpen, drawToolbarOpen } = storeToRefs(appStore)
const { layers, bgLayer } = storeToRefs(mapStore)
const { authenticated, currentUser } = storeToRefs(userManagerStore)

const email = ref('')
const description = ref('')
const concernedLayer = ref('')
const url = ref('')
const isSubmitting = ref(false)

// Initialize email if authenticated and manage focus
watch(
  feedbackOpen,
  isOpen => {
    if (isOpen) {
      // Reset form
      if (authenticated.value && currentUser.value?.mail) {
        email.value = currentUser.value.mail
      } else {
        email.value = ''
      }
      concernedLayer.value = ''
      description.value = ''
      updateUrl()

      // Set focus to first input for accessibility
      nextTick(() => {
        const firstInput = document.getElementById('inputEmail')
        firstInput?.focus()
      })
    }
  },
  { immediate: true }
)

function updateUrl() {
  url.value = urlStorage.getStrippedUrl().toString()
}

function activateDrawingTools() {
  drawToolbarOpen.value = true
}

async function sendReport() {
  if (!email.value || !description.value || !concernedLayer.value) {
    addNotification(
      t('Please fill all required fields', { ns: 'client' }),
      AlertNotificationType.WARNING
    )
    return
  }

  isSubmitting.value = true

  const payload = {
    url: url.value,
    email: email.value,
    description: description.value,
    layer: concernedLayer.value,
  }

  try {
    const response = await fetchApi(
      FEEDBACK_URL,
      payload,
      'POST',
      'application/json'
    )

    if (response.ok) {
      const supportEmail = 'support@geoportail.lu'
      addNotification(
        t('Feedback sent to <a href="mailto:{{email}}">{{email}}</a>', {
          email: supportEmail,
          ns: 'client',
        }),
        AlertNotificationType.INFO
      )
      appStore.toggleFeedbackOpen(false)
    } else {
      throw new Error('Failed to send feedback')
    }
  } catch (error) {
    const supportEmail = 'support@geoportail.lu'
    addNotification(
      t(
        'Feedback could not be sent to <a href="mailto:{{email}}">{{email}}</a>',
        {
          email: supportEmail,
          ns: 'client',
        }
      ),
      AlertNotificationType.ERROR
    )
  } finally {
    isSubmitting.value = false
  }
}

const availableLayers = computed(() => {
  const layersList: Array<{ id: string; name: string }> = []
  if (bgLayer.value) {
    layersList.push({
      id: String(bgLayer.value.id),
      name: String(bgLayer.value.name),
    })
  }
  layers.value.forEach(layer => {
    layersList.push({
      id: String(layer.id),
      name: String(layer.name),
    })
  })
  return layersList
})
</script>

<template>
  <side-panel-layout
    :data-cy-value="'feedbackPanel'"
    :close-fn="() => appStore.toggleFeedbackOpen(false)"
  >
    <template v-slot:header>
      <h1>
        {{ t('Feedback', { ns: 'client' }) }}
      </h1>
    </template>

    <template v-slot:content>
      <div class="feedback-content text-white">
        <h3 class="text-lg font-bold mb-4">
          {{ t('Report a map content problem:', { ns: 'client' }) }}
        </h3>
        <form @submit.prevent="sendReport" class="flex flex-col gap-4">
          <div class="form-group">
            <label for="inputEmail" class="block mb-2 font-medium">
              {{ t('Your email', { ns: 'client' }) }}
            </label>
            <input
              type="email"
              required
              v-model="email"
              class="w-full px-3 py-2 lux-input"
              id="inputEmail"
              :aria-label="t('Your email', { ns: 'client' })"
              data-cy="feedbackEmail"
            />
          </div>

          <div class="form-group">
            <label for="dropdownLayerPicker" class="block mb-2 font-medium">
              {{ t('Pick layer where problem occurs', { ns: 'client' }) }}
            </label>
            <div class="relative">
              <select
                id="dropdownLayerPicker"
                v-model="concernedLayer"
                required
                class="w-full px-3 py-2 lux-input appearance-none cursor-pointer"
                :aria-label="
                  t('Pick layer where problem occurs', { ns: 'client' })
                "
                data-cy="feedbackLayerSelect"
              >
                <option value="" disabled>
                  {{ t('Please pick a layer', { ns: 'client' }) }}
                </option>
                <option
                  v-for="layer in availableLayers"
                  :key="layer.id"
                  :value="layer.name"
                >
                  {{ t(layer.name, { ns: 'client' }) }}
                </option>
              </select>
              <span
                class="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none fa fa-caret-down text-primary"
                aria-hidden="true"
              ></span>
            </div>
          </div>

          <div class="form-group">
            <label for="inputDescription" class="block mb-2 font-medium">
              {{
                t('Describe the problem within the current map extent:', {
                  ns: 'client',
                })
              }}
            </label>
            <textarea
              rows="5"
              required
              maxlength="500"
              v-model="description"
              class="w-full px-3 py-2 lux-input resize-none"
              id="inputDescription"
              :aria-label="
                t('Describe the problem within the current map extent:', {
                  ns: 'client',
                })
              "
              data-cy="feedbackDescription"
            ></textarea>
            <p
              class="text-sm text-gray-200 mt-1"
              aria-live="polite"
              aria-atomic="true"
              role="status"
            >
              {{ description.length }}/500
            </p>
          </div>

          <!-- Loading state announcement for screen readers -->
          <div aria-live="assertive" aria-atomic="true" class="sr-only">
            <span v-if="isSubmitting">
              {{ t('Sending...', { ns: 'client' }) }}
            </span>
          </div>

          <div class="form-group text-sm">
            <p class="mb-2">
              {{ t('The following', { ns: 'client' }) }}
              <a
                :href="url"
                target="_blank"
                class="text-blue-400 hover:text-blue-300 underline"
              >
                {{ t('map link', { ns: 'client' }) }}
              </a>
              {{ t('will be sent to our support team.', { ns: 'client' }) }}
            </p>
            <p>
              {{ t('You can also use the', { ns: 'client' }) }}
              <button
                type="button"
                @click="activateDrawingTools"
                class="text-blue-400 hover:text-blue-300 underline bg-transparent border-0 p-0 cursor-pointer font-normal"
              >
                {{ t('Drawing Tools', { ns: 'client' }) }}
              </button>
              {{
                t('to annotate the map send to the support team.', {
                  ns: 'client',
                })
              }}
            </p>
          </div>

          <button
            type="submit"
            :disabled="isSubmitting"
            :aria-disabled="isSubmitting ? 'true' : 'false'"
            class="lux-btn self-end"
            data-cy="feedbackSubmit"
          >
            {{
              isSubmitting
                ? t('Sending...', { ns: 'client' })
                : t('Send feedback to support team', { ns: 'client' })
            }}
          </button>
        </form>
      </div>
    </template>
  </side-panel-layout>
</template>
