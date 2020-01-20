const path = require('path')
const projectPath = path.resolve(__dirname, './')
const pathToSrc = path.resolve(projectPath, 'src')

module.exports = {
  parser: 'babel-eslint',
  env: {
    es6: true,
    browser: true,
    node: true
  },
  globals: {
    expect: true,
    React: true,
    jQuery: true
  },
  plugins: ['react', 'prettier', 'react-hooks'],
  extends: ['standard', 'plugin:prettier/recommended'],
  parserOptions: {
    ecmaFeatures: { jsx: true },
    sourceType: 'module'
  },
  rules: {
    'prettier/prettier': ['error'],
    'arrow-parens': ['off', 'as-needed', { requireForBlockBody: true }],
    camelcase: 'off',
    'comma-dangle': 'off',
    'no-console': ['error', { allow: ['warn', 'error', 'log'] }],
    'no-return-assign': 'off',
    'no-trailing-spaces': 'off',
    'no-undef': 'error',
    'no-unused-vars': 'warn',
    'one-var': ['off'],
    'padded-blocks': 'off',
    quotes: ['warn', 'single', { allowTemplateLiterals: true }],
    'react/jsx-boolean-value': 'warn',
    'react/jsx-curly-brace-presence': 'off',
    'react/jsx-no-undef': 'error',
    'react/jsx-uses-react': 'warn',
    'react/jsx-uses-vars': 'warn',
    'react/no-string-refs': 'warn',
    'react/no-this-in-sfc': 'error',
    'react/no-unescaped-entities': 'warn',
    'react/no-unused-prop-types': 'warn',
    'react/no-unused-state': 'warn',
    'react/prop-types': 'off',
    'space-before-function-paren': 'off',
    'spaced-comment': 'off',
    'react-hooks/rules-of-hooks': 'error', // Checks rules of Hooks
    'react-hooks/exhaustive-deps': 'warn' // Checks effect dependencies
  },
  settings: {
    'import/resolver': {
      'babel-module': {}
    }
  }
}
