<template>
  <div id="ourteam">
    <h1>Our Team</h1>
    <div class="team-items">
      <div class="team-item">
        <div class="item-img">
          <img src="../../assets/female-exec2.jpg" alt />
        </div>
        <div class="item-info">
          <h1>Alexine Kwamboka</h1>
          <small>Founder and Director</small>
          <p>Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.</p>
          <div class="social">
            <span class="social-item">
              <i class="fab fa-linkedin" aria-hidden="true"></i>
            </span>
            <span class="social-item">
              <i class="fab fa-facebook-f" aria-hidden="true"></i>
            </span>
            <span class="social-item">
              <i class="fab fa-twitter" aria-hidden="true"></i>
            </span>
            <span class="social-item">
              <i class="fa fa-envelope" aria-hidden="true"></i>
            </span>
          </div>
        </div>
      </div>
      <div class="team-item">
        <div class="item-img">
          <img src="../../assets/male-exec.jpg" alt />
        </div>
        <div class="item-info">
          <h1>John Kigen</h1>
          <small>Criminal Lawyer</small>
          <p>Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.</p>
          <div class="social">
            <span class="social-item">
              <i class="fab fa-linkedin" aria-hidden="true"></i>
            </span>
            <span class="social-item">
              <i class="fab fa-facebook-f" aria-hidden="true"></i>
            </span>
            <span class="social-item">
              <i class="fab fa-twitter" aria-hidden="true"></i>
            </span>
            <span class="social-item">
              <i class="fa fa-envelope" aria-hidden="true"></i>
            </span>
          </div>
        </div>
      </div>
      <div class="team-item">
        <div class="item-img">
          <img src="../../assets/male-exec2.jpg" alt />
        </div>
        <div class="item-info">
          <h1>Malcom Makoha</h1>
          <small>Employment Law Lawyer</small>
          <p>Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.</p>
          <div class="social">
            <span class="social-item">
              <i class="fab fa-linkedin" aria-hidden="true"></i>
            </span>
            <span class="social-item">
              <i class="fab fa-facebook-f" aria-hidden="true"></i>
            </span>
            <span class="social-item">
              <i class="fab fa-twitter" aria-hidden="true"></i>
            </span>
            <span class="social-item">
              <i class="fa fa-envelope" aria-hidden="true"></i>
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style>
#ourteam {
  width: 100%;
}
.team-items {
  display: flex;
  flex-wrap: nowrap;
  overflow-x: scroll;
  width: 100%;
}
.team-item {
  min-width: 99%;
}
.team-items::-webkit-scrollbar {
  width: 1em;
}
.item-img,
.item-info {
  display: inline-block;
  width: 45%;
}
.item-img img {
  width: 100%;
  max-height: 40vh;
  object-fit: cover;
}
.item-info h1,
.item-info small,
.item-info p,
.item-info .social {
  padding: 0 10px;
}
.item-info small {
  font-style: italic;
}
.item-info p {
  font-size: 0.9em;
}
.item-info .social {
  display: flex;
  width: 50%;
  justify-content: space-around;
}

.social svg {
  font-size: 1.5em;
}

@media screen and (max-width: 425px) {
  .item-img,
  .item-info {
    width: 100%;
  }
  .item-img img {
    max-height: 30vh;
  }
  .item-info .social {
    display: flex;
    width: 50%;
    margin-left: -12px;
    justify-content: space-evenly;
  }
}
</style>