module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'airbnb',
    'airbnb-typescript',
    'airbnb/hooks',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'plugin:prettier/recommended',
  ],
  overrides: [
    // {
    //   env: {
    //     node: true,
    //   },
    //   files: ['.eslintrc.{js,cjs}'],
    //   parserOptions: {
    //     sourceType: 'script',
    //   },
    // },
  ],

  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    // tsconfigRootDir: __dirname,
  },
  plugins: ['import', '@typescript-eslint', 'react', 'prettier'],
  ignorePatterns: ['tailwind.config.js', '.eslintrc.cjs'],
  settings: {
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx'],
    },
    'import/resolver': {
      alias: {
        map: [['@', './src']],
      },
      typescript: {
        alwaysTryTypes: true,
      },
    },
  },

  rules: {
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never',
      },
    ],
    'react/react-in-jsx-scope': 0,
    'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
    'import/no-cycle': 'off',
    '@typescript-eslint/no-non-null-assertion': 'off',
    'prettier/prettier': ['error', { endOfLine: 'auto' }],
  },
};
