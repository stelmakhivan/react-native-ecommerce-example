module.exports = {
  root: true,
  extends: '@react-native-community',
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
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
      },
    },
  ],
};
