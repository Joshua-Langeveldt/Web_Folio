<!-- eslint-disable vue/no-reserved-component-names -->
<!-- eslint-disable vue/multi-word-component-names -->

<template>
  <div id="app">
    <StartHero />
    <!-- <AppHeader /> -->
    <AppAbout />
    <AppSkills />
    <AppPortfolio />
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

export default {
  name: "App",
  components: {
    // AppHeader,
    AppAbout,
    AppSkills,
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