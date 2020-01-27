<template>
  <v-app id="app" :dark="setTheme">
    <AppBar class="appbar" />
    <v-content class="appbar-offset">
      <v-container>
        <Nuxt />
      </v-container>
    </v-content>
    <v-footer :inset="false" app>
      <span class="px-4">&copy; {{ new Date().getFullYear() }}</span>
      <v-spacer />
      <v-btn text @click="dark = !dark">
        <v-icon>{{ dark ? "mdi-weather-sunny" : "mdi-weather-night" }}</v-icon>
      </v-btn>
    </v-footer>
  </v-app>
</template>

<script>
import AppBar from "~/components/AppBar.vue";

export default {
  components: {
    AppBar
  },
  data: function() {
    return {
      dark: false
    };
  },
  computed: {
    setTheme() {
      if (this.dark) {
        return (this.$vuetify.theme.dark = true);
      } else {
        return (this.$vuetify.theme.dark = false);
      }
    }
  }
};
</script>

<style scoped>
.appbar {
  z-index: 999;
}

.appbar-offset {
  margin-top: 80px;
}

#app {
  transition: 0.3s;
}
</style>
