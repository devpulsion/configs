'use strict'

module.exports = {
  extends: [
    'eslint-config-airbnb/rules/react',
    'eslint-config-airbnb/rules/react-a11y',
    'eslint-config-airbnb/rules/react-hooks',
    'eslint-config-prettier',
    'eslint-config-prettier/react',
    './rules/react'
  ].map(require.resolve),

  env: {
    browser: true,
    es6: true,
  },

  settings: {
    react: {
      version: 'detect',
    },
  },

  "rules": {
    "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx", ".ts", ".tsx"] }]
  }
}
