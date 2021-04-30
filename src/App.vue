<template>
  <div id="app">
    <Header />
    <LeftMenu />
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
</style>
