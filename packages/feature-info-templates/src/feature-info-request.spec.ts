import { describe, expect, it } from 'vitest'
import {
  buildGetFeatureInfoParams,
  normalizeFeatureInfo,
} from './feature-info-request'
import type { FeatureInfoJSON } from './models'

describe('getfeatureinfo request', () => {
  it('builds boxes, zoom and viewport from the resolution', () => {
    expect(
      buildGetFeatureInfoParams({
        layers: [2, 1],
        point: [1000, 2000],
        coordinate: [100, 200],
        resolution: 2,
        size: [10, 20],
        pixel: [3.4, 5.6],
      })
    ).toEqual({
      layers: '2,1',
      box1: '960,2040,1040,1960',
      box2: '998,2002,1002,1998',
      srs: 'EPSG:3857',
      zoom: '16',
      BBOX: '94,172,114,212',
      WIDTH: '10',
      HEIGHT: '20',
      X: '3',
      Y: '6',
    })
  })

  it('applies host labels and drops empty entries', () => {
    const entry = (layer: string, n: number) =>
      ({
        layer,
        layerLabel: `backend ${layer}`,
        features: Array(n).fill({}),
      }) as FeatureInfoJSON
    expect(
      normalizeFeatureInfo(
        [entry('1', 1), entry('2', 1), entry('3', 0)],
        id => ({ '1': 'host 1' })[id]
      ).map(e => e.layerLabel)
    ).toEqual(['host 1', 'backend 2'])
  })
})
