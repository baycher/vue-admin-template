import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

/* Layout */
import Layout from '@/layout'

export const constantRoutes = [


  {
    path: '/404',
    component: () => import('@/views/404'),
    hidden: true
  },

  {
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    children: [{
      path: 'dashboard',
      name: 'dashboard',
      component: () => import('@/views/dashboard/index'),
      meta: { title: '系统首页', icon: 'dashboard' }
    }]
  },
  {
    path: '/energywarning',
    component: Layout,
    redirect: '/energywarning',
    children: [{
      path: 'energywarning',
      name: 'energywarning',
      component: () => import('@/views/energywarning/index'),
      meta: { title: '能效预警', icon: 'dashboard' }
    }]
  },



  { path: '*', redirect: '/404', hidden: true }
]

const createRouter = () => new Router({
  
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRoutes
})

const router = createRouter()

export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher 
}
export default router
