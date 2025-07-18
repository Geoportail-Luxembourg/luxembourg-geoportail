import { DrawnFeatureStyle } from '@/stores/draw.store.model'

export function getDefaultDrawnFeatureStyle() {
  return <DrawnFeatureStyle>{
    angle: 0,
    color: '#ed1c24',
    arrowcolor: undefined,
    stroke: 1.25,
    linestyle: 'plain',
    opacity: 0.2,
    showOrientation: false,
    shape: 'circle',
    symbolId: undefined,
    symboltype: undefined,
    size: 10,
  }
}
