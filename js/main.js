//all components here
import LoginComponent from "./components/LoginComponent.js"
import SignupComponent from "./components/SignupComponent.js"
import HomeComponent from "./components/HomeComponent.js"
import UserHomeComponent from "./components/UserHomeComponent.js"
import WelcomeComponent from "./components/WelcomeComponent.js"
import EditProfileComponent from "./components/EditProfileComponent.js"
import AccountSettingsComponent from "./components/AccountSettingsComponent.js"
import ChangeDisplayNameComponent from "./components/ChangeDisplayNameComponent.js"
import ChangeDisplayPictureComponent from "./components/ChangeDisplayPictureComponent.js"
import ChangeBackgroundComponent from "./components/ChangeBackgroundComponent.js"
import ManageAccountUsersComponent from "./components/ManageAccountUsersComponent.js"
import ChangePasswordComponent from "./components/ChangePasswordComponent.js"
import ChangeEmailComponent from "./components/ChangeEmailComponent.js"

import ConfirmMessageComponent from "./components/ConfirmMessageComponent.js"
import CreatedAccountComponent from "./components/CreatedAccountComponent.js"

import ErrorComponent from "./components/ErrorComponent.js"

(() => {
  let router = new VueRouter({
    // set routes
    routes: [
      { path: '/', name: "home", component: HomeComponent},

      { path: '/login', name: "login", component: LoginComponent },
      { path: '/signup', name: "signup", component: SignupComponent},

      { path: '/welcome', name: "welcome", component: WelcomeComponent},

      { path: '/userhome', name: "userhome", component: UserHomeComponent, props: true },

      { path: '/editprofile', name: "editprofile", component: EditProfileComponent},
      { path: '/accountsettings', name: "accountsettings", component: AccountSettingsComponent},

      { path: '/changedisplayname', name: "changedisplayname", component: ChangeDisplayNameComponent},
      { path: '/changedisplaypicture', name: "changedisplaypicture", component: ChangeDisplayPictureComponent},
      { path: '/changebackground', name: "changebackground", component: ChangeBackgroundComponent},

      { path: '/manageaccountusers', name: "manageaccountusers", component: ManageAccountUsersComponent},
      { path: '/changepassword', name: "changepassword", component: ChangePasswordComponent},
      { path: '/changeemail', name: "changeemail", component: ChangeEmailComponent},

      { path: '/createdaccount', name: "createdaccount", component: CreatedAccountComponent},
      { path: '/confirmmessage', name: "confirmmessage", component: ConfirmMessageComponent},

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
        // Push user back to login page
        this.$router.push({ name: "login" });
        this.authenticated = false;

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
})();