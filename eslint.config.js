import js from '@eslint/js';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import globals from 'globals';
import tseslint from 'typescript-eslint';

export default tseslint.config(
  { ignores: ['dist'] },
  {
    extends: [js.configs.recommended, ...tseslint.configs.recommended],
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    plugins: {
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
      'max-len': ['error', 80],
      'max-lines': ['error', 500],
      'max-lines-per-function': ['error', 30],
      'space-before-function-paren': 'off',
      '@typescript-eslint/space-before-function-paren': 'off',
      '@typescript-eslint/comma-dangle': 'off',
      '@typescript-eslint/no-namespace': 'off',
      semi: [2, 'always'],
      '@typescript-eslint/semi': 'off',
      '@typescript-eslint/member-delimiter-style': [
        'off',
        {
          multiline: {
            delimiter: 'semi',
            requireLast: true,
          },
          singleline: {
            delimiter: 'semi',
            requireLast: true,
          },
          multilineDetection: 'brackets',
        },
      ],
    },
    overrides: [
      {
        files: ['src/pages/**', 'src/components/**'],
        rules: {
          'max-lines-per-function': ['error', 300],
        },
      },
    ],
  }
);
