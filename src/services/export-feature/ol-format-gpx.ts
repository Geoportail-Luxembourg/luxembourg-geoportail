import { Feature } from 'ol'
import { WriteOptions } from 'ol/format/Feature'
import olFormatGPX from 'ol/format/GPX'
import { writeStringTextNode } from 'ol/format/xsd'
import { Geometry } from 'ol/geom'
import { createElementNS } from 'ol/xml'

export type WriteOptionsGPX = WriteOptions & { metadata: { name: string } }

/**
 * This class provides support for metadata name in GPX and it extends "ol.format.GPX"
 */
export class GPX extends olFormatGPX {
  /**
   * Encode an array of features in the GPX format as an XML node.
   * LineString geometries are output as routes (`<rte>`), and MultiLineString
   * as tracks (`<trk>`)
   */
  writeFeaturesNode(
    features: Feature<Geometry>[],
    opt_options: WriteOptionsGPX
  ) {
    const gpx = super.writeFeaturesNode(features, opt_options)

    if ('metadata' in opt_options && 'name' in opt_options.metadata) {
      const GPXNS = 'http://www.topografix.com/GPX/1/1'
      const metadataEle = createElementNS(GPXNS, 'metadata')
      const nameEle = createElementNS(GPXNS, 'name')

      writeStringTextNode(nameEle, opt_options.metadata.name)
      metadataEle.appendChild(nameEle)

      if (gpx.childNodes.length > 0) {
        gpx.insertBefore(metadataEle, gpx.childNodes[0])
      } else {
        gpx.appendChild(metadataEle)
      }
    }

    return gpx
  }
}
