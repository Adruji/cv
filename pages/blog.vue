<template>
  <div>
    <h1>BLOG BLOGdd</h1>
    <vue-markdown :source="mdtext"></vue-markdown>
  </div>
</template>

<script>
import VueMarkdown from "vue-markdown";
export default {
  components: {
    VueMarkdown
  },
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
  key: to => to.fullPath,
  transition(to, from) {
    if (!from) {
      return "slide-left";
    }
    return +to.query.page < +from.query.page ? "slide-right" : "slide-left";
  }
};
</script>

<style>
</style>
