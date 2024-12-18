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

export type DrawnFeatureStyleShape =
  | 'circle'
  | 'square'
  | 'cross'
  | 'triangle'
  | 'star' // TODO: see if star option is used (look like it is not...)
  | undefined

export type Symboltype = 'us' | 'public'

export interface DrawnFeatureStyle {
  angle: number
  color: string
  arrowcolor: string | undefined
  stroke: number
  linestyle: string
  opacity: number
  showOrientation: boolean
  shape: DrawnFeatureStyleShape
  symbolId: string | undefined
  symboltype: Symboltype | undefined // Is the symbol private or public?
  size: number
}
