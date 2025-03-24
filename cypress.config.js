const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    experimentalRunAllSpecs: true,
    "defaultCommandTimeout" : 8000,
      "pageLoadTimeout": 150000,
       viewportWidth: 1700,
       viewportHeight: 1050,
       baseUrl: "https://www.saucedemo.com/",
       video: true,

    },

    
  
});

