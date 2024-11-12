<!-- eslint-disable vue/no-reserved-component-names -->
<!-- eslint-disable vue/multi-word-component-names -->

<template>
  <div class="banner">
    <div class="banner-text">
      <h1 class="first-name">{{ name.first }}</h1>
      <h1 class="last-name">{{ name.last }}</h1>
      <h2 id="typewriter"></h2>
    </div>
  </div>
</template>

<script>
import data from "../../data/data.json";
import Typewriter from "typewriter-effect/dist/core";

var titles = data.main.titles;

export default {
  name: "AppBanner",
  data() {
    return {
      name: data.main.name,
      titles: data.main.titles,
    };
  },
  mounted: function() {
    new Typewriter("#typewriter", {
      strings: titles,
      autoStart: true,
      loop: true,
      deleteSpeed: 5,
    });
  },
};
</script>

<style lang="scss">

.first-name {
  font-size: 5rem;
  font-weight: 400;
  background: linear-gradient(-45deg, #f5ba19, #f12711, #f5ba19, #f12711); /* Gradient applied to text */
  -webkit-background-clip: text; /* Ensures background clip is applied to text */
  color: transparent; /* Make the text color transparent to show the gradient */
  margin-top: 360px;
  animation: gradient 15s ease infinite;
  background-size: 400% 400%;
  text-shadow: 7px 4px 7px rgba(0, 0, 0, 0.7); /* Text shadow for first name */
  


}

@keyframes gradient {
	0% {
		background-position: 0% 50%;
	}
	50% {
		background-position: 100% 50%;
	}
	100% {
		background-position: 0% 50%;
	}
}

.last-name {
  font-size: 4.5rem;
  font-weight: 400;
  color: #fff;
  margin-top: 0.5rem;
  text-shadow: 7px 4px 7px rgba(0, 0, 0, 0.7); /* Text shadow for first name */

}

</style>
