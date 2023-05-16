

<script setup lang="ts">
  // App.vue 用来编写待渲染的 模板结构
  //index.html 中需要预留一个 el 区域
  //main.js 把 App.vue 渲染到了 index.html 所预留的区域中


import { RouterLink, RouterView } from 'vue-router'
//局部注册
import HelloWorld from './components/HelloWorld.vue'

</script>


 

<template>
  
  <!-- <header> 元素应该作为介绍内容或者导航链接栏的容器。 -->
  <header>
    <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />

    <div class="wrapper">
      
      <HelloWorld msg="You did it!" />

      <!--使用 router-link 组件进行导航 -->
      <!--通过传递 `to` 来指定链接 -->
      <!--`<router-link>` 将呈现一个带有正确 `href` 属性的 `<a>` 标签-->

        <!-- <nav> 标签表示一个页面中的某个部分，目的是提供导航链接，常见的导航栏的示例是菜单、目录和索引 -->
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
    </div>
  </header>

  <!-- 路由出口 -->
  <!-- 路由匹配到的组件将渲染在这里 -->
  <RouterView />
</template>

<style scoped>

header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
