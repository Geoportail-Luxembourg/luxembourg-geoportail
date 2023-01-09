import { shallowMount } from '@vue/test-utils'

import LanguageSelector from './language-selector.vue'

describe('MapContainer', () => {
  it('renders properly', () => {
    const wrapper = shallowMount(LanguageSelector)
    expect(wrapper.findComponent('select').exists()).toBe(true)
  })
})
