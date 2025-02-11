<template>
  <div id="app" :class="{ 'preloader-active': isLoading }">
    <PreloaderComp v-if="isLoading" />
    <div v-else>
      <StartHero />
      <!-- <AppHeader /> -->
      <AppAbout />
      <AppSkills />
      <AppPortfolio />
      <EducationSection />
      <AppCertification />
      <AppContact />
      <AppFooter />
    </div>
  </div>
</template>

<script>
// import AppHeader from "./Vue/pages/AppHeader.vue";
import AppAbout from "./Vue/pages/AppAbout.vue";
import AppSkills from "./Vue/pages/AppSkills.vue";
import AppPortfolio from "./Vue/pages/AppPortfolio.vue";
import AppContact from "./Vue/pages/AppContact.vue";
import AppFooter from "./Vue/pages/AppFooter.vue";
import StartHero from './Vue/components/StartHero.vue';
import EducationSection from "./Vue/pages/EducationSection.vue";
import AppCertification from "./Vue/pages/AppCertification.vue";
import PreloaderComp from './Vue/components/PreloaderComp.vue';

export default {
  name: "App",
  components: {
    // AppHeader,
    AppAbout,
    AppSkills,
    EducationSection,
    AppCertification,
    AppPortfolio,
    AppContact,
    AppFooter,
    StartHero,
    PreloaderComp
  },
  data() {
    return {
      isLoading: true
    };
  },
  mounted() {
    window.addEventListener('load', this.startPreloaderTimeout);
  },
  methods: {
    startPreloaderTimeout() {
      setTimeout(this.hidePreloader, 10000); // Display preloader for 10 seconds
    },
    hidePreloader() {
      this.isLoading = false;
    }
  },
  beforeUnmount() {
    window.removeEventListener('load', this.startPreloaderTimeout);
  }
};
</script>

<style>
@import "./styles/css/main.css";

#app.preloader-active {
  background: #000;
}
</style>
