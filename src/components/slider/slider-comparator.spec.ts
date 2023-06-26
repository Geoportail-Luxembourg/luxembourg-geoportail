import { createTestingPinia } from '@pinia/testing'
import { mount, VueWrapper } from '@vue/test-utils'

import SliderComparator from './slider-comparator.vue'

describe('SliderComparator', () => {
  let wrapper: VueWrapper
  const pinia = createTestingPinia({
    createSpy: vi.fn,
    initialState: {
      map: {
        layers: [],
      },
    },
  })

  beforeEach(() => {
    wrapper = mount(SliderComparator, {
      global: {
        plugins: [pinia],
      },
    })
  })

  afterEach(() => {
    wrapper.unmount()
  })

  it('renders properly', () => {
    expect(wrapper.exists()).toBe(true)
  })
})
