import { defineConfig } from 'cypress'
import { addMatchImageSnapshotPlugin } from 'cypress-image-snapshot/plugin'

export default defineConfig({
  e2e: {
    specPattern: 'cypress/e2e/**/*.{cy,spec}.{js,jsx,ts,tsx}',
    baseUrl: 'http://localhost:4173',
    screenshotOnRunFailure: false,
    video: false,
    setupNodeEvents(on, config) {
      require('@cypress/code-coverage/task')(on, config)
      // include any other plugin code...

      addMatchImageSnapshotPlugin(on, config)

      // It's IMPORTANT to return the config object
      // with any changed environment variables
      return config
    },
  },
})
