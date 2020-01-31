<template>
  <div>
    <h1>Hello, I'm {{ jData.info.name }}!</h1>
    <h2>{{ jData.info.intro }}</h2>
    <h3>Awesome skills:</h3>
    <div v-for="skill in jData.skills" :key="skill.name">
      {{ skill.name }}
      <v-progress-linear
        color="red darken-2"
        rounded
        :value="skill.level"
      ></v-progress-linear>
    </div>
    <div>
      <v-btn text>
        <v-icon>mdi-github-circle</v-icon>
      </v-btn>
      <v-btn text>
        <v-icon>mdi-stack-overflow</v-icon>
      </v-btn>
      <v-btn text>
        <v-icon>mdi-linkedin</v-icon>
      </v-btn>
    </div>
  </div>
</template>

<script>
import data from "~/assets/data.js";
export default {
  data: function() {
    return {
      jData: data
    };
  }
};
</script>

<style scoped></style>
