<template>
  <div id="ourstory">
    <div class="ourstory-content">
      <h1>Our Story</h1>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt qui
        voluptas, odio possimus dolor corporis natus quibusdam corrupti,
        provident obcaecati, quasi velit ipsa pariatur asperiores mollitia
        assumenda minima tempora temporibus impedit error! Odio nostrum cumque
        modi ullam debitis ab architecto explicabo, corporis sint quae. Dolores
        voluptas doloremque quaerat ad ducimus ratione placeat tempore,
        perferendis officia asperiores ipsa ipsam reprehenderit fuga, maxime
        minima consectetur repellat pariatur aspernatur delectus! Nam odit
        soluta fugit omnis! In optio nobis fugiat excepturi delectus.
      </p>
    </div>
    <div class="ourstory-services">
      <div class="service-item">
        <small>Criminal Law</small>
        <progress max="100" value="90"></progress>
      </div>
      <div class="service-item">
        <small>Employment Law</small>
        <progress max="100" value="60"></progress>
      </div>
      <div class="service-item">
        <small>Employment Law</small>
        <progress max="100" value="80"></progress>
      </div>
      <div class="service-item">
        <small>Real Estate Law</small>
        <progress max="100" value="75"></progress>
      </div>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style scoped>
#ourstory {
  position: relative;
  width: 100%;
  margin-top: 10vh;
  padding: 10px;
  display: block;
  margin: 0;
  padding: 0;
}

#ourstory img {
  width: 100vw;
  height: 40vh;
}

.ourstory-content,
.ourstory-services {
  display: inline-block;
  width: 40%;
  text-align: justify;
  padding: 0 20px;
}
.ourstory-content p {
  color: var(--main-color);
  max-height: 25vh;
  overflow-y: scroll;
}
.ourstory-content p::-webkit-scrollbar {
  width: 1em;
}

.service-item {
  width: 100%;
  padding: 10px;
}

.service-item small {
  display: block;
}
progress[value] {
  /* reset the default appearance */
  /* -webkit-appearance: none;
  appearance: none; */
  width: 80%;
  height: 5px;
  /* background-color: var(--main-color); */
}
progress[value]::-webkit-progress-bar {
  background-color: var(--main-color);
  border-radius: 2px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.25) inset;
}
@media screen and (max-width: 768px) {
  .ourstory-content,
  .ourstory-services {
    margin-left: 8%;
    width: 80%;
    text-align: justify;
  }
}
</style>
