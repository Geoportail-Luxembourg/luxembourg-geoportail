import { describe, it, expect } from 'vitest'
import { removeAllMeasurementOverlays } from './measure.composable'

describe('measure composable overlay cleanup', () => {
  it('removes overlays that have measurementId dataset', () => {
    const el1 = { dataset: { measurementId: 'a' } }
    const el2 = { dataset: {} }
    const el3 = { dataset: { measurementId: 'b' } }

    const ov1 = { getElement: () => el1 }
    const ov2 = { getElement: () => el2 }
    const ov3 = { getElement: () => el3 }

    const removed: any[] = []
    const mockMap: any = {
      getOverlays: () => ({ getArray: () => [ov1, ov2, ov3] }),
      removeOverlay: (ov: any) => removed.push(ov),
    }

    removeAllMeasurementOverlays(mockMap)

    expect(removed.length).toBe(2)
    expect(removed).toContain(ov1)
    expect(removed).toContain(ov3)
  })
})
