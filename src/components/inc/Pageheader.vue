<template>
  <div id="pageheader">
    <div class="page-header">
      <h1>{{ title }}</h1>
      <small>{{ sub }}</small>
    </div>
  </div>
</template>
<script>
export default {
  el: "#pageheader",
  props: {
    title: String,
    sub: String
  }
};
</script>
<style scoped>
#pageheader {
  display: block;
  width: 100%;
  height: 50vh;
  background-size: cover;
  background-image: url("../../assets/lawyers.jpg");
  margin: 0;
  padding: 0;
}
.page-header {
  width: 100%;
  position: absolute;
  top: 25vh;
}
.page-header h1,
.page-header small {
  display: block;
  width: 100%;
  text-align: center;
  margin: 0;
  color: white;
  padding: 10px;
}
</style>
