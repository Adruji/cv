<template>
  <div>
    <v-row class="mx-auto">
      <v-col
        v-for="(post, key) in bloglist"
        :key="post.title"
        :cols="key == 0 ? 12 : 6"
      >
        <BlogCard :post="post" />
      </v-col>
    </v-row>
  </div>
</template>

<script>
import BlogCard from "~/components/BlogCard.vue";

export default {
  components: {
    BlogCard
  },
  computed: {
    bloglist() {
      if (!this.isPaginated) {
        return this.$store.state.bloglist; //.slice(0,this.postsPerPage);
      } else {
        return this.$store.state.bloglist;
      }
    },
    totalPages() {
      return this.isPaginated
        ? Math.ceil(this.$store.state.bloglist.length / this.postsPerPage)
        : 1;
    }
  },
  props: {
    isPaginated: Boolean,
    postsPerPage: Number
  }
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

.mx-auto {
  max-width: 960px;
}
</style>
