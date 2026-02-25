import type { Map } from 'ol'
import { Feature } from 'ol'
import type { Geometry } from 'ol/geom'
import JSZip from 'jszip'
import {
  geojsonToFeatures,
  gpxToFeatures,
  kmlToFeatures,
} from './ol-format/ol-format-file'

export type FileExtension = 'gpx' | 'kml' | 'kmz' | 'geojson'

export interface FileReadResult {
  content: string | ArrayBuffer
  fileName: string
  extension: FileExtension
  features: Feature<Geometry>[]
}

/**
 * Get file extension from file name
 */
export function getFileExtension(fileName: string): string | undefined {
  return fileName.split('.').pop()?.toLowerCase()
}

/**
 * Check if file extension is valid for import, valid extensions are: gpx, kml, kmz, geojson
 */
export function isValidFileExtension(
  extension: string | undefined
): extension is FileExtension {
  return (
    extension !== undefined &&
    ['gpx', 'kml', 'kmz', 'geojson'].includes(extension)
  )
}

/**
 * Read file content based on file extension and return features
 * - GPX and KML files are read as text
 * - KMZ files are read as ArrayBuffer
 */
export function readFileContent(file: File, map: Map): Promise<FileReadResult> {
  return new Promise((resolve, reject) => {
    const fileName = file.name
    const extension = getFileExtension(fileName)

    if (!isValidFileExtension(extension)) {
      reject(new Error(`Invalid file extension: ${extension}`))
      return
    }

    const reader = new FileReader()
    reader.onload = async e => {
      const content = e.target?.result

      if (!content) {
        reject(new Error('Failed to read file content'))
        return
      }

      try {
        let features: Feature<Geometry>[]
        switch (extension) {
          case 'kmz':
            features = await importFromKMZ(content as ArrayBuffer, map)
            break
          case 'kml':
            features = importFromKML(content as string, map)
            break
          case 'geojson':
            features = importFromGeoJSON(content as string, map)
            break
          case 'gpx':
          default:
            features = importFromGPX(content as string, map)
            break
        }

        resolve({
          content,
          fileName,
          extension,
          features,
        })
      } catch (error) {
        reject(error)
      }
    }

    reader.onerror = () => {
      reject(reader.error || new Error('Failed to read file'))
    }

    if (extension === 'kmz') {
      reader.readAsArrayBuffer(file)
    } else {
      reader.readAsText(file)
    }
  })
}

/**
 * Import features from KML content and add them to the map
 */
export function importFromKML(content: string, map: Map) {
  return kmlToFeatures(content, map)
}

/**
 * Import features from GPX content and add them to the map
 */
export function importFromGPX(content: string, map: Map) {
  return gpxToFeatures(content, map)
}

/**
 * Import features from GeoJSON content and add them to the map
 */
export function importFromGeoJSON(content: string, map: Map) {
  return geojsonToFeatures(content, map)
}

/**
 * Import features from KMZ content (compressed KML) and add them to the map
 * KMZ files are ZIP archives containing a KML file
 */
export async function importFromKMZ(content: ArrayBuffer, map: Map) {
  const zip = new JSZip()
  const kmz = await zip.loadAsync(content)

  // Find the KML file in the archive (usually doc.kml or the first .kml file)
  const kmlFile = Object.keys(kmz.files).find(filename =>
    filename.toLowerCase().endsWith('.kml')
  )

  if (!kmlFile) {
    throw new Error('No KML file found in KMZ archive')
  }

  const kmlContent = await kmz.files[kmlFile].async('string')
  return importFromKML(kmlContent, map)
}
