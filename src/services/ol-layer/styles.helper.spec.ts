import CircleStyle from 'ol/style/Circle'
import Fill from 'ol/style/Fill'
import Stroke from 'ol/style/Stroke'
import Style from 'ol/style/Style'
import { getStyleFeaturePosition } from './styles.helper'

describe('getStyleFeaturePosition', () => {
  it('should return a Style with a Circle image', () => {
    const style = getStyleFeaturePosition()

    expect(style).toBeInstanceOf(Style)
    expect(style.getImage()).toBeInstanceOf(CircleStyle)

    const image = style.getImage() as CircleStyle
    expect(image.getRadius()).toBe(4)

    const fill = image.getFill()
    expect(fill).toBeInstanceOf(Fill)
    expect(fill.getColor()).toBe('white')

    const stroke = image.getStroke()
    expect(stroke).toBeInstanceOf(Stroke)
    expect(stroke.getColor()).toBe('white')
    expect(stroke.getWidth()).toBe(1)
  })
})
