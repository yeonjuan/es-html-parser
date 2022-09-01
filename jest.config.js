/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
  preset: "ts-jest",
  testEnvironment: "node",
  testMatch: ["**/*.spec.ts"],
  collectCoverageFrom: ["src/**/*.ts"],
  coveragePathIgnorePatterns: ["index.ts", "__output__", "__input__"],
};
