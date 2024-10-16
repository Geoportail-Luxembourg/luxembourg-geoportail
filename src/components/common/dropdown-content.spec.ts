import { mount } from '@vue/test-utils'
import DropdownContent from './dropdown-content.vue'

describe('DropdownContent', () => {
  it('renders the placeholder prop', () => {
    const wrapper = mount(DropdownContent, {
      props: { placeholder: 'Test Placeholder' },
    })
    expect(wrapper.find('span').text()).toBe('Test Placeholder')
  })

  it('toggles dropdown on button click', async () => {
    const wrapper = mount(DropdownContent)
    const button = wrapper.find('button')

    expect(wrapper.find('.lux-dropdown-content').classes()).toContain('hidden')

    await button.trigger('click')

    expect(wrapper.find('.lux-dropdown-content').classes()).not.toContain(
      'hidden'
    )

    await button.trigger('click')

    expect(wrapper.find('.lux-dropdown-content').classes()).toContain('hidden')
  })

  it('opens dropdown when forceOpen is true', async () => {
    const wrapper = mount(DropdownContent)
    wrapper.vm.toggleDropdown(true)

    await wrapper.vm.$nextTick()

    expect(wrapper.find('.lux-dropdown-content').classes()).not.toContain(
      'hidden'
    )
  })

  it('closes dropdown when clicking outside', async () => {
    const wrapper = mount(DropdownContent, {
      props: { enableClickOutside: true },
    })

    wrapper.vm.toggleDropdown(true)

    await wrapper.vm.$nextTick()

    document.dispatchEvent(new MouseEvent('click'))

    await wrapper.vm.$nextTick()

    expect(wrapper.find('.lux-dropdown-content').classes()).toContain('hidden')
  })

  it('does not close dropdown when enableClickOutside is false', async () => {
    const wrapper = mount(DropdownContent, {
      props: { enableClickOutside: false },
    })

    wrapper.vm.toggleDropdown(true)

    await wrapper.vm.$nextTick()

    document.dispatchEvent(new MouseEvent('click'))

    await wrapper.vm.$nextTick()

    expect(wrapper.find('.lux-dropdown-content').classes()).not.toContain(
      'hidden'
    )
  })
})
