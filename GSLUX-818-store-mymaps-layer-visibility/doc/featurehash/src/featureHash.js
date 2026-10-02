// featureHash.js
import {
  CHAR64,
  SHORT_PROP_MAP,
  LONG_TO_SHORT_MAP,
  POINT,
  LINESTRING,
  POLYGON,
} from './constants.js';

const DEBUG = false;

function debug(...args) {
  if (DEBUG) {
    // eslint-disable-next-line no-console
    console.log(...args);
  }
}

class FeatureHash {
  constructor() {
    this.CHAR64 = CHAR64;
    this.accuracy = 1;
    this.prevX = 0;
    this.prevY = 0;
    this.SHORT_PROP_MAP = SHORT_PROP_MAP;
    this.LONG_TO_SHORT_MAP = LONG_TO_SHORT_MAP;
  }

  #encodeNumber(num) {
    let encodedNumber = '';
    while (num >= 0x20) {
      encodedNumber += this.CHAR64.charAt(0x20 | (num & 0x1f));
      num >>= 5;
    }
    encodedNumber += this.CHAR64.charAt(num);
    return encodedNumber;
  }

  #encodeSignedNumber(num) {
    let signedNum = num << 1;
    if (num < 0) {
      signedNum = ~signedNum;
    }
    return this.#encodeNumber(signedNum);
  }

  #decodeCoordinates(text) {
    const len = text.length;
    let index = 0;
    const flatCoordinates = [];
    let i = 0;
    while (index < len) {
      let b;
      let shift = 0;
      let result = 0;
      do {
        b = this.CHAR64.indexOf(text.charAt(index++));
        result |= (b & 0x1f) << shift;
        shift += 5;
      } while (b >= 32);
      const dx = result & 1 ? ~(result >> 1) : result >> 1;
      this.prevX += dx;
      shift = 0;
      result = 0;
      do {
        b = this.CHAR64.indexOf(text.charAt(index++));
        result |= (b & 0x1f) << shift;
        shift += 5;
      } while (b >= 32);
      const dy = result & 1 ? ~(result >> 1) : result >> 1;
      this.prevY += dy;
      flatCoordinates[i++] = Math.floor(this.prevX * this.accuracy);
      flatCoordinates[i++] = Math.floor(this.prevY * this.accuracy);
    }
    return flatCoordinates;
  }

  #encodeCoordinates(flatCoordinates) {
    let encodedCoordinates = '';
    for (let i = 0; i < flatCoordinates.length; i += 2) {
      let x = flatCoordinates[i];
      let y = flatCoordinates[i + 1];
      x = Math.floor(x / this.accuracy);
      y = Math.floor(y / this.accuracy);
      const dx = x - this.prevX;
      const dy = y - this.prevY;
      this.prevX = x;
      this.prevY = y;
      encodedCoordinates +=
        this.#encodeSignedNumber(dx) + this.#encodeSignedNumber(dy);
    }
    return encodedCoordinates;
  }

  #resetCoordinates() {
    this.prevX = 0;
    this.prevY = 0;
  }

  /**
   * Encode une feature.
   * @param {Object} feature - La feature à encoder.
   * @returns {string} - La chaîne encodée.
   */
  encodeFeature(feature) {
    debug('Encoding feature:', feature);
    this.#resetCoordinates();

    const encodedParts = [];

    // STEP 1: Encode geometry
    const featureType = feature.type;
    const coordinates = feature.coordinates;
    const properties = feature.properties || {};

    let geometryPrefix;
    let encodedGeometryContent = '';

    if (featureType === POINT) {
      geometryPrefix = 'p';
      const flatCoordinates = [coordinates[0], coordinates[1]];
      encodedGeometryContent = this.#encodeCoordinates(flatCoordinates);
    } else if (featureType === LINESTRING) {
      geometryPrefix = 'l';
      const flatCoordinates = coordinates.flat();
      encodedGeometryContent = this.#encodeCoordinates(flatCoordinates);
    } else if (featureType === POLYGON) {
      geometryPrefix = 'a';
      // For Polygon, encode each ring separately with ' separator
      const encodedRings = [];
      for (const ring of coordinates) {
        this.#resetCoordinates();
        const flatCoordinates = ring.flat();
        const encodedRing = this.#encodeCoordinates(flatCoordinates);
        encodedRings.push(encodedRing);
      }
      encodedGeometryContent = encodedRings.join('\'');
    }

    const encodedGeometry = geometryPrefix + '(' + encodedGeometryContent + ')';
    debug('Encoded geometry:', encodedGeometry);

    // Remove the final bracket (will be added back at the end)
    const geometryWithoutBracket = encodedGeometry.substring(
      0,
      encodedGeometry.length - 1
    );
    encodedParts.push(geometryWithoutBracket);

    // STEP 2: Encode properties as key*value pairs (both SHORT and LONG)
    // Properties are encoded in the order they appear in the object
    const encodedProperties = [];

    // Convert long property keys to short ones FIRST
    const propsToEncode = {};
    for (const [key, value] of Object.entries(properties)) {
      if (this.LONG_TO_SHORT_MAP[key]) {
        // Use short key
        propsToEncode[this.LONG_TO_SHORT_MAP[key]] = value;
      } else {
        // Keep long key
        propsToEncode[key] = value;
      }
    }

    // Now encode all properties as key*value
    for (const [key, value] of Object.entries(propsToEncode)) {
      if (encodedProperties.length > 0) {
        encodedProperties.push('\'');
      }
      const sanitizedValue = String(value).replace(/[()'*]/g, '_');
      const encoded = key + '*' + encodeURIComponent(sanitizedValue);
      encodedProperties.push(encoded);
    }

    if (encodedProperties.length > 0) {
      encodedParts.push('~');
      Array.prototype.push.apply(encodedParts, encodedProperties);
    }

    // STEP 3: Add closing bracket
    encodedParts.push(')');

    const result = encodedParts.join('');
    debug('Final encoded feature:', result);
    return result;
  }

  /**
   * Décode une feature.
   * @param {string} encodedText - La chaîne encodée.
   * @returns {Object} - La feature décodée.
   */
  decodeFeature(encodedText) {
    try {
      // First decode the URL-encoded string
      const decodedUrlString = decodeURIComponent(encodedText);

      // Check if it's a collection of features (starts with 'F')
      if (decodedUrlString.startsWith('F')) {
        return this.#decodeFeaturesCollection(decodedUrlString);
      } else {
        return [this.#decodeSingleFeature(decodedUrlString)];
      }
    } catch (error) {
      debug('Error decoding feature:', error);
      throw new Error('JSON invalide.');
    }
  }

  #decodeFeaturesCollection(encodedText) {
    const features = [];
    encodedText = encodedText.substring(1); // Remove the 'F' prefix

    // Find each feature by looking for the next geometry type (a, p, or l) followed by (
    while (encodedText.length > 0) {
      // Check if this position starts with a geometry type
      if (!/^[apl]\(/i.test(encodedText)) {
        break;
      }

      // Find the next feature's geometry type (a(, p(, or l(
      let nextFeatureIndex = -1;
      const remainingText = encodedText.substring(1);
      for (let i = 0; i < remainingText.length; i++) {
        if (
          (remainingText[i] === 'a' ||
            remainingText[i] === 'p' ||
            remainingText[i] === 'l') &&
          i + 1 < remainingText.length &&
          remainingText[i + 1] === '('
        ) {
          nextFeatureIndex = i + 1;
          break;
        }
      }

      // Extract current feature text
      let featureText;
      if (nextFeatureIndex === -1) {
        // This is the last feature
        featureText = encodedText;
        encodedText = '';
      } else {
        featureText = encodedText.substring(0, nextFeatureIndex);
        encodedText = encodedText.substring(nextFeatureIndex);
      }

      try {
        const feature = this.#decodeSingleFeature(featureText);
        features.push(feature);
      } catch (error) {
        debug('Error decoding individual feature:', error);
      }
    }
    return features;
  }

  #decodeSingleFeature(encodedText) {
    debug('Decoding single feature:', encodedText);
    this.#resetCoordinates();

    try {
      // Remove trailing )
      if (encodedText.endsWith(')')) {
        encodedText = encodedText.substring(0, encodedText.length - 1);
      }

      // Extract geometry and properties by looking for ~
      const firstSplitIndex = encodedText.indexOf('~');
      let geometryText;
      let propertiesText = '';

      if (firstSplitIndex >= 0) {
        geometryText = encodedText.substring(0, firstSplitIndex);
        propertiesText = encodedText.substring(firstSplitIndex + 1);
      } else {
        geometryText = encodedText;
      }

      debug('Geometry text:', geometryText);
      debug('Properties text:', propertiesText);

      // Decode geometry: format is TYPE(COORDINATES)
      const geometryType = geometryText.charAt(0);
      const startParen = geometryText.indexOf('(');

      // Extract coordinates: everything between ( and the end (no closing ) since we removed it)
      let coordinatesText = geometryText.substring(startParen + 1);

      debug('Geometry type:', geometryType);
      debug('Coordinates text:', coordinatesText);

      const flatCoordinates = this.#decodeCoordinates(coordinatesText);

      let coordinates;
      if (geometryType === 'p') {
        coordinates = [flatCoordinates[0], flatCoordinates[1]];
      } else if (geometryType === 'l') {
        coordinates = [];
        for (let i = 0; i < flatCoordinates.length; i += 2) {
          coordinates.push([flatCoordinates[i], flatCoordinates[i + 1]]);
        }
      } else if (geometryType === 'a') {
        coordinates = [];
        const rings = coordinatesText.split('\'');
        for (const ring of rings) {
          if (ring.trim() === '') continue;
          this.#resetCoordinates();
          const ringCoordinates = [];
          const ringFlatCoordinates = this.#decodeCoordinates(ring);
          for (let i = 0; i < ringFlatCoordinates.length; i += 2) {
            ringCoordinates.push([
              ringFlatCoordinates[i],
              ringFlatCoordinates[i + 1],
            ]);
          }
          coordinates.push(ringCoordinates);
        }
      }

      debug('Decoded coordinates:', coordinates);

      // Decode properties with mapping
      const properties = {};
      if (propertiesText) {
        const parts = propertiesText.split('\'');
        for (const part of parts) {
          if (part.trim() === '') continue;
          const keyVal = part.split('*');
          if (keyVal.length === 2) {
            let key = keyVal[0];
            let value = keyVal[1];

            // Map short property names to long ones
            if (this.SHORT_PROP_MAP[key]) {
              key = this.SHORT_PROP_MAP[key];
            }
            try {
              value = decodeURIComponent(value);
            } catch (e) {
              // Keep original value if decoding fails
            }

            // Convert string values to appropriate types
            if (
              key === 'isLabel' ||
              key === 'isCircle' ||
              key === 'showOrientation'
            ) {
              value = value === 'true';
            } else if (
              key === 'angle' ||
              key === 'opacity' ||
              key === 'stroke' ||
              key === 'size'
            ) {
              value = parseFloat(value);
            }

            properties[key] = value;
          }
        }
      }

      debug('Decoded properties:', properties);

      // Determine feature type
      let featureType;
      if (geometryType === 'p') {
        featureType = POINT;
      } else if (geometryType === 'l') {
        featureType = LINESTRING;
      } else if (geometryType === 'a') {
        featureType = POLYGON;
      }

      const result = {
        type: featureType,
        coordinates: coordinates,
        properties: properties,
      };

      debug('Decoded feature:', result);
      return result;
    } catch (error) {
      debug('Error decoding single feature:', error);
      throw error;
    }
  }
}

export default FeatureHash;
