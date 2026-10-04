# React-Hook

React Hooks 的教學筆記網站，每個 Hook 一頁，附可互動的範例與可複製的程式碼。

**Demo:** <https://bobo100.github.io/react-hook-notes/>

## 狀態

2023 年的練習作品，已不再加新內容。

## 內容

- 基本 Hook:`useState`、`useEffect`、`useRef`、`useContext`、`useReducer`、`useMemo`、`useCallback`
- 並行渲染:`useTransition`、`useDeferredValue`
- 比較：`useMemo` 和 `useCallback` 的差別、`useContext` 和 `useReducer` 的差別
- 自訂 Hook(custom hook)

## 本機執行與部署

```bash
npm install
npm run dev        # http://localhost:3000/react-hook-notes/
npm run lint
npm run build      # 輸出到 dist/
```

部署:push 到 `main` 後由 GitHub Action([.github/workflows/autoAction.yml](.github/workflows/autoAction.yml))build 並把 `dist/` 推到 `gh-pages` 分支;PR 只跑 build 當檢查。

路由的 `basename` 取自 `vite.config.ts` 的 `base`;repo 改名時只要改 `base`。

需要 Node.js 20.19 以上。

技術:Vite、React 19、React Router、TypeScript、SCSS。
