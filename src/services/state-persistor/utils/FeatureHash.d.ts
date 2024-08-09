declare module './FeatureHash.ts' {
  interface FeatureHashOptions {
    encodeStyles: boolean
    properties: (feature: import('ol').Feature<import('ol/geom/Geometry')>) => {
      [key: string]: string | number
    }
  }

  class FeatureHash {
    constructor(options: FeatureHashOptions)
    writeFeatures(): void
  }

  export default FeatureHash
}
