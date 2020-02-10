<template>
  <div>
    <div v-for="project in projects" :key="project.mission" class="py-4">
      <Project :project="project" class="justify-center align-center" />
    </div>
  </div>
</template>

<script>
import data from "~/assets/data.js";
import Project from "~/components/Project.vue";

export default {
  components: {
    Project
  },
  data: function() {
    return {
      projects: data.experiences.personnal
    };
  },
  transition: "projects"
};
</script>

<style scoped>
.projects-enter-active,
.projects-leave-active {
  transition-property: opacity;
  transition-timing-function: ease-in-out;
  transition-duration: 100ms;
}
.projects-enter,
.projects-leave-to {
  opacity: 0;
}
</style>
