<template lang="">
  <div id="homebg">
    <div class="home-bg">
      <div class="overlay"></div>
      <img src="../assets/homebg.png" />
    </div>
    <div id="home-content">
      <h1>
        "Justice will not be served until those who are unaffected are as
        outraged as those who are"
      </h1>
      <small>-Benjamin Franklin</small>
      <div id="home-actions">
        <a href="">Book Appointment</a>
        <a>Learn More</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
:root {
  --main-color: #2c3e50;
  --accent-color: #031828;
}

#homebg {
  position: absolute;
  width: 100%;
  top: 12vh;
  z-index: -1;
  overflow: hidden;
}
.home-bg {
  width: 100%;
}
.overlay {
  background-color: rgba(0, 0, 0, 0.3);
  position: absolute;
  z-index: 500;
  width: 100%;
  height: 100%;
}
img {
  width: auto;
  height: 70vh;
  overflow: hidden;
  margin-top: 7vh;
}
#home-content {
  position: absolute;
  z-index: 1000;
  top: 12vh;
  width: 50%;
  margin-left: 50%;
  padding: 15px;
  background-color: rgba(255, 255, 255, 0.2);
}

#home-content h1 {
  font-size: 1.8em;
  width: 100%;
}

#home-actions {
  margin: 50px 5px 50px 5px;
}

#home-actions a {
  background-color: var(--accent-color);
  color: white;
  padding: 10px;
  margin-right: 10px;
}

a {
  text-decoration: none;
}

@media screen and (max-width: 768px) {
  #home-content {
    top: 23vh;
  }
}

@media screen and (max-width: 750px) {
  #homebg {
    top: 0vh;
  }

  #home-content {
    width: 80%;
    margin-left: 0;
  }

  #home-content h1 {
    font-size: 1.2em;
  }

  #home-actions a {
    font-size: 0.8em;
  }
}
</style>
