import { describe, it, expect, beforeEach, afterEach } from 'vitest'
import { mount } from '@vue/test-utils'

import MenuPopup from './menu-popup.vue'

describe('MenuPopup', () => {
  let wrapper: ReturnType<typeof mount>

  beforeEach(() => {
    wrapper = mount(MenuPopup, {
      props: {
        items: [
          { label: 'Option 1' },
          { label: 'Option 2' },
          { label: 'Option 3' },
        ],
        direction: 'down',
      },
    })
  })

  afterEach(() => {
    wrapper.unmount()
  })

  it('renders properly with default props', () => {
    expect(
      document.querySelectorAll('ul.lux-menu-popup-list > li').length
    ).toBe(3)
    expect([...document.querySelector('ul')!.classList]).toContain('invisible')
  })

  it('toggles dropdown open and close on button click', async () => {
    const button = wrapper.find('button')
    await button.trigger('click')
    expect([...document.querySelector('ul')!.classList]).not.toContain(
      'invisible'
    )

    await button.trigger('click')
    expect([...document.querySelector('ul')!.classList]).toContain('invisible')
  })

  it('closes dropdown when clicking outside', async () => {
    const button = wrapper.find('button')
    await button.trigger('click')
    expect([...document.querySelector('ul')!.classList]).not.toContain(
      'invisible'
    )

    await document.dispatchEvent(new MouseEvent('click'))
    expect([...document.querySelector('ul')!.classList]).toContain('invisible')
  })
})
