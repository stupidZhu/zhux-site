---
title: 用 rollup 构建一个工具库
---

## 初始化

新建你的组件库文件夹，然后执行：

```bash
npm init -y
```

安装 rollup 以及相关插件

```bash
yarn add @rollup/plugin-commonjs @rollup/plugin-node-resolve rollup-plugin-auto-external rollup-plugin-clear rollup-plugin-terser -D
```

我打算用 typescript 构建这个工具库，安装以下依赖

```bash
yarn add typescript rollup-plugin-typescript2 -D
```

新建 rollup.config.js，编写 rollup 配置。初步配置如下：

```js
import commonjs from "@rollup/plugin-commonjs"
import resolve from "@rollup/plugin-node-resolve"
import { defineConfig } from "rollup"
import autoExternal from "rollup-plugin-auto-external"
import clear from "rollup-plugin-clear"
import typescript from "rollup-plugin-typescript2"

export default defineConfig({
  input: "src/index.ts",
  output: [{ file: "es/index.min.js", format: "esm" }],
  plugins: [
    autoExternal(),
    resolve(),
    commonjs(),
    typescript({ tsconfigOverride: { compilerOptions: { declaration: false } } }),
    terser(),
    clear({ targets: ["es"] }),
  ],
})
```

在 package.json 中写上打包脚本和 main：

```json
{
  "main": "es/index.js",
  "scripts": {
    "build": "rollup -c"
  }
}
```

这时就初步完成 rollup 工具库的构建了，新建 src/index.ts，打个包试试看。

工具库当然少不了单元测试，jest 安排上：

```bash
yarn add jest ts-jest @types/jest -D
```

jest.config.js:

```js
/** @type {import('jest').Config} */
module.exports = {
  preset: "ts-jest",
  testEnvironment: "node",
}
```

别忘了 tsconfig.json，以下供参考：

```json
{
  "compilerOptions": {
    "target": "ES6",
    "strict": true,
    "lib": ["DOM", "DOM.Iterable", "ESNext"],
    "types": ["jest", "node"],
    "allowSyntheticDefaultImports": true,
    "moduleResolution": "node",
    "outDir": "es",
    "declaration": true,
    "declarationDir": "es"
  },
  "include": ["src"],
  "exclude": ["node_modules", "es", "src/**/__test__"]
}
```
