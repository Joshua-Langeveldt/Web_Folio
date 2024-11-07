<!-- eslint-disable vue/no-reserved-component-names -->
<!-- eslint-disable vue/multi-word-component-names -->

<template>
  <div class="row arrow-container">
    <a href="#about" class="arrow-icon" role="button">
      <i class="fas fa-chevron-down fa-4x"></i>
    </a>
  </div>
</template>

<script>
import data from "../../data/data.json";

export default {
  name: "AppArrow",
  props: {},
  data() {
    return {
      data: data,
    };
  },
};
</script>

<style lang="scss"></style>
