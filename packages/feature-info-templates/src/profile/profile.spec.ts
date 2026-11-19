import { describe, expect, it } from 'vitest'
import {
  findClosestPoint,
  extractLineParts,
  addLengthAlongLine,
} from './profile'

describe('profile line helpers', () => {
  it('flattens collections into line parts', () => {
    expect(
      extractLineParts({
        type: 'GeometryCollection',
        geometries: [
          { type: 'Point', coordinates: [0, 0] },
          {
            type: 'LineString',
            coordinates: [
              [0, 0],
              [1, 0],
            ],
          },
          {
            type: 'MultiLineString',
            coordinates: [
              [
                [2, 0],
                [3, 0],
              ],
            ],
          },
        ],
      })
    ).toEqual([
      [
        [0, 0],
        [1, 0],
      ],
      [
        [2, 0],
        [3, 0],
      ],
    ])
  })

  it('measures along the line, without the gaps between parts', () => {
    const line = addLengthAlongLine([
      [
        [0, 0],
        [3, 4],
      ],
      [
        [10, 0],
        [10, 2],
      ],
    ])
    expect(line).toEqual([
      [
        [0, 0, 0],
        [3, 4, 5],
      ],
      [
        [10, 0, 5],
        [10, 2, 7],
      ],
    ])
    expect(findClosestPoint(line, [11, 1])).toEqual({
      point: [10, 1, 6],
      sqDist: 1,
    })
  })
})
