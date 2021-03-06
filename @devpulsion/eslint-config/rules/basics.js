'use strict';

module.exports = {
  rules: {
    // -------------------------------
    // Base
    // -------------------------------

    // https://eslint.org/docs/rules/no-console
    "no-console": 1,

    // http://eslint.org/docs/rules/no-unused-vars
    'no-unused-vars': [
      'error',
      {
        vars: 'all',
        args: 'none', // changed after-used to none
        ignoreRestSiblings: true,
      },
    ],

    // https://eslint.org/docs/rules/require-await
    'require-await': 'error',

    // -------------------------------
    // Code complexity
    // -------------------------------

    // https://eslint.org/docs/2.0.0/rules/max-depth
    'max-depth': ['warn', 6],

    // -------------------------------
    // Style
    // -------------------------------

    // https://eslint.org/docs/rules/semi
    "semi": ["error", "always"],

    // https://eslint.org/docs/rules/comma-dangle
    "comma-dangle": ["error", "always-multiline"],

    // https://eslint.org/docs/rules/max-lines
    'max-lines': [
      'warn',
      {
        max: 200,
        skipBlankLines: false,
        skipComments: true,
      },
    ],
  },
};

