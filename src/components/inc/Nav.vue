<template lang="">
  <div id="nav">
    <div id="top-nav">
      <div class="phone">
        <i class="fas fa-phone fa-flip-horizontal" aria-hidden="true"></i>
        <a>+254 729 488 555</a>
      </div>
      <div class="email">
        <i class="fa fa-envelope" aria-hidden="true"></i
        ><a>info@uasingishulawfirm.org</a>
      </div>
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
      </div>
    </div>
    <nav class="main-nav">
      <div id="nav-left">
        <img src="../../assets/logo.png" alt="UG Law Firm" />
        <h1>UG LawFirm</h1>
      </div>
      <div id="nav-right">
        <router-link to="/">Home</router-link>
        <router-link to="/about">About Us</router-link>
        <router-link to="/expertise">Our Expertise</router-link>
        <router-link to="/contact">Contact Us</router-link>
        <router-link to="/appointment" class="cta">Appointment</router-link>
      </div>
    </nav>
    <div class="collapse">
      <nav>
        <div id="nav-left">
          <!-- <img src="../assets/logo.png" alt="UG Law Firm"> -->
          <h1>UG LawFirm</h1>
        </div>
        <div id="nav-right">
          <button id="side" v-on:click="showdata">
            <i class="fas fa-bars fa-2x"></i>
          </button>
          <button id="contact" v-on:click="showdata">
            <i class="far fa-id-badge fa-2x"></i>
          </button>
        </div>
      </nav>
      <div v-if="showside" id="side-nav">
        <router-link to="/">Home</router-link>
        <router-link to="/about">About Us</router-link>
        <router-link to="/expertise">Our Expertise</router-link>
        <router-link to="/contact">Contact Us</router-link>
        <router-link to="/appointment" class="cta">Appointment</router-link>
      </div>

      <div v-if="showcontact" id="contact-nav">
        <div class="phone">
          <i class="fas fa-phone fa-flip-horizontal" aria-hidden="true"></i>
          <a>+254 729 488 555</a>
        </div>
        <div class="email">
          <i class="fa fa-envelope" aria-hidden="true"></i
          ><a>info@uasingishulawfirm.org</a>
        </div>
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
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      showside: false,
      showcontact: false
    };
  },
  methods: {
    showdata: function(event) {
      let btn = event.target.id;
      let modal = btn + "-nav";
      if (modal == "side-nav") {
        this.showside = !this.showside;
      } else if (modal == "contact-nav") {
        this.showcontact = !this.showcontact;
      }
    }
  },
  computed: {}
};
</script>

<style scoped>
:root {
  --main-color: #2c3e50;
  --accent-color: #031828;
}

nav {
  width: 100%;
  position: fixed;
  height: 10vh;
  background-color: #fff;
}

/* ensures that button is clickable even if it has other elements in it */
button > * {
  pointer-events: none;
}
#nav {
  width: 100%;
  z-index: 2000;
  position: absolute;
  top: 0;
}

#nav-left,
#nav-right,
.phone,
.email,
.social,
#menu {
  display: inline-block;
}

#nav-left {
  float: left;
  margin-left: 50px;
}
h1 {
  margin-top: -40px !important;
  margin-left: 80px;
}

#nav-right {
  float: right;
  margin-right: 50px;
  margin-top: 20px;
}

a {
  padding: 8px;
  font-size: 1.2em;
  text-decoration: none;
  color: var(--accent-color);
}

img {
  width: 50px;
}
#top-nav {
  background-color: var(--accent-color);
  padding: 10px;
  color: white;
  display: flex;
  justify-content: space-around;
}
#top-nav a {
  font-size: 1em;
  color: white;
}
#top-nav .social svg {
  margin-right: 20px;
}
.cta {
  border-bottom: 1px solid var(--accent-color);
  color: var(--accent-color);
  padding: 20px;
}
.collapse {
  visibility: hidden;
  display: none;
}
nav a:hover,
#side-nav a:hover {
  color: var(--accent-color);
  font-weight: bolder;
  transition: all 200ms ease-in-out 200ms;
  cursor: pointer;
}
.cta:hover {
  color: white !important;
  background-color: var(--accent-color);
  transition: all 200ms ease-in-out 200ms;
}
nav a:active,
#side-nav a:active {
  font-weight: bolder;
}

@media screen and (max-width: 768px) {
  nav {
    width: 100%;
    position: fixed;
    height: 10vh;
  }
  .main-nav,
  #top-nav {
    visibility: hidden;
    display: none;
  }
  .collapse {
    visibility: visible;
    display: block;
    width: 100vw;
  }
  h1 {
    margin-top: 0px !important;
    margin-left: 0px;
  }
  #contact-nav a {
    color: var(--main-color);
    font-size: 0.8em;
  }
  #contact-nav .social {
    display: flex;
    justify-content: space-between;
    width: 60%;
    margin-left: 20%;
    margin-top: 10px;
  }

  #contact-nav {
    position: relative;
    display: block;
    float: right;
    margin-top: 60px;
    background-color: white;
    padding: 20px;
    text-align: center;
  }

  .phone,
  .email,
  .social {
    display: block;
  }

  #contact-nav #top-nav a {
    color: var(--main-color);
  }

  #nav-right svg:first-child {
    margin-right: 25px;
  }
  #nav-left,
  #nav-right {
    margin-top: 20px;
  }

  nav button {
    background-color: transparent;
    position: relative;
    z-index: 2500;
    border: none;
    outline: none;
  }

  button svg {
    position: relative;
    z-index: 200;
  }

  #side-nav {
    display: block;
    position: absolute;
    background-color: white;
    width: 40vw;
    margin-bottom: 20px;
    margin-top: 70px;
    height: 60vh;
    color: var(--accent-color);
    padding-top: 10px;
    border: 1px solid var(--main-color);
    border-left: none;
  }
  #side-nav a {
    display: block;
    padding: 20px 0 20px 15px;
    font-size: 1em;
    margin: 5px;
  }
  .cta {
    border: 1px solid var(--accent-color);
    color: white;
    background-color: var(--accent-color);
  }
  @media screen and (max-width: 425px) {
    nav {
      width: 100%;
      position: fixed;
      height: 10vh;
      background-color: #fff;
    }
    #nav-left {
      margin-left: 20px;
    }
    #nav-right {
      margin-right: 20px;
    }
    #nav-right svg:first-child {
      margin-right: 10px;
    }
  }
}
</style>
