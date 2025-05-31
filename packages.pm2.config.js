module.exports = {
  apps: [
    {
      name: "dummyjson-wrapper",
      cwd: "./packages/dummyjson-wrapper",
      script: "pnpm dev",
    },
    {
      name: "tanstack-query",
      cwd: "./packages/tanstack-query",
      script: "pnpm dev",
    },
    {
      name: "utils",
      cwd: "./packages/utils",
      script: "pnpm dev",
    },
  ],
};
