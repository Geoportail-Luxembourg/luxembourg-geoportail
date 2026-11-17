import type { FeatureInfoJSON } from './models'

export interface GetFeatureInfoQuery {
  /** Layer ids, top first. */
  layers: (string | number)[]
  /** Clicked point in EPSG:2169. */
  point: number[]
  /** Clicked point in EPSG:3857. */
  coordinate: number[]
  /** EPSG:3857 units per pixel. */
  resolution: number
  size: number[]
  pixel: number[]
  /** EPSG:3857 view extent; derived from the other values when unset. */
  extent?: number[]
}

/** Params of the geoportail `/getfeatureinfo` service for a click. */
export function buildGetFeatureInfoParams({
  layers,
  point: [x, y],
  coordinate: [cx, cy],
  resolution,
  size: [w, h],
  pixel,
  extent,
}: GetFeatureInfoQuery): Record<string, string> {
  const [px, py] = pixel.map(Math.round)
  const box = (b: number) => [x - b, y + b, x + b, y - b].join()
  const zoom = Math.round(Math.log2(156543.03392804097 / resolution))
  return {
    layers: layers.join(),
    box1: box(20 * resolution),
    box2: box(resolution),
    srs: 'EPSG:3857',
    zoom: String(Math.min(Math.max(zoom, 0), 22)),
    BBOX: (
      extent ?? [
        cx - px * resolution,
        cy - (h - py) * resolution,
        cx + (w - px) * resolution,
        cy + py * resolution,
      ]
    ).join(),
    WIDTH: String(w),
    HEIGHT: String(h),
    X: String(px),
    Y: String(py),
  }
}

export async function fetchFeatureInfo(
  url: string,
  params: Record<string, string>,
  credentials?: RequestCredentials
): Promise<FeatureInfoJSON[]> {
  const response = await fetch(`${url}?${new URLSearchParams(params)}`, {
    credentials,
  })
  if (!response.ok) {
    throw new Error(`getfeatureinfo: HTTP ${response.status}`)
  }
  return response.json()
}

/** Applies the host's layer labels, keeping the backend's as fallback, and drops empty entries. */
export function normalizeFeatureInfo(
  content: FeatureInfoJSON[],
  labelFor: (layer: string) => string | undefined
): FeatureInfoJSON[] {
  return content
    .filter(entry => entry.features?.length)
    .map(entry => ({
      ...entry,
      layerLabel: labelFor(entry.layer) ?? entry.layerLabel,
    }))
}
