# lithent

> An extensible virtual DOM library for lightweight use in a variety of environments.

Lithent were developed to make it easy to insert Virtual DOM component
fragments into pages already drawn with SSR, and are intended to be
used lightly in a variety of situations.

- https://superlucky84.github.io/lithent
  - (This guide page is written in lithent.)

`(9.64 KiB / gzip: 3.76 KiB)`

## 🚩 Table of Contents

- [How To Install](#how-to-install)
  - [Use NPM](#use-npm)
  - [Use CDN](#or-use-cdn)
  - [With HTM](#with-htm)
  - [With JSX](#with-jsx)
- [Examples](#examples)
  - [With ESM](#with-esm)
  - [With UMD](#with-umd)
- [Develop Guide](#develop-guide)
- [Test](#test)

## How To Install

#### Use NPM

```bash
pnpm add tmpl-htm
```

#### Or Use CDN

* UMD : https://cdn.jsdelivr.net/npm/tmpl-htm@1.0.0/dist/tmplHtm.umd.js


#### With HTM

```js
import { tmplTag } from 'tmpl-htm';
const element = tmplTag`<${Component} />`;
```

#### With JSX

```js
// Setting JSX - Babel
...
{
  "plugins": [
    ["@babel/plugin-transform-react-jsx", {
      "pragma": "h",
      "pragmaFrag": "Fragment",
    }]
  ]
}
...
```

```js
// Setting JSX - Typescript < 4.1.1

...
{
  "compilerOptions": {
    "jsx": "react",
    "jsxFactory": "h",
    "jsxFragmentFactory": "Fragment",
    //...
  }
}
...

```

```js
// Setting JSX - Typescript >= 4.1.1

...
{
  "compilerOptions": {
    "jsx": "react-jsx",
    "jsxImportSource": "lithent",
    //...
  }
}
...
```

```js
// Setting JSX - If you use TypeScript within a Babel toolchain

...
// typescript config
{
  "compilerOptions": {
    "jsx": "preserve",
    "jsxFactory": "h",
    "jsxFragmentFactory": "Fragment",
    //...
  }
}

// babel config
{
  presets: [
    "@babel/env",
    ["@babel/typescript", { jsxPragma: "h" }],
  ],
  plugins: [
    ["@babel/transform-react-jsx", { pragma: "h" }]
  ],
}
...
```

## Examples

- [More Examples](https://superlucky84.github.io/lithent/#examples)

#### With ESM
```js
import { h, render, mount, Fragment } from 'tmpl-htm';
import { state } from 'lithent/helper';
import htm from 'htm';
const html = htm.bind(h);

const Component = mount((renew, _props) => {
  const count = state(0, renew);

  const change = () => {
    count.value += 1;
  };

  // Updater
  return () => html`
    <${Fragment}>
      <li>count: ${count.value}</li>
      <button onClick=${change}>increase</button>
    <//>
  `;
});

// insertBefore
// render(`<${Component} />`, document.getElementById('root'), document.getElementById('nextElement'));

// appendChild
const destroy = render(html`<${Component} />`, document.getElementById('root'));
```

#### With UMD

```html
<script src="https://cdn.jsdelivr.net/npm/tmpl-htm@1.0.0/dist/tmplHtm.umd.js"></script>

<div id="root"></div>

<script>
const { h, Fragment, tmplTag } = tmplHtm;
// const { state } = lithentHelper;
const html = htm.bind(h);

const Component = mount(renew => {
  count = 0;

  const change = () => {
    count += 1;
    renew();
  };

  // Updater
  return () => html`
    <${Fragment}>
      <li>count: ${count}</li>
      <button onClick=${change}>increase</button>
    <//>
  `;
});

const destroy = render(html`<${Component} />`, document.getElementById('root'));
</script>
```

## Develop Guide

It's open source, so you can develop and contribute together.

### pnpm install (this project was created using pnpm.)

```bash
npm install -g pnpm
```

### project install

```bash
git clone https://github.com/superlucky84/lithent.git

cd lithent

pnpm install
```

### project build

```bash
pnpm build
```

### Running the development environment

```bash
pnpm dev // or pnpm dev:core
```

## Test

```bash
// pnpm install
pnpm test
```

