module.exports = {
  root: true,
  env: {
    browser: true,
    jest: true,
  },
  plugins: ['jest'],
  extends: ['eslint:recommended', 'react-app', 'plugin:prettier/recommended'],
  parserOptions: {
    parser: 'babel-eslint',
  },
  rulse: {
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-unused-vars': 'warn',
    'prettier/prettier': [
      'error',
      {
        endOfLine: 'auto',
      },
    ],
  },
};
