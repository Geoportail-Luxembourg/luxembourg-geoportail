import { Feature } from 'ol'
import { Geometry, LineString, Polygon } from 'ol/geom'
import MultiLineString from 'ol/geom/MultiLineString'

import { ExportFeature } from './export-feature'
import { GPX } from './ol-format-gpx'

export class ExportFeatureGpx extends ExportFeature {
  /**
   * Export a Gpx file
   * @param features The features to export
   * @param fileName The file name without the file extension (file extension ".gpx" will be added here)
   * @param isTrack True if gpx should export tracks instead of routes (eg. use true for feature export, false for routing export)
   */
  export(features: Feature<Geometry>[], fileName: string, isTrack = false) {
    const explodedFeatures = this.prepareFeatures(features, isTrack)
    const content = this.generateContent(
      explodedFeatures as Feature<Geometry>[],
      fileName
    )

    this.download(fileName, content, 'gpx', 'application/gpx')
  }

  prepareFeatures(features: Feature<Geometry>[], isTrack = false) {
    features.forEach(feature => {
      const properties = feature.getProperties()

      // NB. not sure if this is used in Lux
      // LineString geometries, and tracks from MultiLineString
      if ('feature_name' in properties) {
        feature.set('name', properties['feature_name'], true)
      }
    })

    let explodedFeatures = this.exploseFeatures(features)
    if (isTrack) {
      explodedFeatures = this.changeLineToMultiline(explodedFeatures)
    } else {
      explodedFeatures = this.changeMultilineToLine(explodedFeatures)
    }

    explodedFeatures = this.changePolygonToLine(explodedFeatures)

    return explodedFeatures
  }

  generateContent(features: Feature<Geometry>[], fileName: string) {
    return new GPX().writeFeatures(this.orderFeaturesForGpx(features), {
      ...this.encodeOptions,
      ...{ metadata: { name: fileName } },
    })
  }

  /**
   * Change polygon to lines
   */
  private changePolygonToLine(features: Feature<Geometry>[]) {
    return features.map(feature => {
      const geometry = feature.getGeometry()

      if (geometry?.getType() === 'Polygon') {
        const polygon = feature.getGeometry()
        const exteriorRing =
          (<Polygon>polygon).getLinearRing(0)?.getCoordinates() || []
        const lineString = new LineString(exteriorRing)

        return this.cloneFeatureWithGeom(feature, lineString)
      }

      return feature
    })
  }

  /**
   * Change each multiline contained in the array into line geometry
   */
  private changeMultilineToLine(features: Feature<Geometry>[]) {
    return features.reduce((acc, feature) => {
      const geometry = feature.getGeometry()

      if (geometry?.getType() === 'MultiLineString') {
        const lines = (<MultiLineString>geometry).getLineStrings()
        lines.forEach(line =>
          acc.push(this.cloneFeatureWithGeom(feature, line))
        )
      } else {
        acc.push(feature)
      }

      return acc
    }, [] as Feature<Geometry>[])
  }

  /**
   * Change each line contained in the array into multiline geometry
   */
  private changeLineToMultiline(features: Feature<Geometry>[]) {
    return features.map(feature => {
      const geometry = feature.getGeometry()

      if (geometry?.getType() === 'LineString') {
        return this.cloneFeatureWithGeom(
          feature,
          new MultiLineString([(<LineString>geometry).getCoordinates()])
        )
      }

      return feature
    })
  }

  /**
   * Order the feature to have the right GPX order.
   * An optional instance of <meta />
   * An arbitrary number of instances of <wpt />
   * An arbitrary number of instances of <rte />
   * An arbitrary number of instances of <trk />
   * An optional instance of <extensions />
   * @param features The features to order
   */
  private orderFeaturesForGpx(features: Feature<Geometry>[]) {
    const points: Feature<Geometry>[] = []
    const lines: Feature<Geometry>[] = []
    const others: Feature<Geometry>[] = []

    features.forEach(feature => {
      const geomType = feature.getGeometry()?.getType()

      switch (geomType) {
        case 'Point':
          points.push(feature)
          break
        case 'LineString':
          lines.push(feature)
          break
        default:
          others.push(feature)
          break
      }
    })

    return [...points, ...lines, ...others]
  }
}
