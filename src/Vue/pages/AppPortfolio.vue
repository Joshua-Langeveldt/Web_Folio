<template>
  <section id="portfolio" class="dark-section">
    <div class="container-fluid">
      <h1 class="section-header">{{ heading }}</h1>

      <!-- start of filters -->
      <div class="row filters">
        <ul class="list-inline mx-auto">
          <li
            v-for="item in filters"
            :key="item"
            class="list-inline-item filter"
          >
            <a
              class="nav-item"
              :class="item === currentFilter ? 'active' : null"
              :data-filter="item"
              @click="setFilter"
            >{{ item }}</a>
          </li>
        </ul>
      </div>
      <!-- end of filters -->

      <div id="portfolio-container" class="row">
        <div
          data-aos="fade-right"
          data-aos-duration="1000"
          v-for="(item, index) in filteredProjects"
          :key="index"
          class="col-sm-12 col-md-4 flex-col"
        >
          <div class="portfolio-item">
            <img :src="item.image" alt="Portfolio item image" />
            <div class="overlay">
              <div class="portfolio-item-content">
                <h3>{{ item.title }}</h3>
                <p>{{ item.description }}</p>
                <div class="button-group">
                  <a :href="item.link" title="Live Demo" target="_blank">
                    <button class="btn btn-primary">Live Demo</button>
                  </a>
                  <a :href="item.source" title="Source Code" target="_blank">
                    <button class="btn btn-secondary">GitHub Repo</button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <AppArrow nextSectionId="education" />  
  </section>
</template>


<script>
import data from "../../data/data.json";
import AppArrow from "../components/AppArrow.vue";

export default {
  name: "AppPortfolio",
  components: {
    AppArrow,
  },
  data() {
    return {
      projects: data.portfolio.projects,
      heading: data.main.headings.portfolio,
      currentFilter: data.portfolio.defaultFilter,
    };
  },
  computed: {
    filteredProjects() {
      // Filter projects based on the selected filter
      return this.projects.filter(project => {
        return this.currentFilter === "All" || project.filter === this.currentFilter;
      });
    },
    filters() {
      // Create a unique list of filters
      const uniqueFilters = [...new Set(this.projects.map(project => project.filter))];
      return ["All", ...uniqueFilters];
    },
  },
  methods: {
    setFilter(event) {
      this.currentFilter = event.target.dataset.filter;
    },
  },
};
</script>

<style lang="scss">


.portfolio-item-content h3{
  text-shadow: 7px 4px 7px rgba(0, 0, 0, 0.7) !important;
  font-size: 1.7rem !important;
  
  }

  .portfolio-item-content p {

    text-shadow: 7px 4px 7px rgba(0, 0, 0, 0.7) !important;
    font-size: 1rem !important;
  }
</style>
