//配置路由相关的信息
import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

// 3. 创建路由实例并传递 `routes` 配置
const router = createRouter({
    // 4. 内部提供了 history 模式的实现。为了简单起见，我们在这里使用 hash 模式。
  history: createWebHistory(import.meta.env.BASE_URL),
  
 

  //定义一些路由数组
  // console.log(import.meta.env);
  routes: [
    {
      path: '/',
      name: 'home',
      // 每个路由都需要映射到一个组件。
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    }
  ]
})


//console.log(import.meta.env.BASE_URL);
//进行路由导出
export default router
