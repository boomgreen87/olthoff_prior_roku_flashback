//all components here
import LoginComponent from "./components/LoginComponent.js"
import MoviesComponent from "./components/MoviesComponent.js"
import TvComponent from "./components/TvComponent.js"
import MusicComponent from "./components/MusicComponent.js"
import KidsComponent from "./components/KidsComponent.js"
import ErrorComponent from "./components/ErrorComponent.js"

(() => {
  let router = new VueRouter({
    // set routes
    routes: [
      { path: '/', redirect: { name: "login" } },
      { path: '/login', name: "login", component: LoginComponent },
      { path: '/movies', name: "movies", component: MoviesComponent},
      { path: '/tv', name: "tv shows", component: TvComponent},
      { path: '/kids', name: "kids", component: MoviesComponent},
      { path: '/error', name: "error", component: ErrorComponent},
    ]
  });

  const vm = new Vue({

    data: {
      authenticated: false,
      administrator: false,

      mockAccount: {
        username: "user",
        password: "password"
      },

      user: [],

      //currentUser: {},
    },

    created: function () {
      // do a localstorage session check and set authenticated to true if the session still exists
      // if the cached user exists, then just navigate to their user home page

      // the localstorage session will persist until logout
    },

    methods: {
      setAuthenticated(status) {
        this.authenticated = status;
      },

      logout() {
        // delete local session

        // push user back to login page
        this.$router.push({ path: "/login" });
        this.authenticated = false;
      }
    },

    router: router
  }).$mount("#app");
})();