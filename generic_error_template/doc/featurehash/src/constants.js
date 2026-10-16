// constants.js
// Types géométriques
const POINT = 'Point';
const LINESTRING = 'LineString';
const POLYGON = 'Polygon';

// Mapping des propriétés courtes vers longues
const SHORT_PROP_MAP = {
  a: 'angle',
  c: 'color',
  d: 'description',
  e: 'stroke',
  i: 'isLabel',
  l: 'linestyle',
  n: 'name',
  o: 'opacity',
  r: 'showOrientation',
  s: 'shape',
  t: 'size',
  u: 'isCircle',
};

// Caractères d'encodage
const CHAR64 =
  '.-_!*ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789abcdefghjkmnpqrstuvwxyz';

// Générer automatiquement LONG_TO_SHORT_MAP à partir de SHORT_PROP_MAP
const LONG_TO_SHORT_MAP = {};
for (const [shortKey, longKey] of Object.entries(SHORT_PROP_MAP)) {
  LONG_TO_SHORT_MAP[longKey] = shortKey;
}

export {
  POINT,
  LINESTRING,
  POLYGON,
  SHORT_PROP_MAP,
  LONG_TO_SHORT_MAP,
  CHAR64,
};
