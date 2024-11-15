import Layer from 'ol/layer/Layer'

export default Mask

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
