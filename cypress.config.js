const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    trashAssetsBeforeRuns:true,
    video: true,
    videoCompression: 20,
    
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
