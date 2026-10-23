// ui.js
import FeatureHash from './featureHash.js';
import { validateFeature } from './validators.js';

document.addEventListener('DOMContentLoaded', () => {
  const featureHash = new FeatureHash();
  const encodeButton = document.getElementById('encodeButton');
  const encodedResult = document.getElementById('encodedResult');
  const decodeButton = document.getElementById('decodeButton');
  const decodedResult = document.getElementById('decodedResult');
  const copyEncodeButton = document.getElementById('copyEncodeButton');
  const copyDecodeButton = document.getElementById('copyDecodeButton');

  encodeButton.addEventListener('click', () => {
    const featureInput = document.getElementById('featureInput').value;

    try {
      // Parse the feature input as JSON
      const features = JSON.parse(featureInput);

      // Validate each feature
      for (const feature of features) {
        validateFeature(feature);
      }

      // Encode all features as a collection
      let encodedCollection = 'F';

      for (const feature of features) {
        // Encode each feature individually
        const encoded = featureHash.encodeFeature(feature);
        encodedCollection += encoded;
      }

      encodedResult.value = encodedCollection;
      showNotification('Encodage réussi.');
    } catch (error) {
      encodedResult.value = 'Erreur : ' + error.message;
      showNotification('Erreur : ' + error.message);
    }
  });

  decodeButton.addEventListener('click', () => {
    const encodedInput = document.getElementById('encodedInput').value;

    try {
      // Decode
      const decoded = featureHash.decodeFeature(encodedInput);
      decodedResult.value = JSON.stringify(decoded, null, 2);
      showNotification('Décodage réussi.');
    } catch (error) {
      decodedResult.value = 'Erreur : ' + error.message;
      showNotification('Erreur : ' + error.message);
    }
  });

  // Copy buttons
  copyEncodeButton.addEventListener('click', () => {
    copyToClipboard(
      encodedResult.value,
      'Copié dans le presse-papier.',
      'Impossible de copier.'
    );
  });

  copyDecodeButton.addEventListener('click', () => {
    copyToClipboard(
      decodedResult.value,
      'Copié dans le presse-papier.',
      'Impossible de copier.'
    );
  });
});

function copyToClipboard(text, successMessage, errorMessage) {
  if (!text) {
    showNotification('Aucun texte à copier.');
    return;
  }

  navigator.clipboard
    .writeText(text)
    .then(() => {
      showNotification(successMessage);
    })
    .catch(() => {
      showNotification(errorMessage);
    });
}

function showNotification(message) {
  // Create or reuse notification element
  let notification = document.getElementById('notification');
  if (!notification) {
    notification = document.createElement('div');
    notification.id = 'notification';
    notification.style.position = 'fixed';
    notification.style.bottom = '20px';
    notification.style.right = '20px';
    notification.style.padding = '10px 20px';
    notification.style.backgroundColor = '#333';
    notification.style.color = 'white';
    notification.style.borderRadius = '4px';
    notification.style.zIndex = '1000';
    notification.style.boxShadow = '0 2px 10px rgba(0,0,0,0.2)';
    document.body.appendChild(notification);
  }

  notification.textContent = message;
  notification.style.opacity = '1';

  // Hide after 3 seconds
  setTimeout(() => {
    notification.style.opacity = '0';
    setTimeout(() => {
      if (notification) {
        notification.remove();
      }
    }, 500);
  }, 3000);
}

export { copyToClipboard, showNotification };
