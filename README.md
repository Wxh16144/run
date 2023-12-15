# ~~@wuxh/run~~

[nodemon](https://nodemon.io/) 监听并使用 [esbuild](https://esbuild.github.io/) 作为 `node runtime`, 支持 `TypeScript`、`ESNext`.

> [!WARNING]
> **已经弃用！** 请使用 [tsx](https://github.com/privatenumber/tsx/) 代替此工具 :>

## 使用

```bash
# 处理 CJS 模块 v2.0.0 +
npx @wuxh/run index.ts

# 1.0.1 使用 npx -p @wuxh/run emrun index.ts

# 处理 ESM 模块
npx -p @wuxh/run emrun index.ts
```

### 全局安装

```bash
npm i @wuxh/run -g

# enrun index.ts  # CJS
# emrun index.ts  # ESM
```

+ **enrun**: Node in CJS mode - by [esbuild-register](https://github.com/egoist/esbuild-register)
+ **emrun**: Node in ESM mode - by [esbuild-node-loader](https://github.com/antfu/esbuild-node-loader)

### 本地安装

```bash
npm i @wuxh/run -D
```

**CJS**

```json
{
  "scripts": {
    "start": "enrun index.ts",
  },
  "devDependencies": {
    "@wuxh/run": "*"
  }
}
```

**ESM**

```diff
{
+ "type": "module", 
  "scripts": {
-   "start": "enrun index.ts",
+   "start": "emrun index.ts",
  }
}
```

```bash
npm start
```

## 自定义 nodemon 配置

[查看 nodemon 规则](https://github.com/remy/nodemon/blob/main/doc/cli/config.txt#L2-L11)

```bash
npx -p @wuxh/run enrun index.ts --nodemon='-w ./index.ts'
```

## Warn

1. 自 `v2.0.0` 开始:
   1. `esnrun` 重命名为 `enrun`
   2. `esmrun` 重命名为 `emrun`
