const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    // baseUrl, etc
    baseUrl: 'https://glebbahmutov.com/',
    supportFile: false,
    fixturesFolder: false,
    setupNodeEvents(on, config) {
      // register the "cypress-log-to-term" plugin
      // https://github.com/bahmutov/cypress-log-to-term
      // IMPORTANT: pass the "on" callback argument
      require('cypress-log-to-term')(on)
    },
  },
})
