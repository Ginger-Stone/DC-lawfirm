<template>
  <div id="expertise">
    <Pageheader title="OUR EXPERTISE" sub="This is our services page"></Pageheader>
    <h1>What we do</h1>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit, Eligendi nisi ratione.</p>
    <div class="service-items">
      <div class="service-item">
        <img src="../assets/icons/auction.png" alt />
        <div class="item-info">
          <h1>Real Estate Law</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis perferendis impedit, quibusdam, similique nihil magni adipisci voluptates earum blanditiis voluptatum sequi repellat animi voluptatibus explicabo harum iure. Facere nisi, ipsam temporibus nam fugit animi ea? Fuga illo pariatur accusamus optio libero repellat perspiciatis, repudiandae placeat ratione totam aut rerum fugit.</p>
        </div>
      </div>
      <div class="service-item">
        <img src="../assets/icons/family.png" alt />
        <div class="item-info">
          <h1>Family Law</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis perferendis impedit, quibusdam, similique nihil magni adipisci voluptates earum blanditiis voluptatum sequi repellat animi voluptatibus explicabo harum iure. Facere nisi, ipsam temporibus nam fugit animi ea? Fuga illo pariatur accusamus optio libero repellat perspiciatis, repudiandae placeat ratione totam aut rerum fugit.</p>
        </div>
      </div>
      <div class="service-item">
        <img src="../assets/icons/prisoner.png" alt />
        <div class="item-info">
          <h1>Criminal Law</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis perferendis impedit, quibusdam, similique nihil magni adipisci voluptates earum blanditiis voluptatum sequi repellat animi voluptatibus explicabo harum iure. Facere nisi, ipsam temporibus nam fugit animi ea? Fuga illo pariatur accusamus optio libero repellat perspiciatis, repudiandae placeat ratione totam aut rerum fugit.</p>
        </div>
      </div>
    </div>
    <Ourteam></Ourteam>
  </div>
</template>
<script>
import Pageheader from "./inc/Pageheader.vue";
import Ourteam from "./inc/Ourteam.vue";
export default {
  components: {
    Pageheader,
    Ourteam
  }
};
</script>
<style scoped>
#expertise {
  width: 100%;
}
.service-item {
  display: inline-block;
  width: 25%;
}
.service-item img {
  width: 50%;
  margin-left: 20%;
}
.item-info {
  width: 100%;
}
.item-info h1 {
  text-align: center;
}
.item-info p {
  text-align: justify;
  color: rgba(0, 0, 0, 0.7);
  padding: 0 20px;
}
@media screen and (max-width: 768px) {
  .service-items {
    display: flex;
    flex-wrap: nowrap;
    width: 100%;
    overflow-x: scroll;
  }
  .service-item {
    min-width: 46%;
  }
  .service-items::-webkit-scrollbar {
    width: 1em;
  }
}
@media screen and (max-width: 425px) {
  .service-item {
    min-width: 96%;
  }
}
</style>
