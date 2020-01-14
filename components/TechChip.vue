<template>
  <v-tooltip bottom>
    <template v-slot:activator="{ on }">
      <img class="icon" :src="getSrcSvg()" v-bind:alt="tech" v-on="on">
    </template>
    <span>{{tech}}</span>
  </v-tooltip>
</template>

<script>
export default {
  props: {
    tech: String
  },
  data: function() {
    return {};
  },
  methods: {
    getSrcSvg() {
      return require(`~/assets/logos/${this.tech}.svg`);
    }
  }
};
</script>

<style scoped>
.icon {
  width: 40px;
  height: 40px;
  margin-right: 15px;
}
</style>
