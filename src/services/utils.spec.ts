import { debounce, stringToNumber } from './utils'

const mock = vi.fn(() => 'function to be debounced')

describe('#debounce', () => {
  let debouncedFn: Function

  beforeEach(() => {
    vi.useFakeTimers()
    debouncedFn = debounce(mock, 100)
  })

  afterEach(() => {
    vi.restoreAllMocks()
  })

  it('execute given function just once, with delay', () => {
    for (let i = 0; i < 42; i++) {
      debouncedFn()
    }

    vi.runAllTimers()
    expect(mock).toHaveBeenCalledTimes(1)
  })

  it('execute every 100ms', () => {
    for (let i = 0; i < 5; i++) {
      debouncedFn()
      vi.advanceTimersByTime(100)
    }

    expect(mock).toHaveBeenCalledTimes(5)
  })
})

describe('#stringToNumber', () => {
  describe('when string is empty', () => {
    it('returns undefined', () => {
      expect(stringToNumber('')).toBe(undefined)
      expect(stringToNumber('  ')).toBe(undefined)
    })
  })
  describe('when string is an invalid number', () => {
    it('returns undefined', () => {
      expect(stringToNumber('a123')).toBe(undefined)
      expect(stringToNumber('0.invalidnum*')).toBe(undefined)
    })
  })
  describe('when string is a valid number', () => {
    it('returns the value as a number', () => {
      expect(stringToNumber('128')).toBe(128)
      expect(stringToNumber('-42')).toBe(-42)
      expect(stringToNumber('0.5')).toBe(0.5)
    })
  })
})
