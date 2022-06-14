import { defineConfig } from 'vite'
import { resolve } from 'path'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'

// https://vitejs.dev/config/
export default defineConfig({
    // 插件
    plugins: [
        vue(),
        vueJsx()
    ],
    // 端口
    server: {
        port: 7385
    },
    // 路径别名
    resolve: {
        alias: {
            '@': resolve(__dirname, '/src')
        }
    },
    css: {
        preprocessorOptions: {
            scss: {
                additionalData: '@import "@/framwork/css/global/main.scss"'
            }
        }
    }
})
