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
import ChangePermissionsComponent from "./components/ChangePermissionsComponent.js"
import DeleteUserComponent from "./components/DeleteUserComponent.js"

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
      { path: '/changepermissions', name: "changepermissions", component: ChangePermissionsComponent},
      { path: '/deleteuser', name: "deleteuser", component: DeleteUserComponent},

      { path: '/error', name: "error", component: ErrorComponent},
    ]
  });

  const vm = new Vue({

    data: {
      authenticated: false,
      userAuthenticated: false,
      admin: false,
      account: [],
      user: [],
      child: false,

      showTopMenu: false,
      isActive: false,
    },

    created: function () {
      // Check for a user in localStorage. If there is one, push to home and set authenticated. Otherwise push to login page.
      if (localStorage.getItem("cachedUser")) {
        let user = JSON.parse(localStorage.getItem("cachedUser"));

        this.authenticated = true;
        this.userAuthenticated = true;
        this.user = JSON.parse(localStorage.getItem("cachedUser"));
        
        // Sets admin if user is admin
        if(user.admin == "1") {
          this.admin = user.admin; 
        }

        // Checks if user is child
        if(JSON.parse(localStorage.getItem("cachedUser")).usertype == "1") {
          this.child = true;
        }
        
        this.$router.push({ name: "userhome", params: { currentuser: user }}).catch(err => { });
      } else {
        this.$router.push({ name: "home" }).catch(err => { });
      }
    },

    methods: {
      // Closes the user menu
      closeMenu(){
        this.showTopMenu = false;
        this.isActive = false;
      },
      
      // Sets account authenticated status
      setAuthenticated(status, data) {
        this.authenticated = status;
        this.account = data;
      },

      // Sets user authenticated status
      setUserAuthenticated(status) {
        this.userAuthenticated = status;
        this.user = JSON.parse(localStorage.getItem("cachedUser"));

        // Checks if user is child
        if(localStorage.getItem("cachedUser") && JSON.parse(localStorage.getItem("cachedUser")).usertype == "1") {
          this.child = true;
        }
      },

      // Sets user admin status
      setAdmin(status) {
        this.admin = status;
      },

      // Resets child status
      resetChild(status) {
        this.child = status;
      },

      logout() {
        // Push user back to login page
        this.$router.push({ name: "home" });
        this.authenticated = false;
        this.admin = false;
        this.userAuthenticated = false;

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