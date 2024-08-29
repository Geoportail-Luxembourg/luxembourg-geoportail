import { ScaleLinear } from 'd3-scale'

export type Profile = {
  (selection: Selection<SVGElement, Iterable<any>, HTMLElement, any>): void
  clearHighlight(): void
  highlight(distance: number): void
  showPois(pois: Poi[]): void
}

export type PointData = {
  dist: number
  values: number[]
  x: number
  y: number
}

export type LineConfigurations = { [key: string]: LineConfiguration }

export type Elevations = { [K in keyof LineConfigurations]: number }

export type ScaleModifierType =
  | ((
      x: ScaleLinear<number, number, never>,
      y: ScaleLinear<number, number, never>,
      width: number,
      height: number
    ) => void)
  | undefined

export type Poi = {} // TODO:

export interface LineConfiguration {
  /**
   * Color of the line (hex color string).
   */
  color?: string

  /**
   * Extract the elevation of a point (an item of the elevation data array).
   */
  zExtractor: (obj: NumberValue) => number // TODO: replace any
}

export interface PoiExtractor {
  /**
   * Extract the id of a POI.
   */
  id: (poi: Poi) => string

  /**
   * Extract the distance from origin of a POI.
   */
  dist: (poi: Poi) => number

  /**
   * Extract the elevation of a POI.
   */
  z: (poi: Poi, decimal?: number) => number // TODO Replace Object?

  /**
   * Extract the sequence number of a POI.
   */
  sort: (poi: Poi) => number // TODO Replace Object?

  /**
   * Extract the title of a POI.
   */
  title: (poi: Poi) => string
}

export interface ProfileFormatter {
  /**
   * Format the xhover distance.
   */
  xhover: (val: number, units: string) => string

  /**
   *  Format the yhover elevation.
   */
  yhover: (val: number, units: string) => string

  /**
   * Format the xtick, for graduating the x axis.
   */
  xtick?: (val: number, units: string) => string | number

  /**
   * Format the ytick, for graduating the y axis.
   */
  ytick?: (val: number, units: string) => string | number
}

export interface ProfileOptions {
  /**
   * Inline CSS style definition to inject in the SVG.
   */
  styleDefs?: string

  poiLabelAngle?: number

  /**
   * Formatter giving full control on how numbers are formatted.
   */
  formatter?: ProfileFormatter

  /**
   * Extract the distance from origin of a point (an item of the elevation data array)
   */
  distanceExtractor: (obj: NumberValue) => number // TODO: better signature

  /**
   * Configuration object for the profile's lines. The key string of each object is used as class for its respective svg line.
   */
  linesConfiguration: LineConfigurations

  /**
   * Extractor for parsing POI data.
   */
  poiExtractor?: PoiExtractor

  /**
   *  Whether the simplified profile should be shown.
   */
  light?: boolean

  /**
   * Show a simplified x axis with only both end ticks.
   */
  lightXAxis?: boolean

  /**
   * Allows to modify the raw x and y scales.
   * Notably, it is possible to modify the y domain according to XY ratio rules,
   * * add padding or enforce y lower bound.
   */
  scaleModifier?: ScaleModifierType

  /**
   * A callback called from the profile when the mouse moves over a point.
   * The point, an item of the elevation data array, is passed as the first
   * argument of the function.
   */
  hoverCallback?: (
    point,
    dist: number,
    xUnits: string,
    elevations: Elevations,
    yUnits: string
  ) => void

  /**
   * A callback called from the profile when the mouse leaves the profile.
   */
  outCallback?: () => void

  i18n?: { xAxis: string | undefined; yAxis: string | undefined }
}
