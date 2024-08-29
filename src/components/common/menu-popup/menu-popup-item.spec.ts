import { describe, it, expect, beforeEach, afterEach } from 'vitest'
import { mount } from '@vue/test-utils'

import MenuPopupItem from './menu-popup-item.vue'

describe('MenuPopupItem', () => {
  let wrapper: ReturnType<typeof mount>

  beforeEach(() => {
    wrapper = mount(MenuPopupItem, {
      props: {
        item: { label: 'Option 1' },
      },
    })
  })

  afterEach(() => {
    wrapper.unmount()
  })

  it('renders properly with default props', () => {
    expect(wrapper.findAll('button').length).toBe(1)
  })
})
