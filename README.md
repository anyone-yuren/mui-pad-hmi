# React + TypeScript + Vite

这个模板提供了一个最小化的设置，使得在 Vite 中使用 React 可以实现热模块替换（HMR），并包含一些 ESLint 规则。

目前，有两个官方插件可用：

- @vitejs/plugin-react 使用 Babel 实现快速刷新（Fast Refresh）
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) 使用 [SWC](https://swc.rs/) 实现快速刷新（Fast Refresh）

## 扩展 ESLint 配置

如果你正在开发一个生产应用程序，建议更新配置以启用类型感知的 lint 规则：

- 配置顶级的 parserOptions 属性如下：

```js
   parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
   },
```
