# Turborepo Design System Starter

This Design System is powered by:

- 🏎 [Turborepo](https://turbo.build/repo) — High-performance build system for Monorepos
- 🚀 [React](https://reactjs.org/) — JavaScript library for user interfaces
- 🌈 [TailwindCSS](https://tailwindcss.com/) - A utility-first CSS framework
- 🧑‍🚀 [Astro](https://astro.build/) - All-in-one web framework for building fast, content-focused websites

As well as a few others tools:

- [ESLint](https://eslint.org/) for code linting
- [Prettier](https://prettier.io) for code formatting
- [Changesets](https://github.com/changesets/changesets) for managing versioning and changelogs
- [PNPm](https://pnpm.io/) for managing dependency packages

## Installation Guide

Make sure you've got a nodejs version from `.tool-versions` file

```bash
git clone git@github.com:Selleo/design-system.git
cd design-system
pnpm install
```

### Useful Commands

- `pnpm build` - Build all packages
- `pnpm dev` - Run all packages locally and docs
- `pnpm lint` - Lint all packages
- `pnpm changeset` - Generate a changeset
- `pnpm clean` - Clean up all `node_modules` and `dist` folders (runs each package's clean script)

### Useful extensions

- [Tailwind CSS IntelliSense](https://github.com/tailwindlabs/tailwindcss-intellisense) which provides features such as autocomplete, syntax highlighting, and linting for Tailwindcss

## Apps & Packages

This Turborepo includes the following packages and applications:

- `apps/docs`: Component documentation site with Astro
- `packages/selleo-design-core`: Core Preact components
- `packages/selleo-tailwind`: Selleo TailwindCSS config based on Design System on [Figma](https://www.figma.com/file/aAZNLti1x7RHcKO2aaVdyh/Selleo-Design-System)
- `packages/selleo-tsconfig`: Shared `tsconfig.json`s used throughout the Turborepo
- `packages/eslint-config-selleo`: ESLint preset

Yarn Workspaces enables us to "hoist" dependencies that are shared between packages to the root `package.json`. This means smaller `node_modules` folders and a better local dev experience. To install a dependency for the entire monorepo, use the `-W` workspaces flag with `yarn add`.

This example sets up your `.gitignore` to exclude all generated files, other folders like `node_modules` used to store your dependencies.

## Goals

For the v1 the goal is to create ready to copy components based on the Selleo Design System. Later on we will focus on creating a package
out of it and adding necessary logic / framework integrations.

## Contributions

To contribute pick any of the [Issues](https://github.com/Selleo/design-system/issues) and create a Pull Request and assign [k1eu](https://github.com/k1eu) for a code review and [michalgren](https://github.com/michalgren) for a design check.

### Compilation

To make the core library code work across all browsers, we need to compile the raw TypeScript and React code to plain JavaScript. We can accomplish this with `tsup`, which uses `esbuild` to greatly improve performance.

Running `yarn build` from the root of the Turborepo will run the `build` command defined in each package's `package.json` file. Turborepo runs each `build` in parallel and caches & hashes the output to speed up future builds.

For `selleo-core`, the `build` command is the following:

```bash
tsup src/index.tsx --format esm,cjs --dts --external react
```

`tsup` compiles `src/index.tsx`, which exports all of the components in the design system, into both ES Modules and CommonJS formats as well as their TypeScript types. The `package.json` for `selleo-core` then instructs the consumer to select the correct format:

```json:selleo-core/package.json
{
  "name": "@selleo/core",
  "version": "0.0.0",
  "main": "./dist/index.js",
  "module": "./dist/index.mjs",
  "types": "./dist/index.d.ts",
  "sideEffects": false,
}
```

Run `yarn build` to confirm compilation is working correctly. You should see a folder `selleo-core/dist` which contains the compiled output.

```bash
selleo-core
└── dist
    ├── index.d.ts  <-- Types
    ├── index.js    <-- CommonJS version
    └── index.mjs   <-- ES Modules version
```

## Components

Each file inside of `selleo-design-core/src` contains a list of few variants of given type of the component inside our design system.
For example:

```tsx:packages/selleo-design-core/src/Button.tsx
export function ButtonSmall() {
  return <button class="flex flex-col justify-center text-sm font-extrabold text-neutral-500 min-w-[124px] min-h-[32px]">Text</button>;
}

export function Button() {
  return <button class="flex flex-col justify-center text-base font-extrabold text-neutral-500 min-w-[160px] min-h-[48px]">Text</button>;
}
```

To add component to the preview page it has to be imported and provided to `Preview.astro` component as property named `component`.

```mdx:apps/docs/src/pages/01-button.mdx
---
title: Button
description: Sample Button documentation
layout: ../layouts/MainLayout.astro
---

import { PrimaryButton, PrimaryButtonSmall, PrimaryOutlinedButtonSmall, PrimaryOutlinedButton, ButtonSmall, Button } from "@selleo/core/src/Button";
... import new component here ex. import { NewComponent } from "@selleo/core/src/NewComponent"
import Preview from "../components/Preview.astro";
import Description from "../components/Description.astro";

<Description>
  Below you can find a button component styled with tailwindcss.
</Description>

<Preview component={ButtonSmall} />
<Preview component={Button} />
... enter new component as Preview property ex.
<Preview component={NewComponent} />
```

## Versioning & Publishing Packages

This example uses [Changesets](https://github.com/changesets/changesets) to manage versions, create changelogs, and publish to npm. It's preconfigured so you can start publishing packages immediately.

You'll need to create an `NPM_TOKEN` and `GITHUB_TOKEN` and add it to your GitHub repository settings to enable access to npm. It's also worth installing the [Changesets bot](https://github.com/apps/changeset-bot) on your repository.

### Generating the Changelog

To generate your changelog, run `yarn changeset` locally:

1. **Which packages would you like to include?** – This shows which packages and changed and which have remained the same. By default, no packages are included. Press `space` to select the packages you want to include in the `changeset`.
1. **Which packages should have a major bump?** – Press `space` to select the packages you want to bump versions for.
1. If doing the first major version, confirm you want to release.
1. Write a summary for the changes.
1. Confirm the changeset looks as expected.
1. A new Markdown file will be created in the `changeset` folder with the summary and a list of the packages included.

### Releasing

When you push your code to GitHub, the [GitHub Action](https://github.com/changesets/action) will run the `release` script defined in the root `package.json`:

```bash
turbo run build --filter=docs^... && changeset publish
```

Turborepo runs the `build` script for all publishable packages (excluding docs) and publishes the packages to npm. By default, this example includes `selleo` as the npm organization. To change this, do the following:

- Rename folders in `packages/*` to replace `selleo` with your desired scope
- Search and replace `selleo` with your desired scope
- Re-run `yarn install`

To publish packages to a private npm organization scope, **remove** the following from each of the `package.json`'s

```diff
- "publishConfig": {
-  "access": "public"
- },
```

## Keep the changelog

[How to use changelog?](https://github.com/Selleo/templates/tree/main/changelog)
