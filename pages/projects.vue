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
  }
};
</script>

<style scoped></style>
