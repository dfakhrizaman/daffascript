module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  env: {
    browser: true,
    es2021: true,
    jest: true
  },
  extends: [
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'airbnb',
    'eslint:recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended'
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 13,
    sourceType: 'module',
    // tsconfigRootDir: __dirname,
    // project: ['./tsconfig.json'],
  },
  plugins: ['react', 'html', 'prettier', 'react-hooks', '@typescript-eslint'],
  rules: {
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx', '.ts', '.tsx'] }],
    'react/react-in-jsx-scope': 'off',
    'no-unused-vars': 'error',
    'jsx-quotes': ['warn', 'prefer-double'],
    'no-trailing-spaces': 'off',
    'no-console': 'off',
    'linebreak-style': 0,
    'implicit-arrow-linebreak': 'off',
    'max-len': ['warn', { code: 1000 }],
    'import/prefer-default-export': 'off',
    'comma-dangle': 'off',
    'no-plusplus': 'off',
    'react/jsx-props-no-spreading': 'off',
    'no-nested-ternary': 'off',
    'react/jsx-no-bind': 'off',
    'import/no-unresolved': 'off',
    'consistent-return': 0,
    'no-alert': 'off',
    'react/prop-types': 0,
    'import/extensions': [
      'error',
      'never',
      {
        js: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never'
      }
    ],
    'jsx-a11y/no-static-element-interactions': [
      'error',
      {
        handlers: [
          'onClick',
          'onMouseDown',
          'onMouseUp',
          'onKeyPress',
          'onKeyDown',
          'onKeyUp',
        ],
      },
    ],
    'jsx-a11y/label-has-associated-control': ['error', {
      labelAttributes: ['inputLabel'],
      asserts: 'both',
    }],
    'no-param-reassign': ['error', {
      props: true,
      ignorePropertyModificationsFor: [
        'state',
      ]
    }],
    '@typescript-eslint/no-var-requires': 0,
    'react/destructuring-assignment': 0,
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: [
          '**/*.test.ts',
          '**/*.test.tsx',
          './vite.config.ts',
          './src/test/**/*'
        ]
      }
    ],
    'jsx-a11y/control-has-associated-label': 0,
    'react/require-default-props': 0,
    'no-use-before-define': 0,
    camelcase: 'off',
  },
  settings: {
    'import/resolver': {
      node: {
        paths: ['src'],
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    },
  }
};
