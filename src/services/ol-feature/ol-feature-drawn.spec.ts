import { Map, View } from 'ol'
import { Extent } from 'ol/extent'
import { Geometry, LineString, Point } from 'ol/geom'

import useMap from '@/composables/map/map.composable'
import * as ApiProfileService from '@/services/api/api-profile.service'
import { DrawnFeature } from './ol-feature-drawn'

const mockViewSize = [99, 100]
const profileDataFixtures = {
  profile: [
    {
      dist: 0,
      values: { dhm: 417.04 },
      x: 73679.482601148,
      y: 110624.051484868,
    },
    {
      dist: 95.8,
      values: { dhm: 447.74 },
      x: 73771.64510032868,
      y: 110597.7924035457,
    },
    {
      dist: 191.7,
      values: { dhm: 464.15 },
      x: 73863.80759950935,
      y: 110571.53332222339,
    },
  ],
}

vi.mock('@/composables/map/map.composable', () => ({
  default: () => ({
    getOlMap: vi.fn(() => ({
      getSize: vi.fn(() => mockViewSize),
      getView: vi.fn(() => {}),
    })),
  }),
  PROJECTION_LUX: 'EPSG:2169',
  PROJECTION_WEBMERCATOR: 'EPSG:3857',
}))

vi.mock('@/services/api/api-profile.service', () => ({
  fetchProfileJson: vi.fn(() => profileDataFixtures),
}))

describe('DrawnFeature', () => {
  let drawnFeature: DrawnFeature
  let mockMap: Map

  beforeEach(() => {
    drawnFeature = new DrawnFeature()
    mockMap = useMap().getOlMap()
    drawnFeature.map = mockMap
  })

  it('should call map.getView().fit with correct extent and size', () => {
    const mockExtent: Extent = [0, 0, 10, 10]
    const mockGeometry = {
      getExtent: vi.fn(() => mockExtent),
    } as unknown as Geometry

    vi.spyOn(drawnFeature, 'getGeometry').mockReturnValue(mockGeometry)
    vi.spyOn(drawnFeature.map, 'getView').mockReturnValue({
      fit: vi.fn(() => {}),
    } as unknown as View)

    drawnFeature.fit()

    expect(mockMap.getView().fit).toHaveBeenCalledWith(mockExtent, {
      size: mockViewSize,
    })
  })

  describe('#getProfile', () => {
    beforeEach(() => {
      vi.spyOn(ApiProfileService, 'fetchProfileJson').mockReturnValue(
        Promise.resolve(profileDataFixtures)
      )
    })

    describe('When feature is of type LineString', () => {
      it('should call api to get profileData and calculate cumulative elevation gain/loss', async () => {
        const feat = new DrawnFeature()
        feat.setGeometry(
          new LineString([
            [0, 0],
            [2, 2],
          ])
        )
        const profile = await feat.getProfile()
        const profileDataFixturesExpected = [
          {
            dist: 0,
            values: { dhm: 417.04 },
            x: 73679.482601148,
            y: 110624.051484868,
            cumulativeElevation: 0,
            elevationGain: 0,
            elevationLoss: 0,
          },
          {
            dist: 95.8,
            values: { dhm: 447.74 },
            x: 73771.64510032868,
            y: 110597.7924035457,
            cumulativeElevation: 30.69999999999999,
            elevationGain: 30.69999999999999,
            elevationLoss: 0,
          },
          {
            dist: 191.7,
            values: { dhm: 464.15 },
            x: 73863.80759950935,
            y: 110571.53332222339,
            cumulativeElevation: 47.10999999999996,
            elevationGain: 47.10999999999996,
            elevationLoss: 0,
          },
        ]

        expect(ApiProfileService.fetchProfileJson).toHaveBeenCalledOnce()
        expect(profile).toStrictEqual(profileDataFixturesExpected)
      })
    })

    describe('When feature is NOT a LineString', () => {
      it('should not call the profileData api', async () => {
        const feat = new DrawnFeature()
        feat.setGeometry(new Point([0, 0]))
        const profile = await feat.getProfile()

        expect(ApiProfileService.fetchProfileJson).not.toHaveBeenCalledOnce()
        expect(profile).toStrictEqual(undefined)
      })
    })
  })
})
