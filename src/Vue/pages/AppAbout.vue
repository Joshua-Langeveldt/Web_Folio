<template>
  <section id="about" class="dark-section">
    <div class="container-fluid">
      <h1 class="section-header">{{ heading }}</h1>
      <h2 class="tagline" v-if="about.tagline !== ''">{{ about.tagline }}</h2>
      <div class="row">
        <div class="col-sm-12 col-md-4 flex-col" data-aos="fade-right" data-aos-duration="1000">
          <img
            class="profile-pic"
            src="https://joshua-langeveldt.github.io/images/images/People/jam.png"
            alt="profile picture"
          />
        </div>
        <div class="col-sm-12 col-md-4 flex-col" data-aos="fade-right" data-aos-duration="1000">
          <p id="about-content">
            <span id="greeting">I'm {{ name }}! </span>
            <span id="bio" v-html="about.bio"></span>
          </p>
        </div>

        <div class="col-sm-12 col-md-4 flex-col" data-aos="fade-right" data-aos-duration="1000">
          <ul class="list-group list-group-flush">
            <li
              v-for="item in facts"
              :key="item.name"
              class="list-group-item"
            >
              <h3 class="d-inline">{{ item.name }}: </h3>
              <br class="d-md-none" />
              <span v-if="item.name !== 'Resume'" class="list-value">{{ item.value }}</span>
              <!-- Resume Download Button within Facts List -->
              <a v-if="item.name === 'Resume'" :href="item.value" class="btn btn-primary mt-3" download>
                Download Resume
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <AppArrow nextSectionId="skills" />  
    </section>
</template>

<script>
import data from "../../data/data.json";
import AppArrow from "../components/AppArrow.vue";

export default {
  name: "AppAbout",
  components: {
    AppArrow,
  },
  data() {
    return {
      about: data.about,
      name: data.main.name.first,
      facts: data.about.facts,
      heading: data.main.headings.about,
    };
  },
};
</script>

<style lang="scss">
.list-group-item {
  display: flex;
  justify-content: start;
}

.btn {
 
  align-items: center;
  justify-content: center;
  margin-top: -0.5rem !important;
  margin-left: 0.5rem;
  width: 45%;
  color: #fff !important;
  background-color: transparent !important;
  border: 1px solid #f5ba19 !important;
}

.btn:hover{
  background: linear-gradient(-45deg, #f5ba19, #f12711, #f5ba19, #f12711) !important; /* Gradient applied to text */

}

.list-value{
  margin-left: 0.5rem !important;
}
</style>
