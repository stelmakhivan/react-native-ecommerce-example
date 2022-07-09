module.exports = {
  preset: 'react-native',
  setupFilesAfterEnv: ['./jest.setup.js'],
  transformIgnorePatterns: [
    'node_modules/(?!(jest-)?@?react-native|@react-native-community|@react-navigation)',
  ],
  cacheDirectory: '.jest',
  coveragePathIgnorePatterns: [
    'src/constants',
    'src/utils/getTestID',
    '.types.ts',
  ],
  clearMocks: true,
};
