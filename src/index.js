// Links to common configs for reference
// https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb-base/rules

module.exports = {
  "parserOptions": { "ecmaVersion": 2017 },
  "extends": ["standard"],
  "env": {
    "es6": true,
  },
  "root": true,
  "rules": {
    "comma-dangle": ["error", {
      "arrays": "always-multiline",
      "objects": "always-multiline",
      "imports": "always-multiline",
      "exports": "always-multiline",
      "functions": "always-multiline",
    }],
    "quotes": ["error", "double"],
    "import/order": "error",
    "jsx-quotes": ["error", "prefer-double"],
  },
}
