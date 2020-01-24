<template>
  <v-card @click="link">
    <v-img
      :src="require(`~/assets/blog/images/${post.header}`)"
      class="white--text align-end"
      gradient="to bottom, rgba(0,0,0,0), rgba(0,0,0,.5)"
      height="200px"
    >
      <v-card-title v-text="post.title"></v-card-title>
    </v-img>
    <v-card-text class="text--primary">
      <div>{{ post.description }}</div>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  props: {
    post: Object
  },
  methods: {
    link() {
      this.$router.replace({ path: "Blog/Article/" + this.post.path });
    }
  }
};
</script>

<style scoped></style>
