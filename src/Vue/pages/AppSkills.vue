<template>
  <section id="skills" class="light-section">
    <div class="container-fluid">
      <h1 class="section-header">{{ heading }}</h1>

      <!-- start of filters -->
      <div class="row filters">
        <ul class="list-inline mx-auto" data-aos="fade-right" data-aos-duration="1000">
          <li v-for="item in skills" :key="item.category" class="list-inline-item filter">
            <a
              class="nav-item"
              :class="item.category === currentCategory ? 'active' : null"
              :data-category="item.category"
              @click="setCategory"
            >
              {{ item.category }}
            </a>
          </li>
        </ul>
      </div>
      <!-- end of filters -->

      <!-- start of skill container -->
      <div
        id="skill-container"
        data-aos="fade-right"
        data-aos-duration="1000"
        v-for="item in filteredSkills"
        :key="item.category"
      >
        <div class="category-heading">
          <h2><i :class="item.faClass"></i> {{ item.category }}</h2>
          <h3 v-if="item.subtitle !== ''">{{ item.subtitle }}</h3>
        </div>

        <div class="skill-content">
          <!-- start of skill bars -->
          <div v-if="item.skillList.length !== 0" class="skillbars">
            <div class="skill" v-for="skill in item.skillList" :key="skill.name">
              <div class="skill-item">
                <!-- Image for each skill -->
                <img :src="skill.image" :alt="skill.name" class="skill-image" />
                <div class="outer-bar">
                  <!-- Progress bar surrounding the image -->
                  <div :class="'inner-bar level--' + skill.level"></div>
                </div>
              </div>
              <h3 class="skill-name" v-html="skill.name"></h3>
            </div>
          </div>
          <!-- end of skill bars -->
        </div>
      </div>
      <!-- end of skill container -->
    </div>
    <AppArrow />
  </section>
</template>


<script>
import data from "../../data/data.json";
import AppArrow from "../components/AppArrow.vue";

export default {
  name: "AppSkills",
  props: {},
  components: {
    AppArrow,
  },
  data() {
    return {
      skills: data.skills.categories,
      heading: data.main.headings.skills,
      currentCategory: data.skills.defaultCategory,
    };
  },
  computed: {
    filteredSkills() {
      var skills = data.skills.categories;
      var category = this.currentCategory;
      var filtered = skills.filter(function(x) {
        if (x.category === category) {
          return x;
        }
      });

      console.log(filtered);

      return filtered;
    },
  },
  methods: {
    setCategory(event) {
      this.currentCategory = event.target.dataset.category;
    },
  },
};
</script>

<style scoped lang="scss">
.category-heading i{
  text-shadow: none; /* Text shadow for first name */
}

.skill-image {
  width: 100%;
  max-width: 150px;
  height: auto;  
  border: 2px solid #ccc;
  border-radius: 8px; 
  box-shadow: 1rem 0.5rem 0.5rem #666; 
  display: block; 
  margin: 30px auto;
  transition: transform 0.3s;
  object-fit: cover;
  overflow: hidden;
}

img:hover {
  transform: scale(1.05);
}

</style>

