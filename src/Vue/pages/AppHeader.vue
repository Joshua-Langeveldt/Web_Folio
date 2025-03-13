<template>
  <header id="home" class="bg">
    <div class="gradient-bg"></div>
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
            <a class="nav-item nav-link" href="#home" @click="scrollToSection('home')">Home</a>
          </li>
          <li :class="{'active-nav': isActive('about')}">
            <a class="nav-item nav-link" href="#about" @click="scrollToSection('about')">About</a>
          </li>
          <li :class="{'active-nav': isActive('skills')}">
            <a class="nav-item nav-link" href="#skills" @click="scrollToSection('skills')">Skills</a>
          </li>
          <li :class="{'active-nav': isActive('projects')}">
            <a class="nav-item nav-link" href="#portfolio" @click="scrollToSection('portfolio')">Projects</a>
          </li>
          <li :class="{'active-nav': isActive('contact')}">
            <a class="nav-item nav-link" href="#contact" @click="scrollToSection('contact')">Contact</a>
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
    },
    scrollToSection(sectionId) {
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
        this.setActive(sectionId);
      }
    },
    onScroll() {
      const sections = document.querySelectorAll('section');
      const scrollPosition = document.documentElement.scrollTop || document.body.scrollTop;

      sections.forEach((section) => {
        if (scrollPosition >= section.offsetTop && scrollPosition < section.offsetTop + section.offsetHeight) {
          this.setActive(section.id);
        }
      });
    }
  },
  mounted() {
    console.log("Data loaded:", this.main); // Log data for verification

    window.addEventListener('scroll', this.onScroll);
  },
  unmounted() { // Correcting the lifecycle hook
    window.removeEventListener('scroll', this.onScroll);
  }
};
</script>



<style lang="scss">
@import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css');
@import url('https://fonts.googleapis.com/css2?family=Italiana&display=swap');
@import url("https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css");

*,
*::after,
*::before {
  margin: 0;
  padding: 0;
  box-sizing: inherit; 
}

html,
body,
#app {
  height: 100%;
  scroll-behavior: smooth; 
}

body {
  box-sizing: border-box;
  overflow-x: hidden; 
}

:root {
  --desktop: 1200px;
  --laptop: 1024px;
  --tablet: 768px;
  --phone: 480px;
  --color-bg1: #f5ba19;
  --color-bg2: #f12711;
  --color1: 241, 39, 17;
  --color2: 241, 39, 17;
  --color3: 245, 186, 25;
  --color4: 241, 39, 17;
  --color5: 241, 39, 17;
  --color-interactive: 241, 39, 17;
  --circle-size: 80%;
  --blending: hard-light;
}

html,
body {
  font-family: 'Dongle', sans-serif;
  margin: 0;
  padding: 0;
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
