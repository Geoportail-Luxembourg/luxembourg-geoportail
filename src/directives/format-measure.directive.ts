import { App, DirectiveBinding } from 'vue'
import {
  formatMeasure,
  FormatMeasureType,
} from '@/services/common/formatting.utils'

/**
 * Directive for formating to measures of type "elevation", "length", or "area".
 *
 * Examples of usages:
 * - With elevationGain = 200: `<span v-format-measure.elevation="elevationGain"></span>` => 200
 * - With mCounter = 5600987.462 `<span v-format-measure:2.length="mCounter"></span>` => 5600.98 km
 * - With lengthValue = 42.6598742 `<span v-format-measure:4="lengthValue"></span>` => 42.6598 m
 *
 * NB. for unit testings you may encounter a warning saying directive is missing, to fix this,
 * this directive must be added to Vue instance when testing: import directing in test file and then add the directive to global plugin
 * when mounting/shallowmounting component.
 *
 * ```
 * import formatMeasureDirective from '@/directives/format-measure.directive'
 * const wrapper = mount(Mycomponent, {
 *    props: { ... },
 *    global: {
 *      plugins: [ formatMeasureDirective ] // <= add the directive here!
 *    }
 *  })
 * ```
 */
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
  let type: FormatMeasureType | undefined
  let content = binding.value
  const digits = binding?.arg !== undefined ? +binding?.arg : undefined

  try {
    type = <FormatMeasureType>Object.keys(binding.modifiers)[0]
  } catch (e) {
    // Do nothing...
  }

  content = formatMeasure(content, digits, type)

  el.textContent = content
}
