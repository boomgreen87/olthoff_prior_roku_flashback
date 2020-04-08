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

import ConfirmMessageComponent from "./components/ConfirmMessageComponent.js"
import CreatedAccountComponent from "./components/CreatedAccountComponent.js"

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

      { path: '/usersettings', name: "editprofile", component: UserSettingsComponent},
      { path: '/accountsettings', name: "accountsettings", component: AccountSettingsComponent},
      { path: '/manageusers', name: "manageusers", component: ManageUsersComponent},

      { path: '/createdaccount', name: "createdaccount", component: CreatedAccountComponent},
      { path: '/confirmmessage', name: "confirmmessage", component: ConfirmMessageComponent},
      { path: '/error', name: "error", component: ErrorComponent},
    ]
  });

  const vm = new Vue({

    data: {
      authenticated: false,
      admin: false,
      account: [],
      user: []
    },

    created: function () {
      // Check for a user in localStorage. If there is one, push to home and set authenticated. Otherwise push to login page.
      if (localStorage.getItem("cachedUser")) {
        let user = JSON.parse(localStorage.getItem("cachedUser"));


        this.authenticated = true;
        this.admin = user.admin; // Sets admin if user is admin
        
        this.$router.push({ name: "userhome", params: { currentuser: user }}).catch(err => { });
      } else {
        this.$router.push({ name: "home" }).catch(err => { });
      }
    },

    methods: {
      setAuthenticated(status, data) {
        this.authenticated = status;
        this.account = data;
      },

      setAdmin(status, user) {
        this.admin = status;
        this.user = user;
      },

      logout() {
        // Push user back to login page
        this.$router.push({ name: "login" });
        this.authenticated = false;
        this.admin = false;

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

  // Redirects user to home page if they try to open a page without logging in first (not including signup and login pages)
  router.beforeEach((to, from, next) => {
    if (vm.authenticated == false && to.name !== "login" && to.name !== "signup" && to.name !== "home") {
      next("/");
    } else {
      next();
    }
  });
})();