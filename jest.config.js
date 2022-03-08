module.exports = {
  collectCoverage: true,
  coverageDirectory: 'coverage',
  collectCoverageFrom: ['**/src/**/*.js'],
  coverageProvider: 'v8',
  preset: '@shelf/jest-mongodb'
}
