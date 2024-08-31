# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Install

```sh
pnpm install
```

## Testing

### Cypress

[Test Source](src/App.cy.tsx)

```sh
pnpm cypress run --component
```

With Browser:

```sh
pnpm cypress open --component
```

### Playwright

[Test Source](src/App.play.tsx)

```sh
pnpm test:playwright
```

With UI:

```sh
pnpm test:playwright --ui
```

### Storybook

[Test Source](src/App.stories.tsx)

First start storybook with

```sh
pnpm storybook
```

Then in another terminal tab, run tests

```sh
pnpm test:storybook
```

### Vitest

[Test Source](src/App.spec.tsx)

```sh
pnpm test:vitest
```
