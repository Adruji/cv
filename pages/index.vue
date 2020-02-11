<template>
  <div class="guard py-4">
    <h1>Hello, I'm {{ jData.info.surname }}!</h1>
    <h2 class="mb-8">{{ jData.info.intro }}</h2>
    <h3>Find me here:</h3>
    <div class="mb-12">
      <v-btn
        text
        v-for="site in jData.info.external"
        :key="site.name"
        :href="site.link"
      >
        <v-icon>{{ site.icon }}</v-icon>
      </v-btn>
    </div>
    <h3>Some of my skills:</h3>
    <div class="d-flex flex-row mb-6 flex-wrap">
      <div
        v-for="skill in jData.skills"
        :key="skill.name"
        class="pa-2 flex-grow-1"
      >
        <SkillChip :tech="skill.icon" :percent="skill.level" />
      </div>
    </div>
  </div>
</template>

<script>
import data from "~/assets/data.js";
import SkillChip from "~/components/SkillChip.vue";

export default {
  data: function() {
    return {
      jData: data
    };
  },
  components: {
    SkillChip
  }
};
</script>

<style scoped>
h1 {
  color: #f87060;
}

.guard {
  max-width: 900px;
  margin: auto;
}
</style>
