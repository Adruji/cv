<template>
  <v-app id="app" :dark="setTheme">
    <v-card class="overflow-hidden">
      <AppBar class="appbar" @dark="switchDark" @invert="switchInvert" :dark="dark" :invert="invert" :class="{invertc: invert}"/>
      <v-content class="appbar-offset" :class="{invertc: invert}">
        <v-sheet id="scrolling-techniques-5" class="overflow-y-auto">
          <v-container>
            <Nuxt />
          </v-container>
        </v-sheet>
      </v-content>
    </v-card>
    <v-footer :inset="false" app>
      <span class="px-4">&copy; {{ new Date().getFullYear() }}</span>
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
      dark: false,
      invert: false
    };
  },
  methods: {
    switchDark() {
      this.dark = !this.dark;
    },
    switchInvert() {
      this.invert = !this.invert;
    }
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
  margin-top: 220px;
}

#app {
  transition: 0.3s;
}


</style>

