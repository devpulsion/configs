'use strict';

module.exports = {
  extends: [
    'eslint:recommended',
    './plugins/filenames',
    './plugins/import',
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
