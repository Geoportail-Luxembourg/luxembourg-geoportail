import {
  colorStringToRgba,
  debounce,
  sanitizeFilename,
  stringToNumber,
} from './utils'

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

describe('#sanitizeFilename', () => {
  it('should replace spaces with underscores', () => {
    expect(sanitizeFilename('file name with spaces')).toBe(
      'file_name_with_spaces'
    )
  })

  it('should remove special characters except hyphen and underscore', () => {
    expect(sanitizeFilename('file@name#with$special%chars!')).toBe(
      'filenamewithspecialchars'
    )
  })

  it('should preserve hyphens and underscores', () => {
    expect(sanitizeFilename('file-name_with-hyphens_and_underscores')).toBe(
      'file-name_with-hyphens_and_underscores'
    )
  })

  it('should handle filenames with only spaces', () => {
    expect(sanitizeFilename('     ')).toBe('_')
  })

  it('should handle filenames with only special characters', () => {
    expect(sanitizeFilename('###@@@$$$')).toBe('_')
  })
})

describe('#colorStringToRgba', () => {
  it('should convert a valid hex color string to an RGBA array', () => {
    const result = colorStringToRgba('#ff5733')
    expect(result).toEqual([255, 87, 51, 1])
  })

  it('should use the provided opacity value', () => {
    const result = colorStringToRgba('#ff5733', 0.5)
    expect(result).toEqual([255, 87, 51, 0.5])
  })

  it('should handle black color correctly', () => {
    const result = colorStringToRgba('#000000')
    expect(result).toEqual([0, 0, 0, 1])
  })

  it('should handle white color correctly', () => {
    const result = colorStringToRgba('#ffffff', 0.8)
    expect(result).toEqual([255, 255, 255, 0.8])
  })

  it('should throw an error for invalid hex color strings', () => {
    expect(() => colorStringToRgba('invalid')).toThrow()
    expect(() => colorStringToRgba('#123')).toThrow()
    expect(() => colorStringToRgba('#zzzzzz')).toThrow()
  })

  it('should throw an error for missing "#" in hex color string', () => {
    expect(() => colorStringToRgba('ff5733')).toThrow()
  })
})
