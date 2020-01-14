<template>
  <div>
    <div class="text-center">
      <v-btn outlined to="Projects">Check my personnal projects here</v-btn>
    </div>
    <div v-if="!filteredExperiences">
      <JobGhost v-for="n in 5" :key="'teub'+n" class="justify-center align-center" />
    </div>
    <div v-else v-for="job in filteredExperiences" :key="job.mission" class="py-4">
      <Job :job="job" @filterSelect="filterExperiences" class="justify-center align-center" />
    </div>
  </div>
</template>

<script>
import data from "~/assets/data.js";
import Job from "~/components/Job.vue";
import JobGhost from "~/components/JobGhost.vue";

export default {
  components: {
    Job,
    JobGhost
  },
  data: function() {
    return {
      jData: data,
      filteredExperiences: data.experiences.proffesionnal
    };
  },
  methods: {
    filterExperiences(filter) {
      this.filteredExperiences = this.jData.experiences.proffesionnal.filter(
        exp => {
          let x = this.get(exp, filter.selector);
          return x.includes(filter.value.toLowerCase());
        }
      );
    },
    get(object, key) {
      var keys = key.split(".");
      for (var i = 0; i < keys.length; i++) {
        if (!object.hasOwnProperty(keys[i])) {
          return null;
        }
        object = object[keys[i]];
      }
      return object;
    }
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
