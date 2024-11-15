import {
  formatArea,
  formatDate,
  formatElevation,
  formatLength,
  formatMeasure,
} from './formatting.utils'

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

    it('returns empty string if given value is invalid number', () => {
      const val = formatMeasure(<number>(<unknown>'test'), 4)
      expect(val).toEqual('')
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

    it('returns original value if given value is invalid number', () => {
      const val = formatMeasure(
        <number>(<unknown>'wrong elevation'),
        4,
        'elevation'
      )
      expect(val).toEqual('wrong elevation')
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
})
