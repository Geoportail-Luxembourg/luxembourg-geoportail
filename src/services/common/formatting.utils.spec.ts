import { formatDate } from './formatting.utils'

describe('Formatting utils', () => {
  describe('#formatDate', () => {
    it('formats date', () => {
      const date = formatDate('2016-06-08T00:00:00')
      expect(date).toEqual('08/06/2016')
    })
  })
})
