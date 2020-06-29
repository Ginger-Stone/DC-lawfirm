<template lang="">
  <div id="review">
    <h1>Latest Reviews</h1>
    <div id="review-items">
      <div class="review-item">
        <div class="img">
          <img src="../../assets/review-female.jpg" alt="" />
        </div>
        <div class="review-details">
          <span class="name">Jacks Muthoni</span>
          <span class="description"
            >Thanks so much guys. You saved me alt of husstle during my midlife
            crisis if I may call it.</span
          >
          <span class="service">Employment Law</span>
          <star-rating
            v-bind:increment="0.5"
            v-bind:max-rating="3"
            v-bind:star-size="20"
            v-bind:show-rating="false"
            v-model="rating"
          ></star-rating>
        </div>
      </div>
      <div class="review-item">
        <div class="img">
          <img src="../../assets/review-female.jpg" alt="" />
        </div>
        <div class="review-details">
          <span class="name">Jacks Muthoni</span>
          <span class="description">
            Thanks so much guys. You saved me alt of husstle during my midlife
            crisis if I may call it.</span
          >
          <span class="service">Employment Law</span>
          <star-rating
            v-bind:increment="0.5"
            v-bind:max-rating="3"
            v-bind:star-size="20"
            v-bind:show-rating="false"
            v-model="rating"
          ></star-rating>
        </div>
      </div>
      <div class="review-item">
        <div class="img">
          <img src="../../assets/review-female.jpg" alt="" />
        </div>
        <div class="review-details">
          <span class="name">Jacks Muthoni</span>
          <span class="description"
            >Thanks so much guys. You saved me alt of husstle during my midlife
            crisis if I may call it. Thanks so much guys. You saved me alt of
            husstle during my midlife crisis if I may call it. Thanks so much
            guys. You saved me alt of husstle during my midlife crisis if I may
            call it.</span
          >
          <span class="service">Employment Law</span>
          <star-rating
            v-bind:increment="0.5"
            v-bind:max-rating="3"
            v-bind:star-size="20"
            v-bind:show-rating="false"
            v-model="rating"
          ></star-rating>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import StarRating from "vue-star-rating";
export default {
  components: {
    StarRating
  }
};
</script>

<style scoped>
h1 {
  font-size: 1.5em;
}
#review {
  width: 100%;
  /* overflow-x: scroll;
  overflow-y: hidden; */
  position: relative;
  /* margin-top: 105vh;
  padding: 10px; */
  max-height: 28vh;
  height: 28vh;
  margin: 0;
}
#review-items {
  max-width: 100%;
  display: flex;
  overflow-x: scroll;
  overflow-y: hidden;
  margin: 0;
}
#review-items::-webkit-scrollbar,
.review-details span.description::-webkit-scrollbar {
  width: 1em;
}
.review-item {
  min-width: 50vw;
  max-height: 22vh;
  margin-right: 10px;
  display: flex;
  justify-content: space-evenly;
  font-size: 0.8em;
  border: 1px solid var(--accent-color);
  border-top: none;
  background-color: var(--main-color);
  padding: 5px;
  border-left: none;
}
.review-details {
  padding: 10px;
}

.review-details span.name {
  font-size: 1em;
  color: white;
  display: block;
  font-weight: bold;
}

.review-details span.description {
  color: white;
  display: block;
  margin: 10px 0 10px 0;
  overflow-y: scroll;
  max-height: 7vh;
}

.review-details span.service {
  font-style: italic;
  color: white;
  display: block;
  padding-bottom: 10px;
}

img {
  width: 80px;
  border-radius: 20px 20px 5px;
}
@media screen and (max-width: 425px) {
  .review-item {
    min-width: 75vw;
  }
}
</style>
