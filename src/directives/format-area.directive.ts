import i18next from 'i18next'
import { App } from 'vue'

export default {
  install(app: App) {
    app.directive('format-area', {
      beforeMount(el: HTMLElement, binding: { value: number }) {
        format(el, binding.value)
      },
      updated(el: HTMLElement, binding: { value: number }) {
        format(el, binding.value)
      },
    })
  },
}

function format(el: HTMLElement, value: number): void {
  let formattedText: string = ''
  formattedText = formatArea(value)
  el.textContent = formattedText
}

export function formatArea(value: number): string {
  if (value === null) {
    return i18next.t('N/A', { ns: 'client' })
  } else if (value < 1000000) {
    return `${value.toFixed(2)} m²`
  } else if (value >= 1000000) {
    return `${(value / 1000000).toFixed(2)} km²`
  } else {
    return ''
  }
}
