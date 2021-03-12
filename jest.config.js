module.exports = {
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  testPathIgnorePatterns: ['<rootDir>/.next/', '<rootDir>/node_modules/'],
  moduleNameMapper: {
    '@/(.*)': '<rootDir>/src/$1',
    '@/hooks/(.*)': '<rootDir>/hooks/$1',
    '@/layouts/(.*)': '<rootDir>/layouts/$1',
    '@/components/(.*)': '<rootDir>/components/$1',
  },
}
