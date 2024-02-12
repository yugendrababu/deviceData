module.exports = {
  collectCoverage: true,
  collectCoverageFrom: ["./src/**/*.js"],
  coverageReporters: ["lcov", "text"],
  moduleFileExtensions: ["js", "jsx", "json", "yml", "yaml"],
  transform: {
    "\\.ya?ml$": "yaml-jest",
    "\\.jsx?$": "babel-jest",
  },
  setupFiles: ["<rootDir>/setupTests.js"],
  testEnvironment: "node",
};
