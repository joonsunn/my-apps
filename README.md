# Monorepo

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
