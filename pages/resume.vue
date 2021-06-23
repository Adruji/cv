<template>
  <div>
    <div class="text-center">
      <v-btn depressed to="/Projects" color="#f87060" dark
        >Check my personnal projects here</v-btn
      >
    </div>
    <div v-for="job in experiences" :key="job.mission" class="py-4">
      <v-lazy min-height="200" transition="fade-transition">
        <Job :job="job" class="justify-center align-center" />
      </v-lazy>
    </div>
  </div>
</template>

<script>
import data from "~/assets/data.js";
import Job from "~/components/Job.vue";

export default {
  components: {
    Job
  },
  data: function() {
    return {
      experiences: data.experiences.professional
    };
  }
};
</script>

<style scoped></style>
