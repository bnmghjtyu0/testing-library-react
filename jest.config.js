const config = require("kcd-scripts/jest");

module.exports = {
  ...config,
  // we have no coverageThreshold on this project...
  coverageThreshold: {},
  testMatch: [
    "**/__tests__/**/*.+(js|jsx|ts|tsx)",
    "**/__local_tests__/**/*.+(js|jsx|ts|tsx)",
  ],
};
