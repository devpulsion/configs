'use strict';

module.exports = {
  plugins: ['import'],
  rules: {
    "import/dynamic-import-chunkname": 1,
    "import/exports-last": 1,
    "import/extensions": 1,
    "import/first": 1,
    "import/max-dependencies": [1, { "max" : 20 }],
    "import/newline-after-import": 1,
    "import/no-absolute-path": "error",
    "import/no-anonymous-default-export": [
      1,
      {
        "allowArray": true,
        "allowArrowFunction": false,
        "allowAnonymousClass": false,
        "allowAnonymousFunction": false,
        "allowCallExpression": true,
        "allowLiteral": true,
        "allowObject": true,
      },
    ],
    "import/no-duplicates": 1,
    "import/no-named-default": 1,
    "import/no-unassigned-import": 1,
    "import/order": [1, {
      "groups": ["builtin", "external", "internal", "parent", "sibling", "index"],
      "alphabetize": {
        "order": "asc",
        "caseInsensitive": true
      }
    }],
    "import/prefer-default-export": 1,
  },
};
