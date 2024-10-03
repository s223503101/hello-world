import { ESLint } from "eslint";

export default [
  {
    files: ['**/*.ts', '**/*.tsx'],  // Target TypeScript files
    languageOptions: {
      parser: '@typescript-eslint/parser',  // Use the TypeScript parser
    },
    plugins: {
      '@typescript-eslint': require('@typescript-eslint/eslint-plugin'),  // Use the ESLint plugin for TypeScript
    },
    rules: {
      // Add your custom rules here
      '@typescript-eslint/no-unused-vars': 'warn',
    },
  },
];
