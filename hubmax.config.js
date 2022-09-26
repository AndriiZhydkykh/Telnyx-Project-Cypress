const { defineConfig } = require("cypress");
module.exports = defineConfig({
  e2e: {
    baseUrl:'https://telnyx.com',
    defaultCommandTimeout:30000,
    viewportHeight:800,
    viewportWidth:1280
    
  }
});
