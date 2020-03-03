<template>
  <v-content v-if="attributes">
    <div class="text-center">
      <v-btn depressed to="/Blog">Back to article list</v-btn>
    </div>
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
      <v-sheet class="pa-5" elevation="1">
        <component class="markdown" :is="dynamicComponent" />
      </v-sheet>
    </v-container>
  </v-content>
</template>

<script>
export default {
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

.markdown >>> table {
  border-collapse: collapse;
}
.markdown >>> th {
  border-bottom: thin solid rgba(0, 0, 0, 0.12);
}
.markdown >>> tr:not(:last-child) {
  border-bottom: thin solid rgba(0, 0, 0, 0.12);
}
</style>
