import js from '@eslint/js';
import globals from 'globals';

export default [
  {
    ignores: ['dist/**', 'node_modules/**'],
  },
  js.configs.recommended,
  {
    files: ['src/**/*.js'],
    languageOptions: {
      sourceType: 'module',
      globals: globals.browser,
    },
    rules: {
      'no-inner-declarations': 'off',
    },
  },
  {
    files: ['scripts/**/*.mjs', 'eslint.config.js', 'postcss.config.js', 'vite.config.js'],
    languageOptions: {
      sourceType: 'module',
      globals: globals.node,
    },
  },
];
