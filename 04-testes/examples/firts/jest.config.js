export default {
  transform: {
    "^.+\\.m?js$": "babel-jest",
  },
  moduleFileExtensions: ["js", "mjs"],
  testEnvironment: "node",
  clearMocks: true,
};