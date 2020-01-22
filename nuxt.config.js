import path from 'path'

const  hljs  =  require('highlight.js');
const md = require('markdown-it')({ 
  html: true,
  highlight: function (str, lang) {
    if (lang && hljs.getLanguage(lang)) {
      try {
        return '<pre class="hljs"><code>' +
        hljs.highlight(lang, str, true).value +
        '</code></pre>';
      } catch (__) {}
    }
    return '<pre class="hljs"><code>' + md.utils.escapeHtml(str) + '</code></pre>';
  } 
})

export default {
  mode: "universal",

  head: {
    title: "Adrien Dujardin",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: "Adrien Dujardin website"
      }
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" }
    ]
  },

  css: ["~/assets/css/main.css", "~/assets/css/highlight.css"],

  plugins: [],

  modules: [
    "@nuxt/http",
    "@nuxtjs/vuetify",
    "@nuxtjs/svg"
  ],

  http: {
    // See https://http.nuxtjs.org/api/#options
  },

  build: {
    extend (config, _ctx) {
      config.module.rules.push(
        {
          test: /\.md$/,
          loader: 'frontmatter-markdown-loader',
          include: path.resolve(__dirname, 'assets/blog/articles'),
          options: {
            markdown: (body) => {
              return md.render(body)
            },  
            vue: true
          }
        }
      )
    }
  },

  vuetify: {
    optionsPath: "./vuetify.options.js"
  }
};
