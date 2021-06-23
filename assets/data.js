export default {
  info: {
    name: "Dujardin",
    surname: "Adrien",
    dateOfBirth: "01-12-1991",
    contact: "adrien[[dot]duj{at}}gmail||dot|com",
    location: {
      city: "Nantes",
      country: "France"
    },
    intro: "I'm a human, and a full stack web developer",
    external: [
      {
        name: "Github",
        icon: "mdi-github",
        link: "https://github.com/adruji"
      },
      {
        name: "Gitlab",
        icon: "mdi-gitlab",
        link: "https://gitlab.com/adruji"
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
      name: "Swagger",
      icon: "swagger"
    },
    {
      name: "GraphQL Api",
      icon: "graphql"
    },
    {
      name: "Docker",
      icon: "docker"
    },
    {
      name: "Javascript",
      icon: "js"
    },
    {
      name: "VueJS",
      icon: "vuejs"
    },
    {
      name: "NuxtJS",
      icon: "nuxt"
    },
    {
      name: "Vuetify",
      icon: "vuetify"
    },
    {
      name: "NodeJS",
      icon: "nodejs"
    },
    {
      name: "C#",
      icon: "dotnetcore"
    },
    {
      name: "Aws",
      icon: "aws"
    },
    {
      name: "Postgresql",
      icon: "postgresql"
    },
    {
      name: "Bulma",
      icon: "bulma"
    },
    {
      name: "Visual studio code",
      icon: "visualstudiocode"
    },
    {
      name: "Git",
      icon: "git"
    },
    {
      name: "Gitlab",
      icon: "gitlab"
    },
    {
      name: "Flutter",
      icon: "flutter"
    },
    {
      name: "Tailwind Css",
      icon: "tailwind"
    },
    {
      name: "Typescript",
      icon: "typescript"
    }
  ],
  experiences: {
    professional: [
      {
        role: ".NET Dev",
        employer: {
          name: "Neo Soft",
          logo:
            "https://www.neo-soft.fr/assets/front/logo-neo-soft-groupe-bleu.png",
          type: "ESN",
          location: {
            city: "Nantes",
            country: "France"
          }
        },
        client: {
          name: "SGS",
          logo: "",
          type: "Services"
        },
        timeEmployed: {
          from: "2020-11-16",
          to: "2021-09-17"
        },
        mission: "Partial rework of backend and maintenance",
        details: `In charge of maintaining the legacy SOAP Api first, I quickly pushed to build a new version of this Api using the latest version of DotNet technologies (Net 5, Entity, Swagger).`,
        tasks: [
          { name: "Development", icon: "mdi-laptop", color: "grey" },
          { name: "Conception", icon: "mdi-pencil", color: "purple lighten-2" },
          {
            name: "Legacy reverse engineering",
            icon: "mdi-cached",
            color: "red accent-2"
          }
        ],
        stack: {
          back: ["dotnetcore", "oracle", "swagger"]
        },
        management: "Agile"
      },
      {
        role: ".NET Core Dev",
        employer: {
          name: "Neo Soft",
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
          from: "2019-06-25",
          to: "2020-05-31"
        },
        mission: "Complete rework of backend",
        details: `This project was built from the ground up. I was recruited for my interest in new technologies and my knowledge of legacy code. <br/>
                  With a team of 5 developers, we are building a new Rest API to replace the old WCF services.`,
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
        role: ".NET Dev",
        employer: {
          name: "Neo Soft",
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
          from: "2018-10-05",
          to: "2019-05-24"
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
        role: ".NET Dev",
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
          from: "2016-11-16",
          to: "2018-08-31"
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
        role: "PHP Dev",
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
          from: "2016-01-18",
          to: "2016-11-15"
        },
        mission: "Evolutions for national distribution points software",
        details: `Joined this project to build new modules and improve performance on a aging web application. <br/>
                  It implied doing a lot of optimisation of existing algorithms and bringing new technologies like caching. <br/>
                  The team being relatively small, I was also assigned conception tasks. `,
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
        role: ".NET Dev",
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
          from: "2015-10-20",
          to: "2016-01-17"
        },
        mission: "Maintenance",
        details: `Built tools to speed up data analysis. <br/>
                  The main tool was an excel extension used to analyse results coming from a bank mainframe.`,
        tasks: [{ name: "Development", icon: "mdi-laptop", color: "grey" }],
        stack: {
          back: ["dotnet"]
        },
        management: null
      },
      {
        role: "PHP Dev",
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
          from: "2015-03-02",
          to: "2015-08-28"
        },
        mission: "Redesign et evolution of business tracker",
        details: `Second internship, participated in renovating an aging php web application. <br/>
                  Mainly graphical revamp but also improving global performance and loading speed.`,
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
        role: ".Net Dev",
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
          from: "2013-04-02",
          to: "2013-05-24"
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
        role: "FullStack JS Developer",
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
        status: "play",
        timeEmployed: {
          from: "2020-10",
          to: null
        },
        mission: "France best departement finder",
        details: `Interactive website where you can choose and adjust multiple criterias to find your best spot in France !<br>
                  Huge script to gather lots of data and compute it into a json file localy served with the app.<br>
                  <a href="https://meilleurdepartement.fr/">Check it over here</a>`,
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
          back: ["github", "vercel"],
          front: ["vuejs", "nuxt", "bulma"]
        }
      },
      {
        role: "Flutter Dev",
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
        status: "check",
        timeEmployed: {
          from: "2020-07",
          to: "2019-10"
        },
        mission: "Recipe converter/balancer",
        details: `First app made using Flutter. It gives you all the tools to save, convert and balance your recipes.<br>
                  With an extended local food database, it's possible to convert volumes to weight with ease.
                  Fully local app with no backend, no account. <br>
                  <a href="https://play.google.com/store/apps/details?id=com.codembert.recipe_converter">Download here</a>`,
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
          front: ["flutter"]
        }
      },
      {
        role: "Fullstack JS Dev",
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
        status: "check",
        timeEmployed: {
          from: "2020-05",
          to: "2019-07"
        },
        mission: "Team splitter",
        details: `Light version of my 2019 sport project. PWA packaged to be available on play store.<br/>
                  Small front end with a equally small Rest API.<br>
                  <a href="https://play.google.com/store/apps/details?id=com.herokuapp.splite.twa">Download here</a>`,
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
          back: ["nodejs", "postgresql", "heroku", "gitlab"],
          front: ["vuejs", "nuxt", "tailwind"]
        }
      },
      {
        role: "JS Dev",
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
        status: "pause",
        timeEmployed: {
          from: "2019-12",
          to: null
        },
        mission: "Creating this website",
        details: `Wanted a personnal website so here it is :) <br/>
                  No api, all data based on markdown and json files <br/> 
                  Source can be found here: <a href="https://github.com/adruji/cv">source</a>.`,
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
          back: ["github", "vercel"],
          front: ["vuejs", "nuxt", "vuetify"]
        }
      },
      {
        role: "Fullstack JS Dev",
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
        status: "stop",
        timeEmployed: {
          from: "2019-01",
          to: "2019-12"
        },
        mission: "Sport organisation PWA",
        details: `Project initially started as a two man team. My role covered the entire stack (see below).<br/>
                  I Also conceptualized the majority of the data schemas, api and the whole web application. <br/>
                  The app includes account management, geolocalisation (Algolia api paired with OSM), and various other data. <br/>`,
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
          back: [
            "typescript",
            "prisma",
            "nodejs",
            "graphql",
            "postgresql",
            "heroku",
            "gitlab"
          ],
          front: ["vuejs", "nuxt", "apollo", "bulma"]
        }
      },
      {
        role: "Fullstack JS Dev",
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
        status: "stop",
        timeEmployed: {
          from: "2018-09",
          to: "2018-11"
        },
        mission: "Social network type application",
        details: `My first big scale solo project. Destined to be a large scale social app encouraging people to better themselves. <br/>
                  First experience with AWS, I ended up using a lot of it's products, mainly Elastic bean stalk, Cognito, Gateway, Amplify ... <br/>
                  Features included account management, secured api, content creation and management, data analysis... <br/>
                  I also managed full cloud deployment on AWS. <br/>
                  Development abandonned due to new job and lack of time.`,
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
        }
      },
      {
        role: "JS Dev",
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
        status: "stop",
        timeEmployed: {
          from: "2017-04",
          to: null
        },
        mission: "Discord bot",
        details: `Created a personnalized discord bot for personnal use. <br/>
                  Originally developed for IRC, it includes a trivia game, ranking, witty interractions and more. <br/>
                  Recently added support for db storage and multiple servers/channels.`,
        tasks: [
          { name: "Development", icon: "mdi-laptop", color: "grey" },
          { name: "Conception", icon: "mdi-pencil", color: "purple lighten-2" }
        ],
        stack: {
          back: ["nodejs", "discordjs", "sqlite", "gitlab"]
        }
      }
    ]
  }
};
