import { shallowMount, mount } from '@vue/test-utils'
import { createTestingPinia } from '@pinia/testing'

import ThemeGrid from './theme-grid.vue'
import ThemeSelector from './theme-selector.vue'
import ThemeSelectorButton from './theme-selector-button.vue'
import { defineComponent, shallowRef, ShallowRef } from 'vue'

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

  describe('When the component is clicked on', () => {
    const TestComponent = defineComponent({
      template: `
        <theme-selector
          data-cy="themeSelector"
          @toggleThemesGrid="toggleThemesGrid"
        ></theme-selector>
      `,
      components: { 'theme-selector': ThemeSelector },
      setup() {
        const themeGridIsOpen: ShallowRef<boolean> = shallowRef(false)

        function toggleThemesGrid(isOpen: boolean) {
          themeGridIsOpen.value = isOpen
        }

        return { themeGridIsOpen, toggleThemesGrid }
      },
    })

    const wrapperTest = mount(TestComponent, {
      global: {
        plugins: [createTestingPinia()],
      },
    })

    it('opens and renders the grid', async () => {
      const themeSelector = wrapperTest.findComponent(ThemeSelector)
      expect(themeSelector.findComponent(ThemeGrid).exists()).toBe(false)

      await wrapperTest.find('button').trigger('click')
      expect(themeSelector.findComponent(ThemeGrid).exists()).toBe(true)
    })
  })
})
