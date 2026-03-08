const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {},
    // Bu satır her yerdeki .cy.js dosyalarını bulur:
    specPattern: "**/*.cy.js",
    supportFile: false
  },
});
