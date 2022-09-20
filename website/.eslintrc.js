module.exports = {
  root: true,
  plugins: ["@html-eslint", "@typescript-eslint"],
  overrides: [
    {
      files: ["*.html"],
      parser: "@html-eslint/parser",
      extends: ["plugin:@html-eslint/recommended"],
      rules: {
        "@html-eslint/indent": ["error", 2],
      },
    },
    {
      files: ["**/*.tsx", "**/*.ts"],
      parser: "@typescript-eslint/parser",
      extends: ["plugin:@typescript-eslint/recommended"],
    },
    {
      files: ["**/*.js"],
      parser: "esprima",
      extends: ["eslint:recommended"],
      env: {
        node: true,
      },
    },
  ],
};
