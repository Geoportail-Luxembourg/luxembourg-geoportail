import { shallowMount } from '@vue/test-utils'

import BackgroundSelectorItem from './background-selector-item.vue'

const wrapper = shallowMount(BackgroundSelectorItem, {
  props: {
    bgTitle: 'My background title',
    bgName: 'My background name',
  },
})

describe('BackgroundSelectorItem', () => {
  it('renders properly', () => {
    expect(wrapper.findAll('button').length).toBe(1)
    expect(wrapper.text()).toBe('')
    expect(wrapper.props().bgTitle).toBe('My background title')
    expect(wrapper.props().bgName).toBe('My background name')
    expect(wrapper.attributes()['title']).toContain('My background title')
    expect(wrapper.attributes()['class']).toContain('My background name')
  })
})
