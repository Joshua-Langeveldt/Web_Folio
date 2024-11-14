<template>
  <header id="home" class="bg">
    <nav class="navbar navbar-expand-lg fixed-top dark-bg">
      <a class="navbar-brand" href="#">
        <div v-if="main.logo">
          <img src="https://joshua-langeveldt.github.io/Global-Images/images/Logo/Jamin-Logo.png" alt="logo" id="Logo">
        </div>
      </a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"><i class="fas fa-bars" style="color:#fff; font-size:28px;"></i></span>
      </button>
      <div id="navbarNavAltMarkup" class="collapse navbar-collapse">
        <ul id="navbar-nav" class="navbar-nav ml-auto">
          <li :class="{'active-nav': isActive('home')}">
            <a class="nav-item nav-link" href="#home" @click="setActive('home')">Home</a>
          </li>
          <li :class="{'active-nav': isActive('about')}">
            <a class="nav-item nav-link" href="#about" @click="setActive('about')">About</a>
          </li>
          <li :class="{'active-nav': isActive('skills')}">
            <a class="nav-item nav-link" href="#skills" @click="setActive('skills')">Skills</a>
          </li>
          <li :class="{'active-nav': isActive('portfolio')}">
            <a class="nav-item nav-link" href="#portfolio" @click="setActive('portfolio')">Portfolio</a>
          </li>
          <li :class="{'active-nav': isActive('contact')}">
            <a class="nav-item nav-link" href="#contact" @click="setActive('contact')">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
    <div class="name-container">
      <div class="image-above-name">
        <img src="https://joshua-langeveldt.github.io/images/images/People/Jam-Inside.jpg" alt="Above Name Image" class="above-name-image">
      </div>
    </div>
    <AppBanner />
  </header>
</template>

<script>
import data from "../../data/data.json";
import AppBanner from "../components/AppBanner.vue";

export default {
  name: "AppHeader",
  components: {
    AppBanner,
  },
  data() {
    return {
      main: data.main || {}, // Initialize main with data from JSON or empty object
      activeLink: 'home' // Default active link
    };
  },
  methods: {
    setActive(link) {
      this.activeLink = link;
    },
    isActive(link) {
      return this.activeLink === link;
    }
  },
  mounted() {
    console.log("Data loaded:", this.main); // Log data for verification
  }
};
</script>

<style lang="scss">
#home {
  overflow: hidden;
}

#Logo {
  width: 100%;
  height: auto;
  display: block;
  margin: 0 auto;
  max-width: 80px;
  border: 2px solid #ccc;
  border-radius: 8px; 
  transition: transform 0.3s;
  object-fit: cover;
  overflow: hidden;
}

.name-container {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 1;
  font-family: "Ruda", sans-serif;
  font-optical-sizing: auto;
  font-weight: 400;
  font-style: normal;
}

.image-above-name {
  text-align: center;
  margin-bottom: 230px;
  padding: 5px;
}

.above-name-image {
  width: 100%;
  max-width: 220px;
  height: auto;
  display: block;
  margin: auto auto;
  border-radius: 8%;
}

.navbar {
  z-index: 2;
}

/* Navbar active link styling */
.nav-item {
  font-family: "Karla", sans-serif;
  text-transform: uppercase;
  font-weight: 400;
  font-size: 1rem;
  color: #f0f0f0;
  text-shadow: 7px 4px 7px rgba(0, 0, 0, 0.7);
  position: relative;
}

.active-nav a {
  background: linear-gradient(-45deg, #f5ba19, #f12711, #f5ba19) !important;
  -webkit-background-clip: text !important;
  color: transparent;
}

.navbar-toggler {
  z-index: 3;
}

</style>
