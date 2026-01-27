import { Ref } from 'vue'

/**
 * Check if any active mode is enabled (draw, edit, measure, lidar draw, or elevation profile draw)
 */
export function isInActiveMode(
  drawStateActive: Ref<string | undefined>,
  editStateActive: Ref<string | undefined>,
  measureActive: Ref<boolean>,
  measureToolbarOpen: Ref<boolean>,
  drawLidarActive: Ref<boolean>,
  drawElevationProfileActive: Ref<boolean>
): boolean {
  return (
    drawStateActive.value !== undefined ||
    editStateActive.value !== undefined ||
    measureActive.value === true ||
    measureToolbarOpen.value === true ||
    drawLidarActive.value === true ||
    drawElevationProfileActive.value === true
  )
}
