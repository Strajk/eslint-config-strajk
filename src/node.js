module.exports = {
  // Not using env to limit globals
  // https://github.com/sindresorhus/globals/blob/master/globals.json
  "globals": {
    "__dirname": false,
    "__filename": false,
    "exports": false,
    "module": false,
    "process": false,
    "require": false,
  },
  "extends": [
    "plugin:node/recommended",
  ],
}
