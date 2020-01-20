<template>
  <div>
    <h1>BLOG BLOGdd</h1>
    <div v-html="hello"></div>
  </div>
</template>

<script>
import hello from '~/assets/blog/Article1.md'

export default {
  data: function() {
    return {}
  },
  computed: {
    hello() {
      return hello
    }
  },
  transition: "blog"
};
</script>

<style scoped>
.blog-enter-active,
.blog-leave-active {
  transition-property: opacity;
  transition-timing-function: ease-in-out;
  transition-duration: 100ms;
}
.blog-enter,
.blog-leave-to {
  opacity: 0;
}
</style>
