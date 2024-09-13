export type DrawStateActive =
  | undefined
  | 'drawPoint'
  | 'drawLabel'
  | 'drawLine'
  | 'drawCircle'
  | 'drawPolygon'

export type EditStateActive =
  | undefined
  | 'editPoint'
  | 'editLabel'
  | 'editLine'
  | 'editCircle'
  | 'editPolygon'

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
