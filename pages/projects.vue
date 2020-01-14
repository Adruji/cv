<template>
  <div>
    <div v-if="!filteredExperiences">
      <JobGhost v-for="n in 5" :key="'teub'+n"/>
    </div>
    <div v-else v-for="job in filteredExperiences" :key="job.mission" class="py-4">
      <Job :job="job" @filterSelect="filterExperiences" class="justify-center align-center"/>
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
      filteredExperiences: data.experiences.personnal
    };
  },
  methods: {
    filterExperiences(filter) {
      this.filteredExperiences = this.jData.experiences.personnal.filter(
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
  }
};
</script>

<style scoped>
</style>
