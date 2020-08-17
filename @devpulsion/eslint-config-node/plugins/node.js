'use strict';

module.exports = {
  plugins: ['node'],
  extends: ['plugin:node/recommended-script'],
  rules: {
    'node/no-missing-import': 'off', // handled by import plugin
    'node/no-unpublished-require': 'off', // import plugin
    'node/no-extraneous-require': 'off',
    'node/no-process-exit': 'off',

    'node/no-unsupported-features/es-syntax': 'off',

    'node/process-exit-as-throw': 'error',
    'node/shebang': 'warn',
    'node/no-deprecated-api': 'warn',


  },
};
