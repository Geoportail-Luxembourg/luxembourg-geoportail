import { shallowMount } from '@vue/test-utils'
import { createTestingPinia } from '@pinia/testing'

import ThemeGrid from './theme-grid.vue'
import ThemeSelector from './theme-selector.vue'
import ThemeSelectorButton from './theme-selector-button.vue'

describe('ThemeSelector', () => {
  const mountComponent = () => shallowMount(ThemeSelector)
  let wrapper: ReturnType<typeof mountComponent>

  beforeEach(() => {
    wrapper = shallowMount(ThemeSelector, {
      global: {
        plugins: [createTestingPinia()],
      },
    })
  })

  afterEach(() => {
    wrapper.unmount()
  })

  describe('When displaying the component', () => {
    it('renders the default appearance', () => {
      expect(wrapper.findComponent(ThemeSelectorButton).exists()).toBe(true)
      expect(wrapper.findComponent(ThemeGrid).exists()).toBe(false)
    })
  })
})
