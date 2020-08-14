# @devpulsion/commitlint-config

Commitlint configuration

## Usage

Install @commitlint/cli and the current config in your js project:

```sh
yarn add @commitlint/cli @devpulsion/commitlint-config
```

Then if using husky, add the `commitlint.config.js` file in your project root with

```js
module.exports = {
  extends: ['@devpulsion/commitlint-config']
}
```

After that, you can create a .huskyrc file or add to your package.json the following code:

```json
{
  "husky": {
    "hooks": {
      "commit-msg": "commitlint -E HUSKY_GIT_PARAMS"
    }
  }
}
```

## More info

Please refer to [commitlint doc](https://github.com/conventional-changelog/commitlint)
