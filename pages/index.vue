<template>
  <div class="guard py-4 text-center">
    <h1 class="mb-4">Hello, I'm {{ jData.info.surname }}!</h1>
    <h2 class="mb-10">{{ jData.info.intro }}</h2>
    <h3 class="mb-2">I like to work with:</h3>
    <div class="d-flex flex-row mb-6 flex-wrap">
      <div
        v-for="skill in skillList"
        :key="skill.name"
        class="pa-2 flex-grow-1"
      >
        <SkillChip :tech="skill.icon" :percent="skill.level" />
      </div>
    </div>
    <v-btn to="/Resume" color="#f87060" dark class="mb-12">
      <v-icon left>mdi-eye-outline</v-icon> See my experiences
    </v-btn>
    <h3 class="mb-2">You can also find me there:</h3>
    <v-btn
      text
      v-for="site in jData.info.external"
      :key="site.name"
      :href="site.link"
    >
      <v-icon>{{ site.icon }}</v-icon>
    </v-btn>
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
  },
  computed: {
    skillList() {
      let skillList = this.jData.skills;
      for (let i = skillList.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * i);
        const temp = skillList[i];
        skillList[i] = skillList[j];
        skillList[j] = temp;
      }
      return skillList;
    }
  }
};
</script>

<style scoped>
h1 {
  color: #f87060;
}

.guard {
  max-width: 600px;
  margin: auto;
}
</style>
