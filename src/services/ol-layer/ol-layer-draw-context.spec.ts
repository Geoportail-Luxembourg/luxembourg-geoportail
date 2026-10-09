import type BaseLayer from 'ol/layer/Base'
import RenderEvent from 'ol/render/Event'

import { getLayerDrawContext } from './ol-layer-draw-context'

const eventContext = {
  canvas: 'map-container',
} as unknown as CanvasRenderingContext2D
const rendererContext = {
  canvas: 'offscreen',
} as unknown as CanvasRenderingContext2D

function renderEvent(context: CanvasRenderingContext2D) {
  return { context } as unknown as RenderEvent
}

describe('getLayerDrawContext', () => {
  it('returns the event context when the renderer has no draw context', () => {
    const olLayer = {
      getRenderer: () => ({}),
    } as unknown as BaseLayer

    expect(getLayerDrawContext(olLayer, renderEvent(eventContext))).toBe(
      eventContext
    )
  })

  it('returns the event context when the renderer context is the same', () => {
    const olLayer = {
      getRenderer: () => ({ context: eventContext }),
    } as unknown as BaseLayer

    expect(getLayerDrawContext(olLayer, renderEvent(eventContext))).toBe(
      eventContext
    )
  })

  it('returns the renderer draw context when it differs from the event context', () => {
    const olLayer = {
      getRenderer: () => ({ context: rendererContext }),
    } as unknown as BaseLayer

    expect(getLayerDrawContext(olLayer, renderEvent(eventContext))).toBe(
      rendererContext
    )
  })

  it('returns the event context when the layer has no renderer', () => {
    const olLayer = {} as unknown as BaseLayer

    expect(getLayerDrawContext(olLayer, renderEvent(eventContext))).toBe(
      eventContext
    )
  })
})
