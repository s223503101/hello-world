import { ESLint } from "eslint";
import typescriptEslintPlugin from "@typescript-eslint/eslint-plugin";

export default [
  {
    files: ['**/*.ts', '**/*.tsx'],  // Target TypeScript files
    languageOptions: {
      parser: '@typescript-eslint/parser',  // Use the TypeScript parser
    },
    plugins: {
      '@typescript-eslint': typescriptEslintPlugin,  // Use the ESLint plugin for TypeScript
    },
    rules: {
      '@typescript-eslint/no-unused-vars': 'warn',  // Example custom rule
    },
  },
];
