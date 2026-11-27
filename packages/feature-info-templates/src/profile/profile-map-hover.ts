import {
  onBeforeUnmount,
  ref,
  toValue,
  watch,
  type MaybeRefOrGetter,
} from 'vue'
import type { LuxTplProfileMapAdapter } from '../context'
import { addLengthAlongLine, findClosestPoint } from './profile'
import type { ProfileData, ProfileDataEntry } from './profile'

/** The profile that last placed the shared map marker. */
let markerOwner: symbol | undefined

/**
 * Links a profile chart to its line on the map: pointing near the line
 * highlights the chart, hovering the chart moves the map marker. `lines` are
 * the line parts in EPSG:2169. Without `adapter` (a host without map), it does
 * nothing. Must be called from a component `setup()`.
 */
export function useProfileMapHover(
  adapter: LuxTplProfileMapAdapter | undefined,
  lines: MaybeRefOrGetter<number[][][]>,
  profileData: MaybeRefOrGetter<ProfileData | undefined>
) {
  const self = Symbol()
  const highlightDistance = ref<number>()
  let line: number[][][] = []
  let sampleLengths: number[] = []
  let mapPoint: number[] | undefined

  watch(
    [() => toValue(lines), () => toValue(profileData)],
    ([parts, data]) => {
      line = addLengthAlongLine(parts)
      sampleLengths =
        data && line.length
          ? data.map(p => findClosestPoint(line, [p.x, p.y]).point[2])
          : []
    },
    { immediate: true }
  )

  /** Places the marker, or clears it if this profile placed it last. */
  function setMarker(xy?: number[]) {
    if (xy) {
      markerOwner = self
      adapter?.setPosition(xy)
    } else if (markerOwner === self) {
      markerOwner = undefined
      adapter?.setPosition()
    }
  }

  function onHover(point: ProfileDataEntry) {
    setMarker(mapPoint ?? [point.x, point.y])
    mapPoint = undefined
  }

  function onOut() {
    setMarker()
  }

  const unlisten = adapter?.onPointerMove((xy, resolution) => {
    const data = toValue(profileData)
    if (!data?.length || !sampleLengths.length) {
      return
    }
    const { point, sqDist } = findClosestPoint(line, xy)
    if (sqDist < (8 * resolution) ** 2) {
      mapPoint = point.slice(0, 2)
      const i = sampleLengths.findIndex(along => along >= point[2])
      highlightDistance.value = data[i < 0 ? data.length - 1 : i].dist
      setMarker(mapPoint)
    } else if (highlightDistance.value !== undefined) {
      highlightDistance.value = undefined
      onOut()
    }
  })
  // Before unmount, while the host's marker watchers still run.
  onBeforeUnmount(() => {
    unlisten?.()
    onOut()
  })

  return { highlightDistance, onHover, onOut }
}
