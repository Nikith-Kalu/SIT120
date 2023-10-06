const NavBar = {
  template: `
        <nav>
            <router-link to="/"><svg viewBox="0 0 32 32"><path d="M16 3L1 16h6v13h9V15h4v14h9V16h6z"></path></svg></router-link>
            <router-link to="/projects"><svg viewBox="0 0 32 32"><path d="M4 6v20h24V6H4zm4 4h16v2H8V10zm0 4h16v2H8v-2zm0 4h16v2H8v-2z"></path></svg></router-link>
            <router-link to="/contact"><svg viewBox="0 0 32 32"><path d="M2 8v16h28V8H2zm2 2h24v2l-12 8L4 12v-2zm24 12H4v-2.688l8-5.313L16 18l4-1.969 8 5.281V22z"></path></svg></router-link>
        </nav>
    `,
};

const Home = {
  template: `
        <div class="home-content">
            <div class="terminal">
                <h2>Nikith Kaluwitharana</span></h2>
                <p>> Welcome to my Portfolio Page!<span class="blinking-cursor"></span></p>
            </div>
        </div>
    `,
};

const Projects = {
  template: `
        <div>
            <h2>My Projects</h2>
            <div class="projects-grid">
                <div v-for="project in projects" class="project-card">
                    <div class="project-content">
                        <svg class="project-icon" viewBox="0 0 32 32">
                            <circle cx="16" cy="16" r="12"></circle>
                        </svg>
                        <h3>{{ project.name }}</h3>
                        <p>{{ project.description }}</p>
                        <small>Year: {{ project.year }}</small>
                    </div>
                </div>
            </div>
        </div>
    `,
  data() {
    return {
      projects: [
        {
          name: "To-Do List",
          description: "A simple to-do list application.",
          year: "2021",
        },
        {
          name: "Weather App",
          description: "An app to fetch and display weather data.",
          year: "2021",
        },
        {
          name: "Portfolio Website",
          description: "A personal portfolio website.",
          year: "2022",
        },
        {
          name: "Recipe Finder",
          description: "An app to search and display recipes.",
          year: "2022",
        },
        {
          name: "Expense Tracker",
          description: "A tool to track and visualize expenses.",
          year: "2022",
        },
        {
          name: "Memory Card Game",
          description: "A card-matching game to test memory.",
          year: "2023",
        },
      ],
    };
  },
};

const Contact = {
  template: `
        <div>
            <h2>Contact Me</h2>
            <div class="contact-content">
                <div class="avatar">NK</div>
                <contact-form></contact-form>
            </div>
        </div>
    `,
  components: {
    "contact-form": {
      data() {
        return {
          contactName: "",
          contactMessage: "",
        };
      },
      methods: {
        handleSubmit() {
          alert(
            `Thank you, ${this.contactName}. Your message has been received!`
          );
          this.contactName = "";
          this.contactMessage = "";
        },
      },
      template: `
                <form @submit.prevent="handleSubmit">
                    <label for="name">Name:</label>
                    <input type="text" id="name" v-model="contactName">
                    <label for="message">Message:</label>
                    <textarea id="message" v-model="contactMessage"></textarea>
                    <button type="submit">Send</button>
                </form>
            `,
    },
  },
};

const routes = [
  { path: "/", component: Home },
  { path: "/projects", component: Projects },
  { path: "/contact", component: Contact },
];

const router = VueRouter.createRouter({
  history: VueRouter.createWebHashHistory(),
  routes,
});

const app = Vue.createApp({});
app.component("nav-bar", NavBar);
app.use(router);
app.mount("#app");
