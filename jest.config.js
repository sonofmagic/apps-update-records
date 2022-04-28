/** @type {import('@jest/types').Config.InitialOptions} */
const config = {
  testEnvironment: "jsdom",
  verbose: true,
  setupFilesAfterEnv: ['./jest.setup.js'],
  testResultsProcessor: "./node_modules/jest-html-reporter",
  reporters: [
    "default",
    ["jest-html-reporter", {
      pageTitle: "Unit Tests",
      outputPath: "./report/test-report.html",
      includeFailureMsg: true      
    }
    ]
  ],
  coverageReporters: ['html']
};
module.exports = config;
