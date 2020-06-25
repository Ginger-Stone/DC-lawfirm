<template>
  <div id="aboutus">
    <Ourstory></Ourstory>
  </div>
</template>
<script>
import Ourstory from "./aboutus/Ourstory.vue";
export default {
  components: {
    Ourstory,
  },
};
</script>
<style scoped>
#aboutus {
  position: relative;
  width: 100%;
  height: 100%;
  margin-top: 10vh;
}
</style>
