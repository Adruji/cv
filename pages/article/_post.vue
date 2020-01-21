<template>
  <div :key="$route.params.post">
    <div  class="single-page">
      <div  class="header-single-image-full">
        <img
          :src="attributes.header"
          :alt="attributes.title"
          loading="lazy"
        />
      </div>
    </div>
  </div>
</template>

<script>
import fm from 
const  hljs  =  require('highlight.js');
const  fm  =  require("front-matter");
const  md  =  require("markdown-it")({
	html:  true,
	langPrefix:  '',
	typographer:  true,
	highlight:  function (str, lang) {
		if (lang  &&  hljs.getLanguage(lang)) {
			try {
				return  hljs.highlight(lang, str).value;
			} catch (__) {}
		}
		return  '';
	}
});

export  default {
	async  asyncData({ params }) {
		const  fileContent  =  await  import(`~/assets/blog/articles/20200122/${params.post}/index.md`)
		let  res  =  fm(fileContent.default);
		return {
			attributes:  res.attributes,
			content:  md.render(res.body)
		};
	},

	head() {
		return {
            title:  this.attributes.title  +  ' | Nicholas Griffin',
            meta: [

                    {
                        hid:  "description",
                        name:  "description",
                        content:  this.attributes.description
                    }
            ]
        };
    }
};
</script>

<style lang="sass" scoped>

</style>