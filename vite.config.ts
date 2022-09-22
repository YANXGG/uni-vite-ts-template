import { defineConfig } from 'vite';
import uni from '@dcloudio/vite-plugin-uni';
import AutoImport from 'unplugin-auto-import/vite';
import * as path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    uni(),
    AutoImport({
      imports: ['vue', 'uni-app'],
      dts: 'src/auto-imports.d.ts' // 编译后自动生成声明文件
    })
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src')
    },
    extensions: ['.js', '.ts', '.jsx', '.tsx', '.json', '.vue']
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: '@use "src/styles/index.scss" as *;'
      }
    }
  }
});
