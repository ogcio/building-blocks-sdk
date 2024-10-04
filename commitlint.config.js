export default {
  extends: ["@commitlint/config-conventional"],
  rules: {
    "scope-enum": [2, "always", ["core", "building-blocks-sdk"]],
  },
};
