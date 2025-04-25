import Layer from 'ol/layer/Layer'

declare const DOTS_PER_INCH: number
declare const INCHES_PER_METER: number

declare type OptionType = {
  id: unknown
  opacity: number
}

declare class Mask extends Layer {
  constructor(options: OptionType)

  setSize(size: number[]): void
  setScale(scale: number): void
  setRotation(rotation: number | undefined): void
}

export { Mask, DOTS_PER_INCH, INCHES_PER_METER }
