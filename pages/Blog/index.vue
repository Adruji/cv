<template>
  <div>
    <div v-if="!bloglist.length">
      No post yet
    </div>
    <v-row v-else class="mx-auto">
      <v-col v-for="post in bloglist" :key="post.title" :cols="12">
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
      // needs pagination
      return this.$store.state.bloglist;
    }
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
