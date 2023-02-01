import { formatDate } from './formatting.utils'

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
})
