<template>
  <div id="aboutus">
    <Pageheader title="ABOUT US" sub="This is our about us page"></Pageheader>
    <Ourstory></Ourstory>
    <Ourteam></Ourteam>
  </div>
</template>
<script>
import Ourstory from "./aboutus/Ourstory.vue";
import Pageheader from "./inc/Pageheader.vue";
import Ourteam from "./inc/Ourteam.vue";
export default {
  components: {
    Pageheader,
    Ourstory,
    Ourteam
  }
};
</script>
<style scoped>
#aboutus {
  position: relative;
  width: 100%;
  height: 100%;
  /* margin-top: 10vh; */
}
</style>
