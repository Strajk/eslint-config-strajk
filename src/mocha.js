module.exports = {
  // Not using env to limit globals
  // https://github.com/sindresorhus/globals/blob/master/globals.json
  "globals": {
    "after": false,
    "afterEach": false,
    "before": false,
    "beforeEach": false,
    "context": false,
    "describe": false,
    "it": false,
    "mocha": false,
  },
  "rules": {
    "max-nested-callbacks": "off",
  },
}
