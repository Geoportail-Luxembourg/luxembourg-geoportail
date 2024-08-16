import { Feature } from 'ol'
import { Geometry } from 'ol/geom'

export type DrawStateActive =
  | undefined
  | 'drawPoint'
  | 'drawLabel'
  | 'drawLine'
  | 'drawCircle'
  | 'drawPolygon'

export interface DrawFeature {
  // TODO: to improve
  id: number
  label: string
  description: string
  geom: string
  olFeature: Feature<Geometry>
}
