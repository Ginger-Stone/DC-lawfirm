<template>
  <div id="ourstory">
    <!-- <img src="../../assets/lawyers.jpg" alt="" /> -->

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
  </div>
</template>
<script>
export default {};
</script>
<style scoped>
#ourstory {
  position: relative;
  width: 100%;
  padding: 10px;
  display: block;
}
#ourstory img {
  width: 40vw;
}
#ourstory h1 {
  text-align: center;
  margin: 0;
}
.ourstory-content {
  width: 95vw;
  text-align: justify;
}
.ourstory-content p {
  color: var(--main-color);
  max-height: 25vh;
  overflow-y: scroll;
}
</style>
