import tseslint from "typescript-eslint";
import { defineConfig } from "eslint/config";

export default defineConfig(
  tseslint.configs.recommended,
  {
    ignores: [
      "**/*.html",
      "coverage",
      "yarn.lock",
      "dist",
      "node_modules",
      "**/*.js",
      "eslint.config.mjs",
    ],
  },
  {
    rules: {
      "@typescript-eslint/no-non-null-assertion": "off",
      "@typescript-eslint/no-non-null-asserted-optional-chain": "off",
      "@typescript-eslint/no-unused-vars": "error",
      "@typescript-eslint/no-explicit-any": "off",
      "@typescript-eslint/ban-ts-comment": "off",
    },
  },
  {
    files: ["**/__tests__/**/*.ts"],
    rules: {
      "@typescript-eslint/no-explicit-any": "off",
    },
  }
);

// module.exports = {
//   extends: ["eslint:recommended", "plugin:@typescript-eslint/recommended"],
//   parser: "@typescript-eslint/parser",
//   plugins: ["@typescript-eslint"],
//   root: true,
//   rules: {
//     "@typescript-eslint/no-non-null-assertion": "off",
//     "@typescript-eslint/no-non-null-asserted-optional-chain": "off",
//     "@typescript-eslint/no-unused-vars": "error",
//     "@typescript-eslint/no-explicit-any": "off",
//     "@typescript-eslint/ban-ts-comment": "off",
//   },
//   overrides: [
//     {
//       files: ["**/__tests__/**/*.ts"],
//       rules: {
//         "@typescript-eslint/no-explicit-any": "off",
//       },
//     },
//   ],
// };
