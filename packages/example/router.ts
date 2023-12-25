import {createRouter, createWebHistory, RouteRecordRaw} from "vue-router";
const pageModules=import.meta.glob('../components/**/demo.vue')
const routes=Object.entries(pageModules).map(([realPath,component]):RouteRecordRaw=>{
    const path=realPath
        .replace('../components','')
        .replace(/(a-zA-Z)/,(_,str)=>str.toLowerCase())
        .replace('/demo.vue','')
        .replace(/(\/A-Za-z)/,(_,str)=>{
            return str.toLowerCase()
        })
    const name=path.replace(/(\/A-Za-z)/,(_,str)=>{
        return str.slice(1).toUpperCase()
    })
    return {
        path,
        name,
        component
    }
})
export default createRouter({
    history:createWebHistory(),
    routes
})
