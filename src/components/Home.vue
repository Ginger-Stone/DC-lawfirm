<template lang="">
  <div id="home">
    <!-- <Nav></Nav> -->
    <Homebg></Homebg>
    <ServicesHome></ServicesHome>
    <Review></Review>
  </div>
</template>

<script>
import Homebg from "./Homebg.vue";
// import Nav from "./Nav.vue";
import ServicesHome from "./ServicesHome.vue";
import Review from "./Review.vue";

export default {
  name: "Home",
  components: {
    Homebg,
    // Nav,
    ServicesHome,
    Review,
  },
};
</script>

<style scoped>
#home {
  /* position: relative; */
  height: fit-content;
}
</style>
