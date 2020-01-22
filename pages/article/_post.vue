<template>
  <div :key="$route.params.post">
    <div>
      <div>
        <img :src="attributes.header" :alt="attributes.title" loading="lazy" />
      </div>
      <div v-html="content" />
    </div>
  </div>
</template>

<script>
export default {
  async asyncData({ params }) {
    const fileContent = await import(
      `~/assets/blog/articles/${params.post}.md`
    );
    return {
      attributes: fileContent.attributes,
      content: fileContent.html
    };
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

<style lang="sass">
</style>
