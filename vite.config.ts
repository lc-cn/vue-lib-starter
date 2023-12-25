import path from 'node:path'
import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'
import dts from 'vite-plugin-dts'
import DefineOptions from "unplugin-vue-define-options/vite";

export default defineConfig({
    css: {
        modules: {
            scopeBehaviour: "global",
            generateScopedName: "grace-ui"
        },
        preprocessorOptions: {
            scss: {
                additionalData: `@import "grace-ui/styles/variables.scss";`
            }
        }
    },
    resolve: {
        alias: [
            {
                find: /^grace-ui$/,
                replacement: path.resolve(__dirname, 'src')
            },
            {
                find: /^grace-ui\/(.*)/,
                replacement: path.resolve(__dirname, 'src/$1')
            }
        ],
        extensions:[
            ".ts",
            ".vue",
            ".scss"
        ]
    },
    build: {
        outDir: "./lib",
        lib: {
            entry: "src/index.ts",
            name: 'grace-ui'
        },
        rollupOptions: {
            // 确保外部化处理那些你不想打包进库的依赖
            external: ['vue'],
            input: ["src/index.ts"],
            output: [
                {
                    //打包格式
                    format: "es",
                    //打包后文件名
                    entryFileNames: "[name].mjs",
                    //让打包目录和我们目录对应
                    preserveModules: true,
                    exports: "named",
                    //配置打包根目录
                    dir: "./lib/es",
                },
                {
                    //打包格式
                    format: "cjs",
                    //打包后文件名
                    entryFileNames: "[name].js",
                    //让打包目录和我们目录对应
                    preserveModules: true,
                    exports: "named",
                    //配置打包根目录
                    dir: "./lib/cjs",
                }
            ]
        }
    },
    plugins: [
        vue(),
        dts({
            entryRoot: "./src",
            outDir: ["./lib/es", "./lib/cjs"],
            //指定使用的tsconfig.json为我们整个项目根目录下,如果不配置,你也可以在components下新建tsconfig.json
            tsconfigPath: "./tsconfig.json",
        }),
        DefineOptions(),
    ]
})
