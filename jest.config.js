module.exports = {
  transform: {
    "^.+\\.svelte$": "svelte-jester",
    "^.+\\.[t|j]sx?$": "babel-jest",
  },
  moduleFileExtensions: ["js", "svelte"],
  setupFilesAfterEnv: ["@testing-library/jest-dom/extend-expect"],
  testPathIgnorePatterns: [
    "/node_modules/",
    "lib/d3-speedometer/src/__tests__/index.js",
  ],
  transformIgnorePatterns: ["/node_modules/(?!lodash-es).+\\.js$"],
}
