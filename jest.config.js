/** @type {import('@jest/types').Config.InitialOptions} */
const config = {
  testEnvironment: "jsdom",
  verbose: true,
  setupFilesAfterEnv: ['./jest.setup.js']
};
module.exports = config;
