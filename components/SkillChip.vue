<template>
  <div class="skillChip d-flex">
    <v-img
      class="icon"
      height="40"
      width="40"
      contain
      :src="getSrcSvg()"
      v-bind:alt="tech"
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
  transition: "guard"
};
</script>

<style scoped>
.skillChip {
  width: 50px;
  height: 50px;
  margin-right: 15px;
  margin: auto;
  display: inline-block;
  text-align: center;
}
.icon {
  filter: grayscale(60%);
  align-self: center;
}

.icon:hover {
  animation: jello-horizontal 0.9s both;
}

@keyframes jello-horizontal {
  0% {
    -webkit-transform: scale3d(1, 1, 1);
    transform: scale3d(1, 1, 1);
  }
  30% {
    -webkit-transform: scale3d(1.25, 0.75, 1);
    transform: scale3d(1.25, 0.75, 1);
    filter: grayscale(60%);
  }
  40% {
    -webkit-transform: scale3d(0.75, 1.25, 1);
    transform: scale3d(0.75, 1.25, 1);
    filter: grayscale(0%);
  }
  50% {
    -webkit-transform: scale3d(1.15, 0.85, 1);
    transform: scale3d(1.15, 0.85, 1);
    filter: grayscale(0%);
  }
  65% {
    -webkit-transform: scale3d(0.95, 1.05, 1);
    transform: scale3d(0.95, 1.05, 1);
  }
  75% {
    -webkit-transform: scale3d(1.05, 0.95, 1);
    transform: scale3d(1.05, 0.95, 1);
  }
  100% {
    -webkit-transform: scale3d(1, 1, 1);
    transform: scale3d(1, 1, 1);
  }
}

.guard-enter-active,
.guard-leave-active {
  transition-property: opacity;
  transition-timing-function: ease-in-out;
  transition-duration: 100ms;
}
.guard-enter,
.guard-leave-to {
  opacity: 0;
}
</style>
