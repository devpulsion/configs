# Eslint config for rexct

Eslint configuration for react. Works with [@devpulsion/eslint-config](https://www.npmjs.com/package/@devpulsion/eslint-config).

## Install

```sh
yarn add --dev @devpulsion/eslint-config @devpulsion/eslint-config-react
```

Peer depadancies

```sh
yarn add --dev eslint eslint-plugin-import eslint-plugin-jsx-a11y eslint-plugin-react eslint-plugin-react-hooks prettier
```

In your `.eslintrc`

```json
{
  "env":{
    "node": true,
    "es6": true
  },
  "extends": ["@devpulsion/eslint-config", "@devpulsion/eslint-config-react"]
}
```

## Examples

### With babel

In your `.eslintrc`

```json
{
  "env":{
    "node": true,
    "es6": true
  },
  "extends": ["@devpulsion/eslint-config", "@devpulsion/eslint-config-react"],
  "parser": "babel-eslint",

  "parserOptions": {
    "ecmaVersion": 2018,
    "sourceType": "module",
    "ecmaFeatures": {
      "jsx": true,
    }
  },
}
```

`.babelrc`

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

### With babel and import plugin

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

`.babelrc`

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
