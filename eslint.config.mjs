import js from "@eslint/js";
import reactPlugin from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";
import globals from "globals";

export default [
  js.configs.recommended,
  {
    files: ["**/*.jsx", "**/*.js"],

    plugins: {
      react: reactPlugin,
      "react-hooks": reactHooks,
    },

    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      globals: {
        ...globals.browser,
        ...globals.es2021,
      },

      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
    },

    rules: {
      ...reactPlugin.configs.recommended.rules,
      ...reactHooks.configs.recommended.rules,

      "no-unused-vars": "error",
      "no-undef": "error",
      semi: ["error", "always"],
      quotes: ["error", "single"],
      indent: ["error", 2],

      "react/react-in-jsx-scope": "off",
      "react/prop-types": "off",
    },

    settings: {
      react: {
        version: "detect",
      },
    },
  },
];
