<template>
  <div>
    <article  v-for="(post,key) in  bloglist" :key="key"  class="ui card">
      <div  class="image">
        <!-- <img
          :src="post.thumbnail"
          :alt="post.title"
          loading="lazy"
        /> -->
      </div>
      <v-btn text :key="key" :to="'article/'+post.path">{{post.title}}</v-btn>
    </article>
  </div>
</template>

<script>
export  default {
	computed: {
		bloglist() {
			if ( !  this.isPaginated ) {
				return this.$store.state.bloglist; //.slice(0,this.postsPerPage);
			} else {
				return  this.$store.state.bloglist;
			}
		},
		totalPages()  {
			return this.isPaginated  ?  Math.ceil(this.$store.state.bloglist.length /  this.postsPerPage) :  1
		}
	},
	props: {
    isPaginated:  Boolean,
    postsPerPage:  Number
	}
};
</script>

<style scoped>
.v-application code {
  all: unset;
}

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
