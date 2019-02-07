module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    parser: 'babel-eslint'
  },
  extends: [
    '@nuxtjs',
    'standard'
  ],
  // add your custom rules here
  rules: {
    'arrow-parens': 0
  }
}
