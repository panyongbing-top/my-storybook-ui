import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    extensions: ['.mjs', '.js', '.ts', '.jsx', '.tsx', '.json'],
    alias: {
      '@': '/src'
    }
  },
  build: {
    outDir: 'docs'
  },
  css: {
    // postcss: {
    //   plugins: [
    //     require('postcss-pxtorem')({ // 把px单位换算成rem单位
    //       rootValue: 32, // 换算基数，默认100，这样的话把根标签的字体规定为1rem为50px,这样就可以从设计稿上量出多少个px直接在代码中写多上px了。
    //       propList: ['*'], //属性的选择器，*表示通用
    //       unitPrecision: 5, // 允许REM单位增长到的十进制数字,小数点后保留的位数。
    //       exclude: /(node_module)/, // 默认false，可以（reg）利用正则表达式排除某些文件夹的方法
    //     })
    //   ]
    // }
    // 配置全局css
    preprocessorOptions: {
      scss: {
        additionalData: '@import "@/assets/styles/global.scss";'
      }
    }
  }
})
