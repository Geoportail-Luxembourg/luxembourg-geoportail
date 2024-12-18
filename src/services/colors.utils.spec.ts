import { colorStringToRgba } from './colors.utils'

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
