<template>
  <v-card @click="link" class="BlogCard" flat>
    <v-img
      :src="require(`~/assets/blog/images/${post.header}`)"
      class="white--text align-end"
      gradient="rgba(0, 0, 0, .4), rgba(0, 0, 0, .5), rgba(0, 0, 0, .4)"
      height="200px"
    >
      <v-card-title class="d-flex align-end flex-column text-right">
        <div>
          <v-chip
            label
            class="mx-0 mb-2 text-uppercase"
            color="grey darken-3"
            text-color="white"
            small
          >
            {{ post.category }}
          </v-chip>
          <h3 class="title font-weight-bold mb-2">
            {{ post.title }}
          </h3>
          <div class="caption">{{ post.author }}<br />{{ date }}</div>
        </div>
        <div class="mt-auto">
          <v-chip
            class="text-uppercase ma-0"
            color="primary"
            label
            small
            @click="link"
          >
            Read More
          </v-chip>
        </div>
      </v-card-title>
    </v-img>
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
  },
  computed: {
    date() {
      let d = new Date(this.post.date);
      return d.toLocaleDateString();
    }
  }
};
</script>

<style>
.BlogCard {
  border: solid 1px #09ced64a;
}

.BlogCard:hover {
  border: solid 1px #09ced6;
}
</style>
