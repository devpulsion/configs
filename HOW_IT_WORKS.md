# How it works

How puslishing packages works.

## Purposes

- User can control packages versions
- Publish tag and packages from CI
- Does not support independent mode

## Roles and Works

1. [Person] Develop and Submit Release Pull Request
2. [Team] Review Release Pull Request
3. [CI] Publish

## Release Flow (PR)

1. [Local] Checkout a release branch: `git checkout release/<uniq>`
2. [Local] Run `yarn run versionup`. 
    - it will update CHANGELOG.md and `package.json`'s `version`, and `lerna.json`'s `version`
    - It does not git tag
3. [Local] Submit your pull request
4. [GitHub] Write the Release Note into the Release Pull Request's body
5. [GitHub] Review the Release Pull Request
6. [GitHub] Merge Release Pull Request
7. [CI] Create git tag && Create GitHub Release && publish to npm(GitHub Package Registry)
    - :memo: The GitHub Release's body is copied from Release Pull Request's body

## Changelog

See [Releases page](https://github.com/devpulsion/configs/releases).

## Running tests

Install devDependencies and Run `npm test`:

    npm test

## Credit

Repo inspired by this [repo](https://github.com/azu/lerna-monorepo-github-actions-release/) powered by [github/azu](https://github.com/azu)
