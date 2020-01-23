<template>
  <v-content v-if="attributes">
    <v-container>
      <div class="mb-5">
        <v-img
          :src="require(`~/assets/blog/images/${attributes.header}`)"
          class="white--text align-end"
          gradient="to bottom, rgba(0,0,0,0), rgba(0,0,0,.5)"
          height="200px"
        >
          <v-card-title v-text="attributes.title"></v-card-title>
        </v-img>
      </div>
      <component class="markdown" :is="dynamicComponent" />
      <div v-html="content" />
    </v-container>
  </v-content>
</template>

<script>
import Logo from "~/components/Logo.vue";

export default {
  components: {
    Logo
  },
  data() {
    return {
      dynamicComponent: null,
      attributes: null
    };
  },
  created() {
    const markdown = require(`~/assets/blog/articles/${this.$route.params.post}.md`);
    this.dynamicComponent = markdown.vue.component;
    this.attributes = markdown.attributes;
  },

  head() {
    return {
      title: this.attributes.title + " | Adrien Dujardin",
      meta: [
        {
          hid: "description",
          name: "description",
          content: this.attributes.description
        }
      ]
    };
  }
};
</script>

<style scoped>
.markdown >>> img {
  margin: auto;
  max-width: 90%;
  display: block;
}
</style>
