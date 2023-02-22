import OlMap from 'ol/Map'

export {}

declare global {
  interface Window {
    olMap: OlMap
  }
}
