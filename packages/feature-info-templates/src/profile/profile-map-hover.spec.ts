import { describe, expect, it, vi } from 'vitest'
import { defineComponent, h, nextTick } from 'vue'
import { mount } from '@vue/test-utils'
import { useProfileMapHover } from './profile-map-hover'
import { toProfileData } from './profile'
import type { LuxTplProfileMapAdapter } from '../context'

function fakeAdapter() {
  const listeners: ((xy: number[], resolution: number) => void)[] = []
  const adapter: LuxTplProfileMapAdapter = {
    setPosition: vi.fn(),
    onPointerMove: cb => {
      listeners.push(cb)
      return () => listeners.splice(listeners.indexOf(cb), 1)
    },
    toLonLat: xy => xy,
  }
  const move = (xy: number[]) => listeners.forEach(cb => cb(xy, 1))
  return { adapter, move }
}

// A 100 m line along y, sampled every 50 m.
function mountProfile(adapter: LuxTplProfileMapAdapter, y: number) {
  const lines = [
    [
      [0, y],
      [100, y],
    ],
  ]
  const data = toProfileData({
    profile: [0, 50, 100].map(x => ({ dist: x, values: { dhm: 0 }, x, y })),
  })
  let hover!: ReturnType<typeof useProfileMapHover>
  const wrapper = mount(
    defineComponent({
      setup() {
        hover = useProfileMapHover(adapter, lines, data)
        return () => h('div')
      },
    })
  )
  return { wrapper, hover }
}

describe('useProfileMapHover', () => {
  it('highlights the chart and moves the marker near the line', async () => {
    const { adapter, move } = fakeAdapter()
    const { hover } = mountProfile(adapter, 0)

    move([40, 3])
    expect(hover.highlightDistance.value).toBe(50)
    expect(adapter.setPosition).toHaveBeenLastCalledWith([40, 0])

    move([40, 30])
    await nextTick()
    expect(hover.highlightDistance.value).toBeUndefined()
    expect(adapter.setPosition).toHaveBeenLastCalledWith()
  })

  it("doesn't clear a marker another profile placed", () => {
    const { adapter, move } = fakeAdapter()
    mountProfile(adapter, 0)
    const far = mountProfile(adapter, 1000)

    move([40, 1003]) // near `far`: it places the marker
    move([40, 3]) // near the first: `far` leaves, the first places it
    expect(adapter.setPosition).toHaveBeenLastCalledWith([40, 0])

    far.wrapper.unmount()
    expect(adapter.setPosition).toHaveBeenLastCalledWith([40, 0])
  })
})
