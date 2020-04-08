// Import all components here
import HomeComponent from "./components/HomeComponent.js"

import LoginComponent from "./components/LoginComponent.js"
import SignupComponent from "./components/SignupComponent.js"

import UserHomeComponent from "./components/UserHomeComponent.js"

import WelcomeComponent from "./components/WelcomeComponent.js"

import AddUserComponent from "./components/AddUserComponent.js"

import UserSettingsComponent from "./components/UserSettingsComponent.js"
import AccountSettingsComponent from "./components/AccountSettingsComponent.js"

import ManageUsersComponent from "./components/ManageUsersComponent.js"

import ErrorComponent from "./components/ErrorComponent.js"

(() => {
  let router = new VueRouter({
    // Set routes
    routes: [
      { path: '/', name: "home", component: HomeComponent},

      { path: '/login', name: "login", component: LoginComponent },
      { path: '/signup', name: "signup", component: SignupComponent},

      { path: '/welcome', name: "welcome", component: WelcomeComponent},
      { path: '/adduser', name: "adduser", component: AddUserComponent},

      { path: '/userhome', name: "userhome", component: UserHomeComponent, props: true },

      { path: '/usersettings', name: "usersettings", component: UserSettingsComponent},
      { path: '/accountsettings', name: "accountsettings", component: AccountSettingsComponent},

      { path: '/manageusers', name: "manageusers", component: ManageUsersComponent},

      { path: '/error', name: "error", component: ErrorComponent},
    ]
  });

  const vm = new Vue({

    data: {
      authenticated: false,
      administrator: false,
      user: [],
    },

    created: function () {
      // Check for a user in localStorage. If there is one, push to home and set authenticated. Otherwise push to login page.
      if (localStorage.getItem("cachedUser")) {
        let user = JSON.parse(localStorage.getItem("cachedUser"));

        this.authenticated = true;

        this.$router.push({ name: "userhome", params: { currentuser: user }});
      } else {
        this.$router.push({ name: "home" }).catch(err => { });
      }
    },

    methods: {
      setAuthenticated(status, data) {
        this.authenticated = status;
        this.user = data;
      },

      logout() {
        // Push user back to login page
        this.$router.push({ name: "login" });
        this.authenticated = false;

        // Remove cached accounts
        if (localStorage.getItem("cachedAccount")) {
          localStorage.removeItem("cachedAccount");
        }

        // Remove cached users
        if (localStorage.getItem("cachedUser")) {
          localStorage.removeItem("cachedUser");
        }

        // Remove cached movies
        if(localStorage.getItem("cachedMovie")) {
          localStorage.removeItem("cachedMovie");
        }

        // Remove cached shows
        if(localStorage.getItem("cachedShow")) {
          localStorage.removeItem("cachedShow");
        }

        // Remove cached songs
        if(localStorage.getItem("cachedSong")) {
          localStorage.removeItem("cachedSong");
        }
      }
    },

    router: router
  }).$mount("#app");

  // Redirects user to home page if they try to open a page without logging in first
  // router.beforeEach((to, from, next) => {
  //   if (vm.authenticated == false) {
  //     next("/");
  //   } else {
  //     next();
  //   }
  // });
})();