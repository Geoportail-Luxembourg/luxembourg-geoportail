/**
 * Converts an hex string to rgba array
 * @param colorString The hex string
 * @param opacity The opacity if any (default = 1)
 * @returns The value in rgba as an array
 */
export function colorStringToRgba(colorString: string, opacity = 1) {
  const isValidHex = /^#[0-9A-Fa-f]{6}$/.test(colorString)
  if (!isValidHex) {
    throw new Error(`Invalid hex color string: ${colorString}`)
  }

  const r = parseInt(colorString.slice(1, 3), 16)
  const g = parseInt(colorString.slice(3, 5), 16)
  const b = parseInt(colorString.slice(5, 7), 16)
  return [r, g, b, opacity]
}

/**
 * Converts a rgb array into a hex color string // TODO: (no opacity?)
 * @param colorsRgb
 * @returns
 */
export function colorRgbArrayToHex(colorsRgb: number[]) {
  const [r, g, b] = colorsRgb

  if (r !== (r & 255) || g !== (g & 255) || b !== (b & 255)) {
    throw Error(`"(${r},${g},${b})" is not a valid RGB color`)
  }

  const hexR = colorZeroPadding(r.toString(16))
  const hexG = colorZeroPadding(g.toString(16))
  const hexB = colorZeroPadding(b.toString(16))

  return `#${hexR}${hexG}${hexB}`
}

function colorZeroPadding(hex: string) {
  return hex.length === 1 ? `0${hex}` : hex
}
