<template>
  <v-app id="sandbox" :dark="setTheme">
    <v-card class="overflow-hidden">
      <AppBar class="appbar" @dark="switchDark" :dark="dark"/>
      <v-content class="appbar-offset">
        <v-sheet id="scrolling-techniques-5" class="overflow-y-auto">
          <v-container>
            <Nuxt/>
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
      dark: false
    };
  },
  methods: {
    switchDark() {
      this.dark = !this.dark;
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
  margin-top: 250px;
}
</style>

