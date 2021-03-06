const config = require('kcd-scripts/jest')

module.exports = {
  ...config,
  // we have no coverageThreshold on this project...
  coverageThreshold: {},
  moduleNameMapper: {
    '\\.(css|less|scss)$': 'identity-obj-proxy', // `npm install -D identity-obj-proxy`
  },
  testMatch: [
    '**/__tests__/**/*.+(js|jsx|ts|tsx)',
    '**/__local_tests__/**/*.+(js|jsx|ts|tsx)',
  ],
  collectCoverageFrom: ['src/**/*.js', '!src/service/*.js'], //應該放 .js 不是 .test.js
}
