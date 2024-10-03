import { ESLint } from "eslint";

export default {
  parser: "@typescript-eslint/parser",
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended"
  ],
  plugins: ["@typescript-eslint"],
  rules: {
    // Add your custom rules here
  }
};
