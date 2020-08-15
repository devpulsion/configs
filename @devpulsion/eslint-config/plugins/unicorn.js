'use strict';

module.exports = {
  plugins: ['unicorn'],
  rules: {
      // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/master/docs/rules/better-regex.md
      "unicorn/better-regex": "error",

      // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/master/docs/rules/catch-error-name.md
      "unicorn/catch-error-name": [
        "error", 
        { 
          "name": 'err', 
          "ignore": ["^error$", "^.*Error$"],
        }
      ],

      // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/master/docs/rules/consistent-function-scoping.md
      "unicorn/consistent-function-scoping": "off",
      
			// https://github.com/sindresorhus/eslint-plugin-unicorn/blob/master/docs/rules/custom-error-definition.md
      "unicorn/custom-error-definition": "error",
      
      // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/master/docs/rules/error-message.md
			"unicorn/error-message": "error",
      
      // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/master/docs/rules/escape-case.md
      "unicorn/escape-case": "error",

      // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/master/docs/rules/expiring-todo-comments.md
      "unicorn/expiring-todo-comments": ["error", { "allowWarningComments": false } ],
      
      // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/master/docs/rules/explicit-length-check.md
			"unicorn/explicit-length-check": "error",
      
      // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/master/docs/rules/filename-case.md
      "unicorn/filename-case": "off",
      
      // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/master/docs/rules/import-index.md
      "unicorn/import-index": "error",
      
			// https://github.com/sindresorhus/eslint-plugin-unicorn/blob/master/docs/rules/new-for-builtins.md
      "unicorn/new-for-builtins": "error",

      // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/master/docs/rules/no-abusive-eslint-disable.md
			"unicorn/no-abusive-eslint-disable": "error",
      
      // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/master/docs/rules/no-array-instanceof.md
      "unicorn/no-array-instanceof": "error",
      
      // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/master/docs/rules/no-fn-reference-in-iterator.md
      "unicorn/no-fn-reference-in-iterator": "off",
      
      // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/master/docs/rules/no-for-loop.md
      "unicorn/no-for-loop": "off",
      
      // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/master/docs/rules/no-hex-escape.md
      "unicorn/no-hex-escape": "error",
      
      // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/master/docs/rules/no-keyword-prefix.md
      "unicorn/no-keyword-prefix": "off",
      
      // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/master/docs/rules/no-nested-ternary.md
			"no-nested-ternary": "off",
      "unicorn/no-nested-ternary": "error",
      
      // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/master/docs/rules/no-new-buffer.md
      "unicorn/no-new-buffer": "error",
      
      // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/master/docs/rules/no-process-exit.md
      "unicorn/no-process-exit": "error",
      
      // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/master/docs/rules/no-unsafe-regex.md
      "unicorn/no-unsafe-regex": "off",
      
      // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/master/docs/rules/no-zero-fractions.md
      "unicorn/no-zero-fractions": "error",
      
      // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/master/docs/rules/number-literal-case.md
      "unicorn/number-literal-case": "error",
      
      // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/master/docs/rules/prefer-add-event-listener.md
      "unicorn/prefer-add-event-listener": "error",
      
      // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/master/docs/rules/prefer-dataset.md
      "unicorn/prefer-dataset": "error",
      
      // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/master/docs/rules/prefer-event-key.md
      "unicorn/prefer-event-key": "off",
      
      // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/master/docs/rules/prefer-flat-map.md
      "unicorn/prefer-flat-map": "offr",
      
      // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/master/docs/rules/prefer-includes.md
      "unicorn/prefer-includes": "error",
      
      "unicorn/prefer-modern-dom-apis": "error",
      
      // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/master/docs/rules/prefer-negative-index.md
      "unicorn/prefer-negative-index": "error",
      
      
      
      // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/master/docs/rules/prefer-node-remove.md
			"unicorn/prefer-node-remove": "error",
      
      // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/master/docs/rules/prefer-reflect-apply.md
			"unicorn/prefer-reflect-apply": "off",

      // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/master/docs/rules/prefer-starts-ends-with.md
      "unicorn/prefer-starts-ends-with": "error",
      
      // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/master/docs/rules/prefer-string-slice.md
      "unicorn/prefer-string-slice": "error",
      
      // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/master/docs/rules/prefer-text-content.md
      "unicorn/prefer-text-content": "error",
      
      // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/master/docs/rules/prefer-trim-start-end.md
      "unicorn/prefer-trim-start-end": "error",
      
      // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/master/docs/rules/prefer-type-error.md
      "unicorn/prefer-type-error": "error",
      
      // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/master/docs/rules/prevent-abbreviations.md
      "unicorn/prevent-abbreviations": "off",
      
      // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/master/docs/rules/throw-new-error.md
			"unicorn/throw-new-error": "error",


      "unicorn/prefer-node-append": "error",
      "unicorn/import-style": "error",
      "unicorn/no-console-spaces": "error",
      "unicorn/no-null": "error",
      "unicorn/no-object-as-default-parameter": "error",
      "unicorn/no-reduce": "error",
      "unicorn/no-unreadable-array-destructuring": "error",
      "unicorn/no-unused-properties": "off",
      "unicorn/no-useless-undefined": "error",
      "unicorn/prefer-array-find": "error",
      "unicorn/prefer-number-properties": "error",
      "unicorn/prefer-optional-catch-binding": "error",
      "unicorn/prefer-query-selector": "error",
      "unicorn/prefer-replace-all": "off",
      "unicorn/prefer-set-has": "error",
      "unicorn/prefer-spread": "error",
      "unicorn/string-content": "off"
  },
};