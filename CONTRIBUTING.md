## GitHub Release Guidelines

- yarn test
- bump `version` in `package.json`
- commit all changes to GH
- yarn package
- create release on GH
- attach `.min.js` and `.js` files as a release

## NPM Release Guidelines

- yarn test
- npm publish --dry-run
- npm publish
