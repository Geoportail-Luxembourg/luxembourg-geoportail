import i18next from 'i18next'
import { App } from 'vue'

export default {
  install(app: App) {
    app.directive('format-length', {
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
  formattedText = formatLength(value)
  el.textContent = formattedText
}

export function formatLength(value: number): string {
  //null covers API errors or unaivalble data (eg. elevation)
  if (value === null) {
    return i18next.t('N/A', { ns: 'client' })
  } else if (value < 1000) {
    return `${value.toFixed(2)} m`
  } else if (value >= 1000) {
    return `${(value / 1000).toFixed(2)} km`
  } else {
    return ''
  }
}
