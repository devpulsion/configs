'use strict';

module.exports = {
  extends: [
    'eslint-config-airbnb-base',
    './plugins/filenames',
    './plugins/prettier',
    './plugins/unicorn',
    './rules/basics',
  ].map(require.resolve),

  parserOptions: {
    sourceType: 'script',
  },

  rules: {
    strict: ['error', 'safe'],
  },
};
