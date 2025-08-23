const { defineConfig } = require("eslint/config");
const expoConfig = require("eslint-config-expo/flat");
const eslintPluginPrettierRecommended = require("eslint-plugin-prettier/recommended");
const reactCompiler = require("eslint-plugin-react-compiler");
const pluginQuery = require("@tanstack/eslint-plugin-query");

module.exports = defineConfig([
  ...pluginQuery.configs["flat/recommended"],
  expoConfig,
  eslintPluginPrettierRecommended,
  reactCompiler.configs.recommended,
  {
    rules: {
      "prettier/prettier": "error",
      "react-hooks/exhaustive-deps": "off",
      "react/display-name": "off",
      "react/no-unescaped-entities": "off",
    },
  },
  {
    ignores: [
      "dist/*",
      "storybook/*",
      "node_modules/*",
      ".expo/*",
      "ios/*",
      "android/*",
    ],
  },
]);
