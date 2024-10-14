import i18next from 'i18next'
import { App } from 'vue'

export default {
  install(app: App) {
    app.directive('format-distance', {
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
  if (value === null) {
    formattedText = i18next.t('N/A', { ns: 'client' })
  } else if (value < 1000) {
    formattedText = `${value.toFixed(2)} m`
  } else if (value >= 1000) {
    formattedText = `${(value / 1000).toFixed(2)} km`
  }
  el.textContent = formattedText
}
