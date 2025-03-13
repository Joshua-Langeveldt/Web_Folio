<template>
  <div class="row arrow-container">
    <a :href="`#${nextSectionId}`" class="arrow-icon" role="button">
      <i class="fas fa-chevron-down fa-4x"></i>
    </a>
  </div>
</template>

<script>
import data from "../../data/data.json";

export default {
  name: "AppArrow",
  props: {
    nextSection: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      data: data,
    };
  },
};
</script>

<style lang="scss"></style>
