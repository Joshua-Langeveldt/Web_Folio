<!-- eslint-disable vue/no-reserved-component-names -->
<!-- eslint-disable vue/multi-word-component-names -->

<template>
  <div id="app">
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
    StartHero
  },
};
</script>

<style>
@import "./styles/css/main.css";
</style>