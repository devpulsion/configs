'use strict';

module.exports = {
  plugins: ['filenames'],
  rules: {
    'filenames/match-exported': 1,
    'filenames/match-regex': [2, "^[a-zA-Z][a-zA-Z0-9]*$", true], // 
    "filenames/no-index": 0, // allow index.js
  },
};
