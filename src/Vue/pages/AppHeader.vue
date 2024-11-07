<!-- eslint-disable vue/no-reserved-component-names -->
<!-- eslint-disable vue/multi-word-component-names -->

<template>
  <header id="home" class="bg">
    <nav class="navbar navbar-expand-lg fixed-top dark-bg">
      <a class="navbar-brand" href="#">
        <div v-if="main.logo"><img src="../../assets/images/logo.png" alt="logo" id="Logo"></div>
        <div v-if="!main.logo">
          <span id="FirstName">{{main.name.first}}</span> <span id="LastName">{{main.name.last}}</span>
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
  props: {},
  data() {
    return {
      main: data.main,
    };
  },
};
</script>

<style lang="scss"></style>
