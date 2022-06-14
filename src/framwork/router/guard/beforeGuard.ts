import { Router, NavigationGuardNext, RouteLocationNormalized } from 'vue-router'
export default function (router: Router) {
    router.beforeEach(
        (
            to: RouteLocationNormalized,
            from: RouteLocationNormalized,
            next: NavigationGuardNext
        ) => {
            //干一些事情。。。
            //干一些事情。。。
            //干一些事情。。。
            //干一些事情。。。

            // 如果登陆以后还访问了login页面 直接定向到home
            if (to.meta.name === 'login' && true) {
                next({
                    name: 'home'
                })
                return
            }

            // 如果未登录的时候访问了需要登录的页面 直接定向到login
            if (to.meta.auth && !false) {
                next({
                    name: 'login'
                })
                return
            }

            // 不管登录没有 访问不需要权限的路由，直接放行
            next()
        }
    )
}