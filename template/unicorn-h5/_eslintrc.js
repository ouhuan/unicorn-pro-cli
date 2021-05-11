module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'plugin:vue/essential',
    '@vue/airbnb',
  ],
  parserOptions: {
    parser: 'babel-eslint',
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'off' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'arrow-parens': 'off',
    'no-plusplus': 'off',
    'prefer-arrow-callback': 'off',
    'no-param-reassign': 'off',
    'func-names': 'off',
    'no-unused-expressions': 'off',
    'import/no-named-as-default-member': 'off',
    'no-unused-vars': 'off',
    'no-underscore-dangle': 'off',
    'import/prefer-default-export': 'off',
    'max-len': 'off',
    'prefer-template': 'off',
    'arrow-body-style': 'off',
    'semi': 'off',
    'comma-dangle': 'off',
    'no-nested-ternary': 'off',
    'no-restricted-syntax': 'off',
    'no-undef': 'off',
    'indent': 'off',
    'import/no-extraneous-dependencies': 'off',
    'import/no-unresolved': 'off',
    'no-mixed-operators': 'off',
    'consistent-return': 'off',
    'guard-for-in': 'off'
  },
};