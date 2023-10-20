const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://systest-app.enum.africa/signup',
    watchForFileChanges: false,
    
    defaultCommandTimeout: 30000,
    requestTimeout: 30000,
    responseTimeout: 30000,
    viewportHeight: 800,
    viewportWidth: 1400,
    testIsolation: false,
    experimentalSourceRewriting: true,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
