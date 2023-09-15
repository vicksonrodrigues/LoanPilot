module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['airbnb', 'prettier'],
  overrides: [
    {
      env: {
        node: true,
      },
      files: ['.eslintrc.{js,cjs}'],
      parserOptions: {
        sourceType: 'script',
      },
    },
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['prettier'],
  rules: {
    'prettier/prettier': 'error',
    'import/no-unresolved': 'off',
    'react/jsx-filename-extension': 'off',
    'max-len': [1, 200],
    'no-shadow': 0,
    'no-plusplus': 0,
    'react/prop-types': [
      1,
      {
        skipUndeclared: true,
      },
    ],
    'react/function-component-definition': [
      'error',
      {
        namedComponents: ['function-declaration', 'arrow-function'],
        unnamedComponents: 'arrow-function',
      },
    ],
  },
};
