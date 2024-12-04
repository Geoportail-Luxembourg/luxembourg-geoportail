import {
  formatArea,
  formatDate,
  formatElevation,
  formatLength,
  formatMeasure,
} from './formatting.utils'
import { initProjections } from '@/services/projection.utils'
import { formatCoords } from '@/services/common/formatting.utils'

vi.mock('i18next', () => ({
  default: { t: vi.fn(key => key) },
}))

describe('Formatting utils', () => {
  describe('#formatDate', () => {
    it('formats date by default in fr-FR', () => {
      const date = formatDate('2016-06-08T00:00:00')
      expect(date).toEqual('08/06/2016')
    })
    it('formats date in en-EN', () => {
      const date = formatDate('2016-06-08T00:00:00', 'en')
      expect(date).toEqual('6/8/2016')
    })
  })

  describe('#formatMeasure', () => {
    it('formats value as a length (m) by default with 2 digits', () => {
      const val = formatMeasure(42.5)
      expect(val).toEqual('42.50 m')
    })

    it('formats value as a length (given in m) n km', () => {
      const val = formatMeasure(42000)
      expect(val).toEqual('42.00 km')
    })

    it('formats value as a length with n given digits', () => {
      const val = formatMeasure(42000.5698723, 4)
      expect(val).toEqual('42.0006 km')
    })

    it('returns "N/A" string if given value is invalid number', () => {
      const val = formatMeasure(<number>(<unknown>'test'), 4)
      expect(val).toEqual('N/A')
    })

    it('formats value as elevation', () => {
      const val = formatMeasure(110, undefined, 'elevation')
      expect(val).toEqual('110 m')
    })

    it('formats value as elevation always in meters', () => {
      const val = formatMeasure(11000000, undefined, 'elevation')
      expect(val).toEqual('11000000 m')
    })

    it('formats value as elevation with given digits', () => {
      const val = formatMeasure(11000000.56, 2, 'elevation')
      expect(val).toEqual('11000000.56 m')
    })

    it('returns "N/A" string if given value is invalid number', () => {
      const val = formatMeasure(
        <number>(<unknown>'wrong elevation'),
        4,
        'elevation'
      )
      expect(val).toEqual('N/A')
    })
  })

  describe('#formatElevation', () => {
    it('formats value as a elevation (m) by default with no digits', () => {
      const val = formatElevation(42.5)
      expect(val).toEqual('43 m')
    })

    it('formats value as a elevation (m) with given digits', () => {
      const val = formatElevation(42.5, 2)
      expect(val).toEqual('42.50 m')
    })

    it('returns original value if given value is invalid number', () => {
      const val = formatElevation(<number>(<unknown>'wrong elevation'), 2)
      expect(val).toEqual('wrong elevation')
    })
  })

  describe('#formatLength', () => {
    it('formats value as a distance by default with 2 digits', () => {
      const val = formatLength(42.5)
      expect(val).toEqual('42.50 m')
    })

    it('formats value as a distance with no digit', () => {
      const val = formatLength(42.5, 0)
      expect(val).toEqual('43 m')
    })

    it('formats value as a distance in m', () => {
      const val = formatLength(6, 0)
      expect(val).toEqual('6 m')
    })

    it('formats value as a distance in km', () => {
      const val = formatLength(6789456132.35, 5)
      expect(val).toEqual('6789456.13235 km')
    })

    it('returns empty string if given distance is not a valid number', () => {
      const val = formatLength(<number>(<unknown>'wrong dist'))
      expect(val).toEqual('')
    })
  })

  describe('#formatArea', () => {
    it('formats value as an area by default with 2 digits', () => {
      const val = formatArea(12)
      expect(val).toEqual('12.00 m²')
    })

    it('formats value as an area by default with no digit', () => {
      const val = formatArea(12.5, 0)
      expect(val).toEqual('13 m²')
    })

    it('formats value as an area in m²', () => {
      const val = formatArea(6, 0)
      expect(val).toEqual('6 m²')
    })

    it('formats value as an area in km²', () => {
      const val = formatArea(6789456132.35, 5)
      expect(val).toEqual('6789.45613 km²')
    })

    it('returns empty string if given area is not a valid number', () => {
      const val = formatArea(<number>(<unknown>'wrong area'))
      expect(val).toEqual('')
    })
  })
  describe('#formatCoords', () => {
    initProjections()
    it('format basic lonlat coordinates', () => {
      const formattedCoords = formatCoords(
        [677840, 6390169],
        'EPSG:3857',
        'EPSG:4326'
      )
      expect(formattedCoords).toEqual('6.08914 E | 49.674932 N')
    })
    it('format DMS lonlat coordinates', () => {
      const formattedCoords = formatCoords(
        [677840, 6390169],
        'EPSG:3857',
        'EPSG:4326:DMS'
      )
      expect(formattedCoords).toEqual('6° 5′ 20.9″ E | 49° 40′ 29.8″ N')
    })
    it('format DMm lonlat coordinates', () => {
      const formattedCoords = formatCoords(
        [677840, 6390169],
        'EPSG:3857',
        'EPSG:4326:DMm'
      )
      expect(formattedCoords).toEqual('6° 5.348419′ E | 49° 40.495935′ N')
    })
    it('format basic lux coordinate', () => {
      const formattedCoords = formatCoords(
        [677840, 6390169],
        'EPSG:3857',
        'EPSG:2169'
      )
      expect(formattedCoords).toEqual('74299 E | 82266 N')
    })
    it('format UTM 31 coordinate', () => {
      const formattedCoords = formatCoords(
        [643596, 6390169],
        'EPSG:3857',
        'EPSG:3263*'
      )
      expect(formattedCoords).toEqual('700672 E | 5506204 N  (UTM31N)')
    })
    it('format UTM 32 coordinate', () => {
      const formattedCoords = formatCoords(
        [677840, 6390169],
        'EPSG:3857',
        'EPSG:3263*'
      )
      expect(formattedCoords).toEqual('289999 E | 5506558 N  (UTM32N)')
    })
  })
})
