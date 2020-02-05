export default {
  info: {
    name: "Dujardin",
    surname: "Adrien",
    dateOfBirth: "01-12-1991",
    contact: "adrien.duj{at}gmail.com",
    location: {
      city: "Nantes",
      country: "France"
    },
    intro: "I mainly am a wannabe full stack web developper",
    external: [
      {
        name: "Github",
        icon: "mdi-github-circle",
        link: "https://github.com/Lolwned"
      },
      {
        name: "Gitlab",
        icon: "mdi-gitlab",
        link: "https://gitlab.com/Lolwned"
      },
      {
        name: "StackOverflow",
        icon: "mdi-stack-overflow",
        link: "https://stackoverflow.com/users/5044822/lolwned"
      },
      {
        name: "Linkedin",
        icon: "mdi-linkedin",
        link: "https://www.linkedin.com/in/adrien-dujardin-104225a6/"
      }
    ]
  },
  skills: [
    {
      name: "Rest Api",
      level: 80,
      icon: "swagger"
    },
    {
      name: "GraphQL Api",
      level: 50,
      icon: "graphql"
    },
    {
      name: "Docker",
      level: 20,
      icon: "docker"
    },
    {
      name: "Javascript",
      level: 75,
      icon: "js"
    },
    {
      name: "VueJS",
      level: 75,
      icon: "vuejs"
    },
    {
      name: "NuxtJS",
      level: 60,
      icon: "nuxt"
    },
    {
      name: "Vuetify",
      level: 70,
      icon: "vuetify"
    },
    {
      name: "Quasar",
      level: 60,
      icon: "quasar"
    },
    {
      name: "NodeJS",
      level: 70,
      icon: "nodejs"
    },
    {
      name: "C#",
      level: 75,
      icon: "dotnetcore"
    },
    {
      name: "Aws",
      level: 30,
      icon: "aws"
    },
    {
      name: "SQL",
      level: 50,
      icon: "mysql"
    },
    {
      name: "Bulma",
      level: 45,
      icon: "bulma"
    }
  ],
  experiences: {
    proffesionnal: [
      {
        role: ".NET Core Developper",
        employer: {
          name: "Néo Soft",
          logo:
            "https://www.neo-soft.fr/assets/front/logo-neo-soft-groupe-bleu.png",
          type: "ESN",
          location: {
            city: "Nantes",
            country: "France"
          }
        },
        client: {
          name: "Verlingue",
          logo: "",
          type: "Insurance"
        },
        timeEmployed: {
          from: "2019-04",
          to: Date.now()
        },
        mission: "Complete rework of backend",
        details: `This project was built from the ground up. I was recruited for my interest in new technologies and my knowledge of legacy code. <br/>
                  With a team of 5 developpers, we are building a new Rest API to replace the old WCF services.`,
        tasks: [
          { name: "Development", icon: "mdi-laptop", color: "grey" },
          { name: "Conception", icon: "mdi-pencil", color: "purple lighten-2" },
          {
            name: "Legacy reverse engineering",
            icon: "mdi-cached",
            color: "red accent-2"
          },
          {
            name: "Unit tests",
            icon: "mdi-code-tags-check",
            color: "green lighten-1"
          },
          {
            name: "End to end tests",
            icon: "mdi-lan-check",
            color: "teal lighten-2"
          }
        ],
        stack: {
          back: ["dotnetcore", "postgresql", "swagger"]
        },
        management: "Agile"
      },
      {
        role: ".NET Developper",
        employer: {
          name: "Néo Soft",
          logo:
            "https://www.neo-soft.fr/assets/front/logo-neo-soft-groupe-bleu.png",
          type: "ESN",
          location: {
            city: "Nantes",
            country: "France"
          }
        },
        client: {
          name: "Verlingue",
          logo: "",
          type: "Insurance"
        },
        timeEmployed: {
          from: "2018-10",
          to: "2019-04"
        },
        mission: "Desktop application / Web evolution and maintenance",
        details: `Creation of new modules for an existing WPF application. <br/>
          I assured maintenance on the client website and did improve it's login security.`,
        tasks: [
          { name: "Development", icon: "mdi-laptop", color: "grey" },
          {
            name: "Unit tests",
            icon: "mdi-code-tags-check",
            color: "green lighten-1"
          },
          {
            name: "Technical specification writing",
            icon: "mdi-format-list-checkbox",
            color: "blue lighten-2"
          }
        ],
        stack: {
          back: ["dotnet", "oracle"],
          front: ["html", "js", "css"]
        },
        management: "Ticketing"
      },
      {
        role: ".NET Developper",
        employer: {
          name: "Cap Gemini",
          logo: "https://avatars3.githubusercontent.com/u/1049773?s=400&v=4",
          type: "ESN",
          location: {
            city: "Nantes",
            country: "France"
          }
        },
        client: {
          name: "BPCE",
          logo: "",
          type: "Assurance"
        },
        timeEmployed: {
          from: "2016-11",
          to: "2018-09"
        },
        mission: "Maintenance and evolution of insurance subscription software",
        details: `First joined to help with software and web maintenance. Then joined a team of 10 to create a new product line from scratch. <br/>
                  I was specialized in C# development but also did some Java and Python.`,
        tasks: [
          { name: "Development", icon: "mdi-laptop", color: "grey" },
          {
            name: "Refactoring",
            icon: "mdi-flip-vertical",
            color: "orange lighten-1"
          },
          {
            name: "Unit tests",
            icon: "mdi-code-tags-check",
            color: "green lighten-1"
          }
        ],
        stack: {
          back: ["dotnet", "oracle"],
          front: ["html", "js"]
        },
        management: "Agile"
      },
      {
        role: "PHP Developper",
        employer: {
          name: "Cap Gemini",
          logo: "https://avatars3.githubusercontent.com/u/1049773?s=400&v=4",
          type: "ESN",
          location: {
            city: "Nantes",
            country: "France"
          }
        },
        client: {
          name: "La Poste",
          logo: "",
          type: "Postal service"
        },
        timeEmployed: {
          from: "2016-01",
          to: "2016-11"
        },
        mission: "Evolutions for national distribution points software",
        details: `Joined this project to build new modules and improve performance on a aging web application. <br/>
                  It implied doing a lot of optimisation of existing algorithms and bringing new technologies like caching.`,
        tasks: [
          { name: "Development", icon: "mdi-laptop", color: "grey" },
          { name: "Conception", icon: "mdi-pencil", color: "purple lighten-2" },
          {
            name: "Optimisation",
            icon: "mdi-clock-fast",
            color: "red accent-2"
          },
          {
            name: "Unit tests",
            icon: "mdi-code-tags-check",
            color: "green lighten-1"
          }
        ],
        stack: {
          back: ["php", "mysql", "linux"],
          front: ["html", "jquery", "css"]
        },
        management: "Agile"
      },
      {
        role: ".NET Developper",
        employer: {
          name: "Cap Gemini",
          logo: "https://avatars3.githubusercontent.com/u/1049773?s=400&v=4",
          type: "ESN",
          location: {
            city: "Nantes",
            country: "France"
          }
        },
        client: {
          name: "Axa",
          logo: "",
          type: "Bank"
        },
        timeEmployed: {
          from: "2015-10",
          to: "2016-01"
        },
        mission: "Maintenance",
        details: `Built tools to speed up data analysis.`,
        tasks: [{ name: "Development", icon: "mdi-laptop", color: "grey" }],
        stack: {
          back: ["dotnet"]
        },
        management: null
      },
      {
        role: "PHP Developper",
        employer: {
          name: "Sopra Steria",
          logo:
            "http://www.svcolleges.edu.in/placement/Svcolleges_2017_Placement_details_html_dff7ea7e.png",
          type: "ESN",
          location: {
            city: "Nantes",
            country: "France"
          }
        },
        client: {
          name: "Erdf",
          logo: "",
          type: "Electricity supplier"
        },
        timeEmployed: {
          from: "2015-03",
          to: "2015-08"
        },
        mission: "Redesign et evolution of business tracker",
        details: `Second internship, participated in renovating an aging php web application. <br/>
                  Mainly graphical but also improving global performance and loading speed.`,
        tasks: [
          { name: "Development", icon: "mdi-laptop", color: "grey" },
          {
            name: "Unit tests",
            icon: "mdi-code-tags-check",
            color: "green lighten-1"
          }
        ],
        stack: {
          back: ["php", "oracle"],
          front: ["html", "jquery", "css"]
        },
        management: "V Cycle"
      },
      {
        role: ".Net Developper",
        employer: {
          name: "e-VConsult",
          logo: "",
          type: "Small business",
          location: {
            city: "Wavre",
            country: "Belgium"
          }
        },
        client: null,
        timeEmployed: {
          from: "2015-03",
          to: "2015-08"
        },
        mission: "Creating a new module for an existing web application",
        details: `First internship. Joined a team of 5 to build a new data entry module for an existing web application. <br/>
                  Learned the basics of C# and development on a Windows environment.`,
        tasks: [
          { name: "Development", icon: "mdi-laptop", color: "grey" },
          { name: "Conception", icon: "mdi-pencil", color: "purple lighten-2" }
        ],
        stack: {
          back: ["dotnet", "postgresql"],
          front: ["html", "jquery", "css"]
        },
        management: "V Cycle"
      }
    ],
    personnal: [
      {
        role: "JS Developper",
        employer: {
          name: "Myself",
          logo: "",
          type: "",
          location: {
            city: "Nantes",
            country: "France"
          }
        },
        client: null,
        timeEmployed: {
          from: "2019-12",
          to: new Date()
        },
        mission: "Creating this website",
        details: `Wanted a personnal website so here it is :) <br/>
                  No api, all data based on markdown and json files <br/> 
                  Source can be found here: <a href="https://github.com/Lolwned/cv">source</a>.`,
        tasks: [
          { name: "Development", icon: "mdi-laptop", color: "grey" },
          { name: "Conception", icon: "mdi-pencil", color: "purple lighten-2" },
          { name: "Architecture", icon: "mdi-city", color: "blue lighten-2" },
          {
            name: "Deployment",
            icon: "mdi-cloud-upload-outline",
            color: "orange lighten-2"
          }
        ],
        stack: {
          back: ["github", "zeit"],
          front: ["vuejs", "nuxt", "vuetify"]
        },
        management: ""
      },
      {
        role: "Fullstack JS Developper",
        employer: {
          name: "Myself",
          logo: "",
          type: "",
          location: {
            city: "Nantes",
            country: "France"
          }
        },
        client: null,
        timeEmployed: {
          from: "2019-01",
          to: new Date()
        },
        mission: "Sport organisation PWA",
        details: `Project initially started as a two man team. My role covered the entire stack (see below).<br/>
                  I Also conceptualized the majority of the data schema, api and the whole web application. <br/>
                  The app includes account management, geolocalisation (algolia api paired with OSM), and various others datas. <br/>
                  Not in active development, to be resumed.`,
        tasks: [
          { name: "Development", icon: "mdi-laptop", color: "grey" },
          { name: "Conception", icon: "mdi-pencil", color: "purple lighten-2" },
          { name: "Architecture", icon: "mdi-city", color: "blue lighten-2" },
          {
            name: "Deployment",
            icon: "mdi-cloud-upload-outline",
            color: "orange lighten-2"
          }
        ],
        stack: {
          back: ["nodejs", "graphql", "postgresql", "heroku", "gitlab"],
          front: ["vuejs", "nuxt", "apollo", "bulma"]
        },
        management: ""
      },
      {
        role: "Fullstack JS Developper",
        employer: {
          name: "Myself",
          logo: "",
          type: "",
          location: {
            city: "Nantes",
            country: "France"
          }
        },
        client: null,
        timeEmployed: {
          from: "2018-09",
          to: "2018-11"
        },
        mission: "Social network type application",
        details: `My first big scale solo project. Destined to be a large scale social app encouraging people to better themselves. <br/>
                  First experience also with AWS, I ended up using a lot of aws products, mainly Elastic bean stalk, Cognito, Gateway, Amplify ... <br/>
                  Features included account management, secured api, content creation and management, data analysis... <br/>
                  I also managed full cloud deployment on aws. <br/>
                  Development abandonned due to new job.`,
        tasks: [
          { name: "Development", icon: "mdi-laptop", color: "grey" },
          { name: "Conception", icon: "mdi-pencil", color: "purple lighten-2" },
          { name: "Architecture", icon: "mdi-city", color: "blue lighten-2" },
          {
            name: "Deployment",
            icon: "mdi-cloud-upload-outline",
            color: "orange lighten-2"
          },
          {
            name: "Unit tests",
            icon: "mdi-code-tags-check",
            color: "green lighten-1"
          }
        ],
        stack: {
          back: ["nodejs", "sequelize", "mysql", "linux", "aws", "gitlab"],
          front: ["vuejs", "quasar", "amplify"]
        },
        management: ""
      },
      {
        role: "JS Developper",
        employer: {
          name: "Myself",
          logo: "",
          type: "",
          location: {
            city: "Nantes",
            country: "France"
          }
        },
        client: null,
        timeEmployed: {
          from: "2017-04",
          to: "2017-06"
        },
        mission: "Discord bot",
        details: `Created a personnalized discord bot for personnal use. <br/>`,
        tasks: [
          { name: "Development", icon: "mdi-laptop", color: "grey" },
          { name: "Conception", icon: "mdi-pencil", color: "purple lighten-2" }
        ],
        stack: {
          back: ["nodejs", "discordjs", "gitlab"]
        },
        management: ""
      }
    ]
  }
};
