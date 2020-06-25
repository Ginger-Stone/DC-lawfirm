<template lang="">
  <div id="servicesHome">
    <div id="values">
      <div class="value-item">
        <h3>Criminal Law</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias
          doloremque, quis, eaque minus harum modi eius veritatis.
        </p>
      </div>
      <div class="value-item">
        <h3>Estate Planing</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias
          doloremque, quis, eaque minus harum modi eius veritatis.
        </p>
      </div>
      <div class="value-item">
        <h3>Family Law</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias
          doloremque, quis, eaque minus harum modi eius veritatis.
        </p>
      </div>
      <div class="value-item">
        <h3>Employment Law</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias
          doloremque, quis, eaque minus harum modi eius veritatis.
        </p>
      </div>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style scoped>
#servicesHome {
  position: relative;
  margin-top: 70vh;
  /* top: 70vh; */
  z-index: 1000;
  width: 100%;
  /* overflow: hidden; */
}
#values {
  height: 30vh;
  max-width: 100%;
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-around;
  scroll-behavior: auto;
  overflow-x: scroll;
  overflow-y: hidden;
}
#values::-webkit-scrollbar {
  width: 1em;
}
.value-item {
  background-color: white;
  color: var(--main-color);
  padding: 20px;
  margin: 5px;
  min-width: 30vw;
  font-size: 0.8em;
}
@media screen and (min-width: 1024px) {
  .value-item {
    min-width: 20vw;
  }
}
@media screen and (max-width: 425px) {
  .value-item {
    min-width: 40vw;
  }
}
</style>
