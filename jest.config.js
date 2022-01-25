module.exports = {
  setupFilesAfterEnv: ['jest-plugin-context/setup'],
  testEnvironment: 'jest-environment-jsdom',
  coverageThreshold: {
    global: {
      branches: 100,
      functions: 100,
      lines: 100,
      statements: 100,
    },
  },
  moduleDirectories: ['node_modules', '<rootDir>'],
  moduleNameMapper: {
    '^@components/(.*)': '<rootDir>/src/components/$1',
    '^@api/(.*)': '<rootDir>/src/api/$1',
    '^@assets/(.*)': '<rootDir>/src/assets/$1',
    '^@hooks/(.*)': '<rootDir>/src/hooks/$1',
    '^@pages/(.*)': '<rootDir>/src/pages/$1',
    '^@style/(.*)': '<rootDir>/src/style/$1',
    '^@utils/(.*)': '<rootDir>/src/utils/$1',
  },
}
