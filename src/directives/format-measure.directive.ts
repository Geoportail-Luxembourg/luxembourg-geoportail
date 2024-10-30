import { App, DirectiveBinding } from 'vue'
import {
  formatMeasure,
  TFormatMeasureType,
} from '@/services/common/formatting.utils'

export default {
  install(app: App) {
    app.directive('format-measure', format)
  },
}

function format(
  el: HTMLElement,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  binding: DirectiveBinding<any, string, string>
): void {
  let type: TFormatMeasureType | undefined
  let content = el.textContent
  const digits = binding?.value?.digits

  if (content === null || isNaN(+content)) {
    return
  }

  try {
    type = <TFormatMeasureType>Object.keys(binding.modifiers)[0]
  } catch (e) {
    // Do nothing...
  }

  content = formatMeasure(+content, digits, type)

  el.textContent = content
}
