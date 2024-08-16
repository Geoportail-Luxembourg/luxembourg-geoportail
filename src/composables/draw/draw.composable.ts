import { watch } from 'vue'
import { storeToRefs } from 'pinia'
import Draw from 'ol/interaction/Draw'

import { useDrawStore } from '@/stores/draw.store'
import useDrawInteraction from './draw-interaction.composable'

type DrawInteractions = {
  drawPoint: Draw
  drawLabel: Draw
  drawLine: Draw
  drawCircle: Draw
  drawPolygon: Draw
}

export default function useDraw() {
  const { drawStateActive } = storeToRefs(useDrawStore())
  const drawInteractions = {
    drawPoint: useDrawInteraction({ type: 'Point' }).drawInteraction,
    drawLabel: useDrawInteraction({ type: 'Point' }).drawInteraction,
    drawLine: useDrawInteraction({ type: 'LineString' }).drawInteraction,
    drawCircle: useDrawInteraction({ type: 'Circle' }).drawInteraction,
    drawPolygon: useDrawInteraction({ type: 'Polygon' }).drawInteraction,
  } as DrawInteractions

  watch(drawStateActive, () => {
    Object.keys(drawInteractions).forEach(key => {
      if (`${[key as keyof DrawInteractions]}` === `${drawStateActive.value}`) {
        drawInteractions[key as keyof DrawInteractions].setActive(true)
      } else {
        drawInteractions[key as keyof DrawInteractions].setActive(false)
      }
    })
    // todo: set messages from DrawController.onChangeActive_ here and implement modal to display them
  })

  return {}
}
