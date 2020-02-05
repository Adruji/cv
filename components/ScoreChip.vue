<template>
  <div>
    <img class="icon bg" :src="getSrcSvg()" v-bind:alt="tech" v-on="on" />
    <img
      class="icon front"
      :style="clip"
      :src="getSrcSvg()"
      v-bind:alt="tech"
      v-on="on"
    />
  </div>
</template>

<script>
export default {
  props: {
    tech: String,
    percent: Number
  },
  data: function() {
    return {};
  },
  methods: {
    getSrcSvg() {
      return require(`~/assets/logos/${this.tech}.svg`);
    }
  },
  computed: {
    clip() {
      return {
        clip: `rect(0px, ${(this.percent / 100) * 40}px, 40px, 0px)`
      };
    }
  }
};
</script>

<style scoped>
div {
  width: 40px;
  height: 40px;
  margin-right: 15px;
}
.icon {
  position: absolute;
  width: 40px;
  height: 40px;
  filter: contrast(115%);
  transition: all 0.7s;
}

.bg {
  filter: grayscale(80%) contrast(50%);
}
</style>
