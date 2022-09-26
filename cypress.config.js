const { defineConfig } = require("cypress");
module.exports = defineConfig({
  e2e: {
    baseUrl:'https://telnyx.com',
    defaultCommandTimeout:30000,
    viewportHeight:1080,
    viewportWidth:1920,
    retries: {
      runMode: 3,
      openMode: 3
    }
  }
});