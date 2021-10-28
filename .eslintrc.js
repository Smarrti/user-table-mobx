module.exports = {
  env: {
    browser: true,
    es2021: true,
    'react-native/react-native': true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    '@react-native-community',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['react', 'import'],
  rules: {
    quotes: [
      'error',
      'single',
      {
        avoidEscape: true,
        allowTemplateLiterals: true,
      },
    ],
    'padding-line-between-statements': [
      'error',
      {
        blankLine: 'always',
        prev: '*',
        next: 'return',
      },
      {
        blankLine: 'always',
        prev: '*',
        next: 'case',
      },
      {
        blankLine: 'always',
        prev: '*',
        next: 'default',
      },
      {
        blankLine: 'always',
        prev: '*',
        next: 'block-like',
      },
    ],
    'prefer-const': ['error'],

    'max-lines': ['error', 500],
    'no-console': 'error',
    'object-shorthand': 'error',
    'no-unneeded-ternary': 'error',
    'no-nested-ternary': 'error',
    'newline-before-return': 'warn',
    semi: ['error', 'never'],

    'import/newline-after-import': 'error',
    'import/no-cycle': 'error',
    'import/no-unused-modules': 'error',
    'import/no-default-export': 'error',

    // react
    'react/jsx-filename-extension': ['error', { extensions: ['.js', '.tsx'] }],
    'react/sort-comp': 'warn',
    'react/jsx-closing-bracket-location': 'error',

    // react-native
    'react-native/no-unused-styles': 'error',
    'react-native/split-platform-components': 'warn',
    'react-native/no-color-literals': 'error',
    'react-native/no-single-element-style-arrays': 'error',
  },
}
