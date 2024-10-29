const createBundler = require ("@bahmutov/cypress-esbuild-preprocessor");
const { addCucumberPreprocessorPlugin } = require ("@badeball/cypress-cucumber-preprocessor");
const { createEsbuildPlugin } = require ("@badeball/cypress-cucumber-preprocessor/esbuild");
const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    specPattern: "**/*.feature",
    baseUrl: 'https://automationpratice.com.br/',
    setupNodeEvents(on, config) {
      addCucumberPreprocessorPlugin(on, config);
      on(
        "file:preprocessor",
        createBundler({
          plugins: [createEsbuildPlugin(config)],
        })
      );
      return config;

    },
  },
});
