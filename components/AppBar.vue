<template>
  <v-app-bar fixed color="#102542" dark flat>
    <v-btn text to="/">Adrien</v-btn>
    <v-spacer></v-spacer>
    <v-btn text v-for="item in items" :key="item.title" :to="'/' + item.to">{{
      item.title
    }}</v-btn>
  </v-app-bar>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          title: "Resume",
          to: "Resume"
        },
        {
          title: "Projects",
          to: "Projects"
        },
        {
          title: "Blog",
          to: "Blog"
        }
      ]
    };
  }
};
</script>

<style></style>
