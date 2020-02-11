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
      dark: this.$vuetify.theme.dark
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
  margin-top: 68px;
}

#app.theme--light {
  transition: 0.3s;
  background-color: #e6e4e4;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='4' height='4' viewBox='0 0 4 4'%3E%3Cpath fill='%2323cfd6' fill-opacity='0.4' d='M1 3h1v1H1V3zm2-2h1v1H3V1z'%3E%3C/path%3E%3C/svg%3E");
}
#app.theme--dark {
  transition: 0.3s;
  background-color: #535353;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='4' height='4' viewBox='0 0 4 4'%3E%3Cpath fill='%2323cfd6' fill-opacity='0.4' d='M1 3h1v1H1V3zm2-2h1v1H3V1z'%3E%3C/path%3E%3C/svg%3E");
}
</style>
