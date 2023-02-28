import { shallowMount } from '@vue/test-utils'

import SimpleStyleItem from './simple-style-item.vue'

const wrapper = shallowMount(SimpleStyleItem, {
  props: {
    colors: ['#ffffff', '#000000'],
  },
})

describe('SimpleStyleItem', () => {
  it('renders properly', () => {
    expect(wrapper.findAll('div').length).toBe(2)
  })
})
