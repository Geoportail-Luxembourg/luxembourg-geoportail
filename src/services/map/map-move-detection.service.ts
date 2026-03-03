/**
 * Singleton service to manage map move detection behavior
 * Allows side-panel to ignore map movements immediately after opening
 */

let mapMoveDetectionInstance: {
  ignoreNextMoveEndEvent: (durationMs?: number) => void
} | null = null

export function setMapMoveDetectionInstance(instance: {
  ignoreNextMoveEndEvent: (durationMs?: number) => void
}) {
  mapMoveDetectionInstance = instance
}

export function getMapMoveDetectionInstance() {
  return mapMoveDetectionInstance
}

export function ignoreNextMapMove(durationMs: number = 300) {
  mapMoveDetectionInstance?.ignoreNextMoveEndEvent(durationMs)
}
