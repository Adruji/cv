<template>
  <v-app-bar
    fixed
    color="#09cfd6ee"
    dark
    flat
    shrink-on-scroll
    prominent
    src="http://i.imgur.com/VkfP1lH.jpg"
    fade-img-on-scroll
    scroll-threshold="200"
  >
    <v-toolbar-title color="#09cfd6">Adrien Dujardin</v-toolbar-title>
    <template v-slot:extension>
      <v-btn text v-for="item in items" :key="item.title" :to="'/' + item.to">{{
        item.title
      }}</v-btn>
      <v-spacer></v-spacer>
      <v-btn text @click="$emit('dark')">
        <v-icon>{{ dark ? "mdi-weather-sunny" : "mdi-weather-night" }}</v-icon>
      </v-btn>
      <v-btn text @click="$emit('invert')">
        <v-icon>{{
          invert ? "mdi-invert-colors" : "mdi-invert-colors-off"
        }}</v-icon>
      </v-btn>
    </template>
  </v-app-bar>
</template>

<script>
export default {
  props: {
    dark: Boolean,
    invert: Boolean
  },
  data() {
    return {
      items: [
        {
          title: "Home",
          to: ""
        },
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
