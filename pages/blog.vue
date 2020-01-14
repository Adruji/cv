<template>
  <div>
    <h1>BLOG BLOGdd</h1>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      mdtext: `**This is bold text**
      __This is bold text__
      *This is italic text*
      _This is italic text_
      ~~Strikethrough~~
      ## Blockquotesggggggggggfff
      > Blockquotes can also be nested...
      >> ...by using additional greater-than signs right next to each other...
      > > > ...or with spaces between arrows`
    };
  },
  methods: {},
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
