// app.js
import FeatureHash from './featureHash.js';
import { validateFeature } from './validators.js';
import './ui.js';

// Expose for testing
if (typeof window !== 'undefined') {
  window.FeatureHash = FeatureHash;
  window.validateFeature = validateFeature;
}

export { FeatureHash, validateFeature };
