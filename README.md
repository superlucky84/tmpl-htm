# tmpl-htm

Generate HTML elements using HTM ("Hyperscript Tagged Markup") or JSX.

`(4.20 KiB / gzip: 1.90 KiB)`

## 🚩 Table of Contents

- [How To Install](#how-to-install)
  - [Use NPM](#use-npm)
  - [Use CDN](#or-use-cdn)
  - [With HTM](#with-htm)
  - [With JSX](#with-jsx)
- [Examples](#examples)
  - [With ESM](#with-esm)
  - [With UMD](#with-umd)
- [Related Projects](#related-projects)
- [Develop Guide](#develop-guide)
- [Test](#test)

## How To Install

#### Use NPM

```bash
pnpm add tmpl-htm
```

#### Or Use CDN

* UMD : https://cdn.jsdelivr.net/npm/tmpl-htm@1.0.1/dist/tmplHtm.umd.js


#### With HTM

```js
import { tmplTag } from 'tmpl-htm';
const element = tmplTag`<${Component} />`;
```

#### With JSX

* If you don't want to use 'tmplTag', you can use 'JSX' as an alternative.

`import { h } from 'tmpl-htm';`

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
    "jsxImportSource": "tmpl-htm",
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

#### With ESM
```js
import { Fragment, tmplTag, appendAll } from 'tmpl-htm';

const Component = (renew, props) => {
  return () => tmplTag`
    <${Fragment}>
      <li>count: ${props.count}</li>
      <button onClick=${change}>increase</button>
    <//>
  `;
});

document.body.appendChild(tmplTag`<${Component}>`);
appendAll(tmplTag`<${Component}>`, document.querySelectorAll('.target'));
// append, appendAll, prepend, prependAll, replace, replaceAll, insertBefore, insertBeforeAll,
```

#### With UMD

```html
<script src="https://cdn.jsdelivr.net/npm/tmpl-htm@1.0.0/dist/tmplHtm.umd.js"></script>

<div class="target"></div>

<script>
const { Fragment, tmplTag, appendAll } = 'tmplHtm';

const Component = (renew, props) => {
  return () => tmplTag`
    <${Fragment}>
      <li>count: ${props.count}</li>
      <button onClick=${change}>increase</button>
    <//>
  `;
});

document.body.appendChild(tmplTag`<${Component}>`);
appendAll(tmplTag`<${Component}>`, document.querySelectorAll('.target'));
// append, appendAll, prepend, prependAll, replace, replaceAll, insertBefore, insertBeforeAll,
</script>
```

## Related Projects
- [htm](https://www.npmjs.com/package/htm) - making **H**yperscript **T**agged **M**arkup possible

## Develop Guide

It's open source, so you can develop and contribute together.

### pnpm install (this project was created using pnpm.)

```bash
npm install -g pnpm
```

### project install

```bash
git clone https://github.com/superlucky84/tmpl-htm.git

cd tmpl-htm

pnpm install
```

### project build

```bash
pnpm build
```

### Running the development environment

```bash
pnpm dev
```

## Test

```bash
// pnpm install
pnpm test
```

