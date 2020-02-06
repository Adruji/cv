<template>
  <v-tooltip bottom>
    <template v-slot:activator="{ on }">
      <div class="techChip">
        <v-img
          class="icon"
          height="40"
          width="40"
          contain
          :src="getSrcSvg()"
          v-bind:alt="tech"
          v-on="on"
        />
      </div>
    </template>
    <span>{{ tech }}</span>
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
.techChip {
  width: 50px;
  height: 50px;
  margin-right: 15px;
}
</style>
