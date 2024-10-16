import { mount } from '@vue/test-utils'

import DropdownList from './dropdown-list.vue'

const optionsMocks = [
  { label: 'option1_label', value: 'option1_value' },
  { label: 'option2_label', value: 'option2_value' },
  { label: 'option3_label', value: 'option3_value' },
]

describe('DropdownList', () => {
  it('renders properly', () => {
    const wrapper = mount(DropdownList, {
      props: {
        placeholder: 'Dropdown placeholder',
        options: [
          { label: 'option 1 label', value: 'option 1 value' },
          { label: 'option 2 label', value: 'option 2 value' },
        ],
      },
    })

    expect(wrapper.findAll('button').length).toBe(3)
    expect(wrapper.findAll('button')[0].attributes('aria-expanded')).toBe(
      'false'
    )
    expect(wrapper.findAll('button')[0].attributes('aria-haspopup')).toBe(
      'true'
    )
    expect(wrapper.findAll('ul').length).toBe(1)
  })

  it('renders properly items', () => {
    const wrapper = mount(DropdownList, {
      props: {
        placeholder: 'Dropdown placeholder',
        options: optionsMocks,
      },
    })
    expect(wrapper.findAll('ul').length).toBe(1)
    expect(wrapper.findAll('li').length).toBe(3)
  })

  describe('when click on main button', () => {
    const wrapper = mount(DropdownList, {
      props: {
        placeholder: 'Dropdown placeholder',
        options: optionsMocks,
      },
    })

    beforeEach(async () => {
      await wrapper.find('.lux-dropdown-btn').trigger('click')
    })

    it('should toggle dropdown', () => {
      expect(wrapper.findAll('button')[0].attributes('aria-expanded')).toBe(
        'true'
      )
      expect(wrapper.findAll('ul')[0].attributes('class')).not.toContain(
        'hidden'
      )
    })

    describe('when click on item', () => {
      beforeEach(async () => {
        await wrapper.find('li').trigger('click')
      })

      it('should hide dropdown', () => {
        expect(wrapper.findAll('button')[0].attributes('aria-expanded')).toBe(
          'false'
        )
      })
    })
  })
})
