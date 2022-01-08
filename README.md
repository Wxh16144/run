# @wuxh/run

[nodemon](https://nodemon.io/) 监听并使用 [esbuild](https://esbuild.github.io/) 作为 `node runtime`, 支持 `TypeScript`、`ESNext`.

## 使用

```bash
# 处理 CJS 模块
npx -p @wuxh/run esnrun index.ts

# 处理 ESM 模块
npx -p @wuxh/run esmrun index.ts
```

### 全局安装

```bash
npm i @wuxh/run -g

# esnrun index.ts  # CJS
# esmrun index.ts  # ESM
```

+ **esnrun**: Node in CJS mode - by [esbuild-register](https://github.com/egoist/esbuild-register)
+ **esmrun**: Node in ESM mode - by [esbuild-node-loader](https://github.com/antfu/esbuild-node-loader)

### 本地安装

```bash
npm i @wuxh/run -D
```

**CJS**

```json
{
  "scripts": {
    "start": "esnrun index.ts",
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
-   "start": "esnrun index.ts",
+   "start": "esmrun index.ts",
  }
}
```

```bash
npm start
```

## 自定义 nodemon 配置

[查看 nodemon 规则](https://github.com/remy/nodemon/blob/main/doc/cli/config.txt#L2-L11)

```bash
npx -p @wuxh/run esnrun index.ts --nodemon='-w ./index.ts'
```
