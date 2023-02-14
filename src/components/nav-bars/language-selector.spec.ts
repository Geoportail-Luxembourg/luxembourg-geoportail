import { shallowMount, VueWrapper } from '@vue/test-utils'
import { createTestingPinia } from '@pinia/testing'

import LanguageSelector from './language-selector.vue'
import DropdownList from '@/components/common/dropdown-list.vue'
import { useAppStore } from '@/stores/app.store'

describe('LanguageSelector', () => {
  let wrapper: VueWrapper

  beforeEach(() => {
    wrapper = shallowMount(LanguageSelector, {
      global: {
        plugins: [createTestingPinia()],
      },
    })
  })

  it('renders properly', () => {
    expect(wrapper.findComponent(DropdownList).exists()).toBe(true)
  })

  it('languages are in the right order: en, de, fr, lb', () => {
    expect(
      (wrapper.vm as any).availableLanguages.map(
        (lang: { [key: string]: string }) => lang.value
      )
    ).toStrictEqual(['en', 'de', 'fr', 'lb'])
  })

  it('sets the language', () => {
    const { setLang } = useAppStore()
    const dropdown = wrapper.findComponent(DropdownList)
    dropdown.trigger('change', { lang: 'fr' })
    expect(setLang).toHaveBeenCalled()
  })
})
