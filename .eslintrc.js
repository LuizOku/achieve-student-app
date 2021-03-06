module.exports = {
  env: {
    es2021: true,
    es6: true,
  },
  extends: [
    'airbnb',
    'prettier',
    'eslint:recommended',
    'plugin:react/recommended',
  ],
  parser: '@babel/eslint-parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    requireConfigFile: false,
    sourceType: 'module',
  },
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
    __DEV__: true,
  },
  plugins: [
    'react',
    'prettier',
    'react-hooks',
    'eslint-plugin-import-helpers',
    'import-helpers',
  ],
  rules: {
    'prettier/prettier': 'error',
    camelcase: 'off',
    'consistent-return': 'off',
    'global-require': 'off',
    semi: ['error', 'always'],
    'no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
    'no-param-reassign': 'off',
    'no-underscore-dangle': 'off',
    'no-nested-ternary': 'off',
    'no-console': ['error', { allow: ['log'] }],
    'no-use-before-define': [
      'error',
      { functions: true, classes: true, variables: false },
    ],
    'react/prop-types': [
      'error',
      { skipUndeclared: true, ignore: ['style', 'className'] },
    ],
    'react/forbid-prop-types': 'off',
    'react/jsx-filename-extension': ['warn', { extensions: ['.jsx', '.js'] }],
    'react/jsx-one-expression-per-line': 'off',
    'react/jsx-props-no-spreading': [0],
    'react/display-name': [0],
    'react-native/no-raw-text': 'off',
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    'import/extensions': ['error', { js: 'never', jsx: 'never' }],
    'react/style-prop-object': 'off',
    'import/prefer-default-export': 'off',
    'import/no-extraneous-dependencies': 'off',
    'react/no-unstable-nested-components': 'off',
    'default-param-last': 'off',
    'import-helpers/order-imports': [
      'warn',
      {
        newlinesBetween: 'always',
        groups: [
          '/^react/',
          'module',
          '/^~.*/',
          '/^./modules/',
          ['parent', 'sibling', 'index'],
        ],
        alphabetize: { order: 'asc', ignoreCase: true },
      },
    ],
  },
};
