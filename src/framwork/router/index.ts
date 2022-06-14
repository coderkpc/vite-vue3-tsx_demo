import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router"
import { beforeGuard, afterGuard } from "./guard/index"

// RouteRecordRaw是类型
const routes: RouteRecordRaw[] = [
    {
        path: '/',
        name: 'Login',
        component: () => import('@/framwork/views/login')
    },
    {
        path: '/home',
        name: 'Home',
        component: () => import('@/framwork/views/home')
    },
    {
        path: "/:pathMatch(.*)*", // 注意此处 404页面匹配规则和以前不相同，得采用这种配置方式才行
        name: "404",
        component: () => import("@/framwork/views/404"),
    },
]

// createRouter用来创建路由实例
const router = createRouter({
    // createWebHashHistory用来创建hash模式
    history: createWebHashHistory(),
    routes
})

// 挂载前置守卫
beforeGuard(router)

// 挂载后置守卫
afterGuard(router)

// 暴露实例
export default router