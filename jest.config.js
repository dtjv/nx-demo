module.exports = {
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  testPathIgnorePatterns: ['<rootDir>/.next/', '<rootDir>/node_modules/'],

  // i set `baseUrl` in `tsconfig.js` (https://stackoverflow.com/a/51174924).
  moduleDirectories: ['node_modules', 'src'],
}
