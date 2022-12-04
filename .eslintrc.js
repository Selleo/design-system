module.exports = {
  root: true,
  // This tells ESLint to load the config from the package `eslint-config-selleo`
  extends: ["selleo"],
  settings: {
    next: {
      rootDir: ["apps/*/"],
    },
  },
};
