<script setup lang="ts">
import { ref, computed, watch, onUnmounted } from 'vue'
import { useTranslation } from 'i18next-vue'

const { t } = useTranslation()

const showIframePreview = ref(false)
const iframeSize = ref('small')
const customWidth = ref(800)
const customHeight = ref(600)
const modalRef = ref<HTMLElement | null>(null)

const iframeSizes: Record<string, [number, number]> = {
  small: [400, 300],
  medium: [600, 450],
  large: [800, 600],
  custom: [800, 600],
}

const iframeWidth = computed(() =>
  iframeSize.value === 'custom'
    ? customWidth.value
    : iframeSizes[iframeSize.value][0]
)

const iframeHeight = computed(() =>
  iframeSize.value === 'custom'
    ? customHeight.value
    : iframeSizes[iframeSize.value][1]
)

const embedUrl = computed(() => {
  const url = new URL(window.location.href)
  url.searchParams.set('embedded', 'true')
  return url.href
})

const iframeCode = computed(
  () =>
    `<iframe src="${embedUrl.value}" width="${iframeWidth.value}" height="${iframeHeight.value}" frameborder="0" style="border:0"></iframe>`
)

const modalWidth = computed(() => {
  // Add padding and spacing (approximately 100px for padding, borders, scrollbar)
  const extraSpace = 48
  return `${iframeWidth.value + extraSpace}px`
})

function selectInput(event: Event) {
  const input = event.target as HTMLInputElement
  input.select()
}

function openIframePreview() {
  showIframePreview.value = true
}

function closeIframePreview() {
  showIframePreview.value = false
}

function copyIframeCode() {
  navigator.clipboard.writeText(iframeCode.value)
}

// Trap focus within modal
function trapFocus(event: KeyboardEvent) {
  if (!showIframePreview.value || !modalRef.value) return

  const focusableElements = modalRef.value.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  )
  const firstElement = focusableElements[0] as HTMLElement
  const lastElement = focusableElements[
    focusableElements.length - 1
  ] as HTMLElement

  if (event.key === 'Tab') {
    if (event.shiftKey && document.activeElement === firstElement) {
      event.preventDefault()
      lastElement.focus()
    } else if (!event.shiftKey && document.activeElement === lastElement) {
      event.preventDefault()
      firstElement.focus()
    }
  } else if (event.key === 'Escape') {
    closeIframePreview()
  }
}

// Watch modal visibility to manage focus trap
watch(showIframePreview, isOpen => {
  if (isOpen) {
    document.addEventListener('keydown', trapFocus)
  } else {
    document.removeEventListener('keydown', trapFocus)
  }
})

onUnmounted(() => {
  document.removeEventListener('keydown', trapFocus)
})
</script>

<template>
  <div>
    <!-- Embed/Integrate section -->
    <div class="md:w-full">
      <label
        for="embed-code-input"
        class="block text-white text-sm font-medium mb-2"
      >
        {{ t('Integrate', { ns: 'client' }) }}
      </label>
      <div class="flex gap-2">
        <input
          id="embed-code-input"
          type="text"
          class="flex-1 px-3 py-2 lux-input cursor-pointer"
          :value="iframeCode"
          :aria-label="t('Integrate', { ns: 'client' })"
          @click="selectInput"
          readonly
          data-cy="embedCodeInput"
        />
        <button
          @click="openIframePreview"
          class="bg-white disabled:opacity-75 disabled:cursor-not-allowed text-primary hover:bg-primary hover:text-white border border-slate-300 py-1.5 px-2.5"
          :aria-label="t('Preview', { ns: 'client' })"
          data-cy="previewButton"
        >
          {{ t('Preview', { ns: 'client' }) }}
        </button>
      </div>
    </div>

    <!-- Iframe Preview Modal -->
    <div
      v-if="showIframePreview"
      class="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
      @click.self="closeIframePreview"
      data-cy="iframePreviewModal"
    >
      <div
        ref="modalRef"
        class="bg-white rounded-lg shadow-xl mx-4 max-h-[90vh] overflow-auto"
        :style="{ width: modalWidth, maxWidth: '90vw' }"
      >
        <div class="flex justify-between items-center p-4 border-b">
          <h2 id="modal-title" class="text-xl font-semibold">
            {{ t('Embed map', { ns: 'app' }) }}
          </h2>
          <button
            @click="closeIframePreview"
            class="text-gray-500 hover:text-gray-700 text-2xl leading-none"
            :aria-label="t('Close', { ns: 'app' })"
            data-cy="closePreviewButton"
          >
            &times;
          </button>
        </div>

        <div class="p-4 space-y-4">
          <!-- Size selector -->
          <div>
            <label for="iframe-size-select" class="sr-only">
              {{ t('Select iframe size', { ns: 'client' }) }}
            </label>
            <select
              id="iframe-size-select"
              v-model="iframeSize"
              class="w-full px-3 py-2 border border-gray-300 rounded"
              :aria-label="t('Select iframe size', { ns: 'client' })"
              data-cy="iframeSizeSelect"
            >
              <option value="small">{{ t('small', { ns: 'app' }) }}</option>
              <option value="medium">
                {{ t('medium', { ns: 'app' }) }}
              </option>
              <option value="large">{{ t('large', { ns: 'app' }) }}</option>
              <option value="custom">
                {{ t('custom', { ns: 'app' }) }}
              </option>
            </select>
          </div>

          <!-- Custom size inputs -->
          <div v-if="iframeSize === 'custom'" class="flex gap-2 items-center">
            <label for="custom-width-input" class="sr-only">Width</label>
            <input
              id="custom-width-input"
              type="number"
              v-model.number="customWidth"
              min="0"
              class="w-24 px-3 py-2 border border-gray-300 rounded"
              aria-label="Custom width"
              data-cy="customWidthInput"
            />
            <span aria-hidden="true">X</span>
            <label for="custom-height-input" class="sr-only">Height</label>
            <input
              id="custom-height-input"
              type="number"
              v-model.number="customHeight"
              min="0"
              class="w-24 px-3 py-2 border border-gray-300 rounded"
              aria-label="Custom height"
              data-cy="customHeightInput"
            />
          </div>

          <!-- Iframe preview -->
          <div class="border border-gray-300 overflow-auto">
            <iframe
              :src="embedUrl"
              :width="iframeWidth"
              :height="iframeHeight"
              frameborder="0"
              style="border: 0"
              :title="t('Embed map preview', { ns: 'client' })"
              data-cy="iframePreview"
            ></iframe>
          </div>

          <!-- Iframe code with copy button -->
          <div class="flex gap-2">
            <label for="iframe-code-input" class="sr-only">
              {{ t('Iframe code', { ns: 'client' }) }}
            </label>
            <input
              id="iframe-code-input"
              type="text"
              :value="iframeCode"
              @click="selectInput"
              readonly
              class="flex-1 px-3 py-2 border border-gray-300 rounded cursor-pointer"
              :aria-label="t('Iframe code', { ns: 'client' })"
              data-cy="iframeCodeInput"
            />
            <button
              @click="copyIframeCode"
              class="bg-white disabled:opacity-75 disabled:cursor-not-allowed text-primary hover:bg-primary hover:text-white border border-slate-300 py-1.5 px-2.5"
              :aria-label="t('Copy', { ns: 'client' })"
              data-cy="copyIframeCodeButton"
            >
              {{ t('Copy', { ns: 'client' }) }}
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
