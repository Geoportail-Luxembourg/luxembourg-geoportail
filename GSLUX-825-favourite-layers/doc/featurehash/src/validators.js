// validators.js

/**
 * Valide une feature GeoJSON.
 * @param {Object} feature - La feature à valider.
 * @throws {Error} - Lance une erreur si la feature est invalide.
 */
function validateFeature(feature) {
  if (!feature) {
    throw new Error('Feature manquante.');
  }

  if (!feature.type) {
    throw new Error('Type de géométrie invalide.');
  }

  const validTypes = ['Point', 'LineString', 'Polygon'];
  if (!validTypes.includes(feature.type)) {
    throw new Error('Type de géométrie invalide.');
  }

  if (!feature.coordinates) {
    throw new Error('Coordonnées manquantes.');
  }

  // Validation spécifique au type
  switch (feature.type) {
  case 'Point':
    if (
      !Array.isArray(feature.coordinates) ||
        feature.coordinates.length !== 2
    ) {
      throw new Error(
        'Les coordonnées du Point doivent être un tableau de deux nombres.'
      );
    }
    break;
  case 'LineString':
    if (
      !Array.isArray(feature.coordinates) ||
        feature.coordinates.length === 0
    ) {
      throw new Error(
        'Les coordonnées de la LineString doivent être un tableau non vide.'
      );
    }
    break;
  case 'Polygon':
    if (
      !Array.isArray(feature.coordinates) ||
        feature.coordinates.length === 0
    ) {
      throw new Error(
        'Les coordonnées du Polygon doivent être un tableau non vide.'
      );
    }
    break;
  }
}

export { validateFeature };
