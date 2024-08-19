import { Feature } from 'ol'
import { Geometry } from 'ol/geom'

export type DrawStateActive =
  | undefined
  | 'drawPoint'
  | 'drawLabel'
  | 'drawLine'
  | 'drawCircle'
  | 'drawPolygon'

export type DrawnFeatureType =
  | 'drawnPoint'
  | 'drawnLabel'
  | 'drawnLine'
  | 'drawnCircle'
  | 'drawnPolygon'

export interface DrawFeature {
  // TODO: to improve
  id: number
  label: string
  description: string
  featureType: DrawnFeatureType
  olFeature: Feature<Geometry>
}
