module.exports = {
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'airbnb',
    'react-app',
  ],
  plugins: [
    'sort-destructure-keys',
    'typescript-sort-keys',
    'postro4no',
  ],
  rules: {
    '@typescript-eslint/array-type': [
      'warn',
      { default: 'generic' },
    ],
    '@typescript-eslint/indent': ['warn', 2],
    '@typescript-eslint/member-delimiter-style': ['warn', {
      multiline: {
        delimiter: 'comma',
        requireLast: true,
      },
      singleline: {
        delimiter: 'comma',
        requireLast: false,
      },
    }],
    '@typescript-eslint/semi': ['error', 'never'],
    camelcase: 'off',
    'comma-dangle': 0,
    'default-case': 'warn',
    'import/extensions': [
      'warn',
      'never',
      {
        css: 'always',
        jpeg: 'always',
        jpg: 'always',
        png: 'always',
        scss: 'always',
        stories: 'always',
        svg: 'always',
      },
    ],
    'import/no-duplicates': 'warn',
    'import/no-extraneous-dependencies': [
      'warn',
      { devDependencies: true },
    ],
    'import/no-unresolved': 'off',
    'import/prefer-default-export': 'off',
    indent: 'off',
    'jsx-quotes': [
      'warn',
      'prefer-single',
    ],
    'no-param-reassign': [
      'warn',
      {
        ignorePropertyModificationsFor: ['self', 'acc'],
        props: true,
      },
    ],
    'no-plusplus': 'off',
    'no-underscore-dangle': 'off',
    'no-unused-vars': 'off',
    'postro4no/function-args': 'warn',
    'postro4no/import': 'warn',
    'postro4no/object-props': 'warn',
    'prettier/prettier': 'off',
    'react/button-has-type': 'off',
    'react/jsx-filename-extension': [
      'warn',
      { extensions: ['.tsx'] },
    ],
    'react/jsx-fragments': 'off',
    'react/jsx-indent': ['warn', 2],
    'react/jsx-one-expression-per-line': 'off',
    'react/prop-types': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/require-default-props': 'off',
    semi: 'off',
    'sort-destructure-keys/sort-destructure-keys': [
      1,
      { caseSensitive: false },
    ],
    'sort-keys': [
      'warn',
      'asc', {
        caseSensitive: true,
        natural: true,
      },
    ],
    'typescript-sort-keys/interface': 1,
    'typescript-sort-keys/string-enum': 1,
  },
}
