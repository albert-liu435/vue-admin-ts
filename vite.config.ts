import { fileURLToPath, URL } from 'node:url'

// import { defineConfig,loadEnv  } from 'vite'
// import vue from '@vitejs/plugin-vue'
//https://zhuanlan.zhihu.com/p/627115300


// //最基础的配置
// // https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [vue()],
//   resolve: {
//     alias: {
//       '@': fileURLToPath(new URL('./src', import.meta.url))
//     }
//   }
// })



import { defineConfig, loadEnv } from "vite";
import vue from "@vitejs/plugin-vue";

//参考知乎：https://zhuanlan.zhihu.com/p/627115300
//https://zhuanlan.zhihu.com/p/627115300
// https://vitejs.dev/config/
export default defineConfig(({ mode, command, ssrBuild }) => {


  const root = process.cwd();
  //读取当前环境中env文件的内容
  const env = loadEnv(mode, root);
  // console.log(env);
  return {
    plugins: [vue()],
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url))
      }
    }
  }
});