# Monorepo

This monorepo is managed using `pnpm`, hence using `pnpm` is non-negotiable.

It is recommended to install `pnpm` globally using the official install script instead of through `npm` or any other package managers.

## Managing .gitignore

Files that should be globally ignored (e.g. `node_modules`) should be added to the root-level `.gitignore` file.

Files that needs to be fine-grain control/ignored on a per-package basis should be added at the package-level `.gitignore` file.

## Managing `git` commits

New packages initialised using `Vite` should have its `.git` file manually removed. The entire monorepo will only have one `.git` file, located at the root directory.

## Managing conflicts

### `pnpm-lock.yaml` when merging new package into `main`

Do not attempt to resolve the merge conflict by manually editing `pnpm-lock.yaml`.

Run

```bash
pnpm i
```

Then

```bash
git add .
```

to add the newly generated `pnpm-lock.yaml` file into the commit history.

## Running Development Build

On first run, ensure each of the `@packages` packages has been built and JS output generated (`pnpm build`).

When making changes to an `@packages` package, ensure that package is run in dev mode (`pnpm dev`).

For ease of development, you may run the `packages.pm2.config.js` PM2 file located at the root directory to run all three packages in dev mode:

```bash
pm2 start packages.pm2.config.js
```

## Adding an `@packages` package to app

Need to manually add the package in `package.json`, for example:

```json
{
    ...

    "dependencies": {
    ...
    "@packages/utils": "workspace:*",
    ...
  }
}
```

## When creating new `@packages` package

Ensure the following is done:

```json
{
  "compilerOptions": {
    ...
    "declaration": true,

  },
  ...
}
```

## TailwindCSS VSCode Extension

Add the following:

```json
{
  ...
  "tailwindCSS.experimental.configFile": {
    ...
    "apps/vite-tw/src/index.css": "apps/vite-tw/src/**",
    "src/index.css": "**"
  }
  ...
}
```
