<template>
  <header id="home" class="bg">
    <nav class="navbar navbar-expand-lg fixed-top dark-bg">
      <a class="navbar-brand" href="#">
        <div v-if="main.logo">
          <img src="../../assets/images/logo.png" alt="logo" id="Logo">
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
          <li class="active-nav">
            <a class="nav-item nav-link" href="#home">Home</a>
          </li>
          <li><a class="nav-item nav-link" href="#about">About</a></li>
          <li><a class="nav-item nav-link" href="#skills">Skills</a></li>
          <li><a class="nav-item nav-link" href="#portfolio">Portfolio</a></li>
          <li><a class="nav-item nav-link" href="#contact">Contact</a></li>
        </ul>
      </div>
    </nav>
    <div class="name-container">
      <div class="image-above-name">
        <img src="https://joshua-langeveldt.github.io/images/images/People/Jam-Inside.jpg" alt="Above Name Image" class="above-name-image">
      </div>
     
    </div>
    <AppBanner />
    <AppArrow />
  </header>
</template>

<script>
import AppArrow from "../components/AppArrow.vue";
import data from "../../data/data.json";
import AppBanner from "../components/AppBanner.vue";

export default {
  name: "AppHeader",
  components: {
    AppBanner,
    AppArrow,
  },
  data() {
    return {
      main: data.main || {}, // Initialize main with data from JSON or empty object
    };
  },
  mounted() {
    console.log("Data loaded:", this.main); // Log data for verification
  }
};
</script>

<style lang="scss">

#Logo {
  width: 100%;
  max-width: 200px;
  height: auto;
  display: block;
  margin: 0 auto;
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

/* Navbar styling to ensure it doesn't overlap the name container */
.navbar {
  z-index: 2;
}

</style>
