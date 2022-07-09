module.exports = {
  root: true,
  extends: [
    '@react-native-community',
    'plugin:jest/recommended',
    'plugin:jest-formatting/strict',
    'plugin:lodash/recommended',
  ],
  parser: '@typescript-eslint/parser',
  plugins: [
    'lodash',
    '@typescript-eslint',
    'jest',
    'testing-library',
    'jest-formatting',
  ],
  settings: {
    'import/ignore': ['react-native'],
    'import/resolver': {
      typescript: {
        alwaysTryTypes: true,
        project: './tsconfig.json',
      },
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    },
  },
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      rules: {
        '@typescript-eslint/no-shadow': ['error'],
        'no-shadow': 'off',
        'no-undef': 'off',
        'react/jsx-curly-brace-presence': [
          'warn',
          {props: 'never', children: 'never'},
        ],
        'no-console': ['error', {allow: ['warn', 'error']}],
        '@typescript-eslint/no-explicit-any': ['error'],
        '@typescript-eslint/ban-ts-comment': ['error'],
        'react/react-in-jsx-scope': 'off',
        'lodash/prefer-noop': 'off',
        'lodash/prefer-constant': 'off',
        'lodash/prefer-lodash-method': 'off',
      },
    },
    {
      files: ['**/__tests__/**/*.[jt]s?(x)', '**/?(*.)+(spec|test).[jt]s?(x)'],
      extends: ['plugin:testing-library/react'],
      rules: {
        'testing-library/await-async-query': 'error',
        'testing-library/no-await-sync-query': 'error',
        'testing-library/prefer-screen-queries': 'off',
        'testing-library/render-result-naming-convention': 'off',
        'testing-library/no-node-access': 'off',
      },
    },
  ],
};
