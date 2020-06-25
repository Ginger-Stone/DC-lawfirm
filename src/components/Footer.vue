<template>
  <div id="footer">
    <div class="social">
      <span class="social-item">
        <i class="fab fa-linkedin fa-2x" aria-hidden="true"></i>
      </span>
      <span class="social-item">
        <i class="fab fa-facebook-f fa-2x" aria-hidden="true"></i>
      </span>
      <span class="social-item">
        <i class="fab fa-twitter fa-2x" aria-hidden="true"></i>
      </span>
    </div>
    <div id="copyright">
      Copyright 2020 UG Law Firm. Designed by
      <a href="https://doreenchemweno.techdicted.co.ke/"> Doreen Chemweno </a>.
      All rights reserved.
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
#footer {
  position: relative;
  bottom: 0;
  z-index: 1000;
  margin-top: 50px;
  padding: 20px 0 0 0;
  text-align: center;
  opacity: 0.8;
}

.social,
#copyright {
  padding: 5px;
  font-size: 0.7em;
}
.social svg {
  font-size: 1.2em;
  padding: 0 10px;
}

a {
  color: var(--accent-color);
  font-weight: bold;
  text-decoration: none;
  padding: 5px;
}

a:hover {
  color: white;
  background-color: var(--accent-color);
  padding: 5px;
  transition: all 500ms ease-in-out 500ms;
}
</style>
