import { formatLength } from '@/services/common/formatting.utils'
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
