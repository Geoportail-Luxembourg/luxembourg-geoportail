declare module 'ngeo.utils' {
  /**
   * Checks if on Safari.
   * @return {boolean} True if on Safari.
   */
  export function isSafari(): boolean

  /**
   * Takes a hex value and prepends a zero if it's a single digit.
   * @param {string} hex Hex value to prepend if single digit.
   * @return {string} hex value prepended with zero if it was single digit,
   *     otherwise the same value that was passed in.
   */
  export function colorZeroPadding(hex: string): string

  /**
   * Converts a color from RGB to hex representation.
   * @param {!Array.<number>} rgb rgb representation of the color.
   * @return {string} hex representation of the color.
   */
  export function rgbArrayToHex(rgb: number[]): string
}
