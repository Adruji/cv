<template>
  <div>
    <div class="text-center">
      <v-btn depressed to="/Projects">Check my personnal projects here</v-btn>
    </div>
    <div
      v-for="job in jData.experiences.proffesionnal"
      :key="job.mission"
      class="py-4"
    >
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
      jData: data
    };
  },
  methods: {
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
  transition: "resume"
};
</script>

<style scoped>
.resume-enter-active,
.resume-leave-active {
  transition-property: opacity;
  transition-timing-function: ease-in-out;
  transition-duration: 100ms;
}
.resume-enter,
.resume-leave-to {
  opacity: 0;
}
</style>
