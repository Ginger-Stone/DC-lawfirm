<template>
  <div id="app">
    <Nav></Nav>
    <!-- <home></home> -->
    <router-view></router-view>
    <Footer></Footer>
  </div>
</template>

<script>
// import Home from "./components/Home.vue";
import Nav from "./components/Nav.vue";
import Footer from "./components/Footer.vue";

export default {
  name: "App",
  components: {
    // Home,
    Footer,
    Nav,
  },
};
</script>

<style>
:root {
  --main-color: #2c3e50;
  --accent-color: #031828;
}

html,
body {
  font-size: 1em;
  padding: 0;
  margin: 0;
  border: none;
  overflow-x: hidden;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: var(--accent-color);
}
</style>
