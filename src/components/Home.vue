<template lang="">
  <div id="home">
    <Homebg></Homebg>
    <ServicesHome></ServicesHome>
    <Review></Review>
  </div>
</template>

<script>
import Homebg from "./home/Homebg.vue";
import ServicesHome from "./home/ServicesHome.vue";
import Review from "./inc/Review.vue";

export default {
  name: "Home",
  components: {
    Homebg,
    ServicesHome,
    Review
  }
};
</script>

<style scoped>
#home {
  /* position: relative; */
  height: fit-content;
}
</style>
