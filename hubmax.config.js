const { defineConfig } = require("cypress");
module.exports = defineConfig({
  e2e: {
    baseUrl:'https://telnyx.com',
    defaultCommandTimeout:30000,
    pageLoadTimeout: 500000,
    viewportHeight:800,
    viewportWidth:1280,
    retries: {
      runMode: 3,
      openMode: 3
    }
    
  }
});
