import { defineConfig } from 'cypress'

export default defineConfig({
  e2e: {
    baseUrl: 'http://localhost:4173',
    chromeWebSecurity: false,
    specPattern: 'cypress/e2e/**/*.{cy,spec}.{js,jsx,ts,tsx}',
    screenshotOnRunFailure: false,
    video: false,
    setupNodeEvents(on, config) {
      require('@cypress/code-coverage/task')(on, config)
      // include any other plugin code...

      // It's IMPORTANT to return the config object
      // with any changed environment variables
      // console.log(JSON.stringify(config.browsers))
      config.browsers = [
        config.browsers.find(
          b => b.name === 'chromium' || b.name === 'chrome'
        )!,
      ].map(b => ({ ...b, name: 'my-chromium' }))
      config.experimentalRunAllSpecs = true
      // console.log(JSON.stringify(config, null, 4))
      return config
    },
  },
})
