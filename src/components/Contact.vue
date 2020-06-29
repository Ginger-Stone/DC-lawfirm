<template>
  <div id="contactus">
    <Pageheader title="CONTACT US" sub="This is our contact us page"></Pageheader>
    <div class="contactus-form">
      <i class="fa fa-envelope fa-2x" aria-hidden="true"></i>
      <h1>Talk to us</h1>
      <form action method="post">
        <input type="text" name id placeholder="Your Name" required />
        <input type="text" name id placeholder="Your Email" required />
        <textarea type="text" name id placeholder="Your Message..." required></textarea>
        <button type="submit">Submit</button>
      </form>
    </div>
    <div class="contact-info">
      <div class="mapouter">
        <div class="gmap_canvas">
          <iframe
            id="gmap_canvas"
            src="https://maps.google.com/maps?q=uasin%20gishu&t=k&z=13&ie=UTF8&iwloc=&output=embed"
            frameborder="0"
            scrolling="no"
            marginheight="0"
            marginwidth="0"
          ></iframe>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Pageheader from "./inc/Pageheader.vue";
export default {
  components: {
    Pageheader
  }
};
</script>
<style scoped>
#contactus {
  width: 100%;
}
.contactus-form h1 {
  display: inline-block;
}
iframe {
  width: 100%;
  height: 60vh;
  margin-top: 20px;
}
.mapouter {
  position: relative;
  text-align: right;
}
.gmap_canvas {
  overflow: hidden;
  background: none !important;
  margin-top: -50px;
}
.contactus-form {
  padding: 20px;
}
.contactus-form,
.contact-info {
  width: 45%;
  display: inline-block;
}

input,
textarea {
  width: 80%;
  padding: 10px;
  margin-bottom: 10px;
  margin-left: 5%;
}
textarea {
  height: 30vh;
}
button {
  width: 20%;
  margin-left: 40%;
  padding: 10px;
  margin-bottom: 10px;
  font-size: 15px;
  outline: none;
  border: 1px solid var(--accent-color);
  background-color: var(--accent-color);
  color: white;
}

@media screen and (max-width: 768px) {
  .contactus-form,
  .contact-info {
    width: 100%;
  }

  .contact-info {
    margin-top: 50px;
  }
}
</style>
