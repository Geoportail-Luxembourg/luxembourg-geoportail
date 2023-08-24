import olLayerGroup from 'ol/layer/Group.js'

export default function traverseLayer(layer, ancestors, visitor) {
  const descend = visitor(layer, ancestors)
  if (descend && layer instanceof olLayerGroup) {
    layer.getLayers().forEach(childLayer => {
      traverseLayer(childLayer, [...ancestors, layer], visitor)
    })
  }
}
