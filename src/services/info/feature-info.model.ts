/**
 * The feature-info models are owned by `@geoportallux/feature-info-templates` —
 * they are the wire format the templates render, so the package is the single
 * source of truth and the 3D viewer consumes the same definitions.
 *
 * This module stays as the app-facing path so existing `@/services/info/...`
 * imports keep working.
 */
export type {
  FeatureJSON,
  GeometryJSON,
  FeatureMeasurement,
  Attributes,
  FeatureInfoJSON,
  AttributeEntry,
} from '@geoportallux/feature-info-templates'
