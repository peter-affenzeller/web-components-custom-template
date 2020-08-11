<p align="center">
  <img width="200" src="https://open-wc.org/hero.png"></img>
</p>

## Open-wc Starter App

[![Built with open-wc recommendations](https://img.shields.io/badge/built%20with-open--wc-blue.svg)](https://github.com/open-wc)

## Test custom template for web components

Web components app to test the usage of custom templates with web components, setting the context and rendering items using the [`TemplateHelper`](https://github.com/microsoftgraph/microsoft-graph-toolkit/blob/main/packages/mgt/src/components/templateHelper.ts) from the Microsoft Graph Toolkit.

The opening and closing characters used for template bindings can be set in `CustomTemplate.ts`, using `TemplateHelper.setBindingSyntax('', '')`.

The `TemplateHelper` is called in the `render` method to render items, using the template provided via the slot and the given context. Each rendered item is attached to the node provided as `root` for `TemplateHelper.renderTemplate()`.

## Quickstart

To get started:

```sh
npm install
```

## Scripts

- `start` runs your app for development, reloading on file changes
- `start:build` runs your app after it has been built using the build command
- `build` builds your app and outputs it in your `dist` directory
- `test` runs your test suite with Karma
- `lint` runs the linter for your project
