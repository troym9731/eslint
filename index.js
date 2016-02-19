module.exports = {
  "rules": {
      "indent": [2, 2, { "SwitchCase": 1 }],
      "quotes": [2, "single"],
      "linebreak-style": [2, "unix"],
      "semi": [2, "always"],
      "no-spaced-func": 2,
      "comma-dangle": [2, "never"],
      "eqeqeq": [2, "allow-null"],
      "no-unused-vars": 2,
      "block-spacing": 2,
      "brace-style": 2,
      "comma-spacing": [2, { "before": false, "after": true }],
      "jsx-quotes": 2,
      "key-spacing": [2, { "beforeColon": false, "afterColon": true }],
      "no-lonely-if": 2,
      "array-bracket-spacing": [2, "never"],
      "object-curly-spacing": [2, "always"],
      "one-var": [2, "never"],
      "keyword-spacing": 2,
      "space-before-blocks": 2,
      "space-before-function-paren": [2, { "anonymous": "never", "named": "never"  }],
      "space-in-parens": [2, "never"],
      "spaced-comment": [2, "always"],
      "generator-star-spacing": [2, { "before": true, "after": false }],
      "prefer-arrow-callback": 2
  },
  "env": {
      "es6": true,
      "browser": true
  },
  "parserOptions": {
    "sourceType": "module",
    "ecmaFeatures": {
      "experimentalObjectRestSpread": true
    }
  }
};
