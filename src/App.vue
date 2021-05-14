<template>
  <div id="app">
    <h1 class="logo">知识收藏册</h1>
    <!-- <LeftMenu /> -->
    <Header />
    <router-view />
  </div>
</template>

<script>
  import Header from "./views/Header/header.vue";
  import LeftMenu from "./views/LeftMenu/leftMenu.vue";
  export default {
    components: {
      Header,
      LeftMenu,
    },
    setup() {
      console.log("test");
      return {};
    },
  };
</script>

<style>
  #app,
  body {
    padding: 0;
    margin: 0;
  }

  #app {
    padding: 10px;
  }

  .logo {
    text-align: center;
    width: 100%;
  }
</style>