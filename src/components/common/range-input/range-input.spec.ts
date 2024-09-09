import { mount } from '@vue/test-utils'
import RangeInput from './range-input.vue'

describe('RangeInput', () => {
  it('renders with default props', () => {
    const wrapper = mount(RangeInput)
    const rangeInput = wrapper.find('input[type="range"]')
    const numberInput = wrapper.find('input[type="number"]')

    expect(rangeInput.element.value).toBe('0')
    expect(rangeInput.element.min).toBe('0')
    expect(rangeInput.element.max).toBe('10')
    expect(rangeInput.element.step).toBe('1')

    expect(numberInput.element.value).toBe('0')
    expect(numberInput.element.min).toBe('0')
    expect(numberInput.element.max).toBe('10')
    expect(numberInput.element.step).toBe('1')
  })

  it('renders with passed props', () => {
    const wrapper = mount(RangeInput, {
      props: {
        min: 5,
        max: 20,
        step: 2,
        value: 10,
      },
    })
    const rangeInput = wrapper.find('input[type="range"]')
    const numberInput = wrapper.find('input[type="number"]')

    expect(rangeInput.element.value).toBe('10')
    expect(rangeInput.element.min).toBe('5')
    expect(rangeInput.element.max).toBe('20')
    expect(rangeInput.element.step).toBe('2')

    expect(numberInput.element.value).toBe('10')
    expect(numberInput.element.min).toBe('5')
    expect(numberInput.element.max).toBe('20')
    expect(numberInput.element.step).toBe('2')
  })

  it('updates value when input changes', async () => {
    const wrapper = mount(RangeInput)
    const rangeInput = wrapper.find('input[type="range"]')
    const numberInput = wrapper.find('input[type="number"]')

    await rangeInput.setValue('5')
    expect(numberInput.element.value).toBe('5')

    await numberInput.setValue('7')
    expect(rangeInput.element.value).toBe('7')
  })

  it('emits change event with correct value', async () => {
    const wrapper = mount(RangeInput)
    const numberInput = wrapper.find('input[type="number"]')

    await numberInput.setValue('5')
    expect(wrapper.emitted('change')).toHaveLength(1)
    expect(wrapper.emitted('change')?.[0]).toEqual([5])
  })
})
