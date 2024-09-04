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

export interface DrawnFeatureStyle {
  angle: number
  color: string
  arrowcolor: string | undefined
  // description: string,
  stroke: number
  // isLabel: boolean,
  linestyle: string
  // name: string,
  opacity: number
  showOrientation: boolean
  shape: string
  symbolId: string | undefined
  size: number
  // isCircle: boolean,
}

// export interface DrawnFeatureStyle {
//   angle: number
//   color: string
//   // description: string,
//   stroke: number
//   // isLabel: boolean,
//   linestyle: string
//   // name: string,
//   opacity: number
//   showOrientation: boolean
//   shape: string
//   size: number
//   // isCircle: boolean,
// }

export interface DrawnFeature {
  // TODO: to improve
  id: number
  label: string
  description: string
  editable: boolean
  selected: boolean
  map_id: number
  saving: boolean
  featureType: DrawnFeatureType
  featureStyle: DrawnFeatureStyle
  olFeature: Feature<Geometry>
}
