module.exports = {
  rules: {
    'no-delete-var': 'error',

    'no-shadow-restricted-names': 'error',

    'no-undef': 'error',

    'no-undef-init': 'error',

    'no-undefined': 'off',

    'no-unused-vars': [
      'error', {
        'vars': 'local',
        'args': 'after-used',
        'ignoreRestSiblings': true,
      }
    ],

    'no-use-before-define': 'error',

  }
};
