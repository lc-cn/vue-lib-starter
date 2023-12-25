import {App, Component} from "vue";
const components=import.meta.glob('../components/**/index.ts')
export function install(app: App) {
    Object.entries(components).map(async ([path,loader])=>{
        const name=path.replace('../components','')
            .replace('/index.ts','')
            .replace(/\//g,'')
        const mod=await loader() as {default:Component}
        app.component(name,mod.default)
    })
}

export default {
    install
}
