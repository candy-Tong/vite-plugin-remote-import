# vite-plugin-remote-import
将本地模块，替换成 url 模块引入。可以通过控制 url 的响应内容，达到动态控制包版本的效果

```typescript
import { defineConfig } from 'vite';
import { remoteImport } from './vite-reomte-import';

export default defineConfig({
  plugins: [
    remoteImport({
      vue: 'https://unpkg.com/vue@3.2.37/dist/vue.runtime.esm-browser.js',
    }),
  ],
});
```

该插件会在编译时，将 `vue` 替换成 `https://unpkg.com/vue@3.2.37/dist/vue.runtime.esm-browser.js`
本地写的代码
```typescript
import { ref } from "vue"
```
会被转换成
```typescript
import { ref } from "https://unpkg.com/vue@3.2.37/dist/vue.runtime.esm-browser.js";
```

可以通过动态控制 url 的响应内容，动态控制引入的模块版本：
![](https://img-1252756644.cos.ap-nanjing.myqcloud.com/img/20220819145418.png)
