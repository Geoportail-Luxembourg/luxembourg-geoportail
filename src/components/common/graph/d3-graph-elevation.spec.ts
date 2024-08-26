import { describe, it, expect, beforeEach, afterEach } from 'vitest'
import { mount } from '@vue/test-utils'

import D3GraphElevation from './d3-graph-elevation.vue'

describe('D3GraphElevation', () => {
  let wrapper: ReturnType<typeof mount>

  beforeEach(() => {
    wrapper = mount(D3GraphElevation, {
      props: {
        showTooltip: true,
      },
    })
  })

  afterEach(() => {
    wrapper.unmount()
  })

  it('renders properly with default props', () => {
    expect(wrapper.findAll('div').length).toBe(1)
  })
})
