import type BaseLayer from 'ol/layer/Base'
import RenderEvent from 'ol/render/Event'

/**
 * Canvas vector layers with layer opacity !== 1 draw into an offscreen canvas
 * and composite it after POSTRENDER. `event.context` is then the map container,
 * so clipping it has no effect on what was drawn. Return the live draw context.
 */
export function getLayerDrawContext(
  olLayer: BaseLayer,
  event: RenderEvent
): CanvasRenderingContext2D {
  const renderer = (
    olLayer as unknown as {
      getRenderer?: () => { context?: CanvasRenderingContext2D }
    }
  ).getRenderer?.()
  const drawContext = renderer?.context

  return drawContext && drawContext !== event.context
    ? drawContext
    : (event.context as CanvasRenderingContext2D)
}
