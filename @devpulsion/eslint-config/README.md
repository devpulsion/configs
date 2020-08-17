# Eslint base config

Eslint base configuration.

## Install

```sh
yarn add @devpulsion/eslint-config
```

It is reacommanded to use this package with

- [@devpulsion/eslint-config-node](https://www.npmjs.com/package/@devpulsion/eslint-config-node) for node projects
- [@devpulsion/eslint-config-react](https://www.npmjs.com/package/@devpulsion/eslint-config-react) for react projects

## Usage

### Basic

In your .eslintrc

```json
{
  "extends": ["@devpulsion/eslint-config"]
}
```

### With import plugin

In your .eslintrc

```json
{
  "extends": ["@devpulsion/eslint-config", "@devpulsion/eslint-config/plugins/import"]
}
```

## LICENSE

MIT
