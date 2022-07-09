module.exports = {
  presets: [
    [
      'module:metro-react-native-babel-preset',
      {
        useTransformReactJSXExperimental: true,
      },
    ],
  ],
  plugins: [
    [
      // NOTE: the syntax for babel.config.js is different from tsconfig.json
      // https://reactnative.dev/docs/typescript#using-custom-path-aliases-with-typescript
      'module-resolver',
      {
        root: ['./src'],
        extensions: ['.js', '.ts', '.tsx', '.json'],
        alias: {
          components: ['./src/components'],
          constants: ['./src/constants'],
          utils: ['./src/utils'],
          hooks: ['./src/hooks'],
          navigators: ['./src/navigators'],
          screens: ['./src/screens'],
          services: ['./src/services'],
        },
      },
    ],
    [
      '@babel/plugin-transform-react-jsx',
      {
        runtime: 'automatic',
      },
    ],
    'react-native-reanimated/plugin',
  ],
  env: {
    production: {
      plugins: ['react-native-paper/babel', 'transform-remove-console'],
    },
  },
};
