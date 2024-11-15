import { Point } from 'ol/geom'
import Feature from 'ol/Feature'
import VectorSource from 'ol/source/Vector'
import { Style } from 'ol/style'

import { PositionVectorLayer } from './ol-layer-feature-position.helper'

vi.mock('./styles.helper', () => ({
  getStyleFeaturePosition: vi.fn(() => new Style()),
}))

describe('PositionVectorLayer', () => {
  const layer = new PositionVectorLayer({})
  layer.createGeomarker()

  it('should initialize with a geoMarker and a VectorSource', () => {
    const source = layer.getSource()

    expect(source).toBeInstanceOf(VectorSource)
    expect(source?.getFeatures().length).toBe(1)
    expect(layer.geoMarker).toBeInstanceOf(Feature)
    expect(layer.geoMarker?.getGeometry()).toBeInstanceOf(Point)
  })

  it('should move the geoMarker to given coordinates', () => {
    layer.moveGeoMarker(10, 20)

    const coords = layer.geoMarker?.getGeometry()?.getCoordinates()
    expect(coords).toEqual([10, 20])
  })

  it('should create a new geoMarker if none exists when moving', () => {
    layer.removeGeomarker()
    expect(layer.geoMarker).toBeUndefined()

    layer.moveGeoMarker(15, 25)
    expect(layer.geoMarker).toBeInstanceOf(Feature)
    expect(layer.geoMarker?.getGeometry()?.getCoordinates()).toEqual([15, 25])
  })

  it('should remove the geoMarker and clear the source', () => {
    layer.removeGeomarker()

    expect(layer.geoMarker).toBeUndefined()
    expect(layer.getSource()?.getFeatures().length).toBe(0)
  })
})
