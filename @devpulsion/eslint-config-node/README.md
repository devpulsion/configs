# Eslint config for node

Eslint configuration for node. Works with [@devpulsion/eslint-config](https://www.npmjs.com/package/@devpulsion/eslint-config).

## Install

```sh
yarn add @devpulsion/eslint-config @devpulsion/eslint-config-node
```

In your `.eslintrc`

```json
{
  "env":{
    "node": true,
    "es6": true
  },
  "extends": ["@devpulsion/eslint-config", "@devpulsion/eslint-config-node"]
}
```

## Examples

### Example with babel

You will need the package `eslint-plugin-babel` ^5.0.0

In your `.eslintrc`

```json
{
  "env":{
    "node": true,
    "es6": true
  },
  "extends": ["@devpulsion/eslint-config", "@devpulsion/eslint-config-node"],
  "parser": "babel-eslint",
  "parserOptions": {
    "ecmaVersion": 2018,
    "sourceType": "module",
    "ecmaFeatures": {
      "jsx": false,
      "modules": true
    }
  },
}
```

And for example in your `.babelrc`

```json
{
  "env": {
    "node": {
      "presets": [
        ["@babel/preset-env", {
          "targets": { "node": "12" }
        }]
      ]
    }
  }
}
```

### Example with babel and import plugin

You will need the package

- `eslint-plugin-babel` ^5.0.0
- `eslint-import-resolver-babel-module` ^5.1.2
- `babel-plugin-module-resolver`


In your `.eslintrc`

```json
{
  "env":{
    "node": true,
    "es6": true
  },
  "extends": ["@devpulsion/eslint-config", "@devpulsion/eslint-config/plugins/import", "@devpulsion/eslint-config-node"],
  "parser": "babel-eslint",
  "parserOptions": {
    "ecmaVersion": 2018,
    "sourceType": "module",
    "ecmaFeatures": {
      "jsx": false,
      "modules": true
    }
  },
  "settings": {
    "import/resolver": {
      "babel-module": {
        "root": ["./src"]
      }
    }
  }
}
```

And for example in your `.babelrc`

```json
{
  "env": {
    "node": {
      "presets": [
        ["@babel/preset-env", {
          "targets": { "node": "12" }
        }]
      ]
    }
  },
  "plugins": [
    [
      "module-resolver", {
        "root": ["./src"]
      }
    ]
  ]
}
```
