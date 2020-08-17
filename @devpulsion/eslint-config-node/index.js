'use strict';

module.exports = {
  extends: ['./plugins/node'].map(require.resolve),

  env: {
    browser: false,
    es6: true,
    node: true,
  },

  rules: {
    'callback-return': 'off',
    'global-require': 'off',
    'handle-callback-err': 'off',
    'no-buffer-constructor': 2,
    'no-mixed-requires': 'off',
    'no-new-require': 'off',
    'no-path-concat': 'off',
    'no-process-env': 'warn',
    'no-process-exit': 'warn',
    'no-restricted-modules': 'off',
    'no-sync': 'off',
    'prefer-named-capture-group': 'off',
  },
};
