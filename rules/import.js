module.exports = {
  extends: [
    'plugin:import/errors',
  ],

  plugins: [
    'import',
  ],

  rules: {
    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/newline-after-import.md
    'import/newline-after-import': 'error',

    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/prefer-default-export.md
    'import/prefer-default-export': 'error',
  },
};
