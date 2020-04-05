//all components here
import LoginComponent from "./components/LoginComponent.js"
import MoviesComponent from "./components/MoviesComponent.js"
import TvComponent from "./components/TvComponent.js"
import MusicComponent from "./components/MusicComponent.js"
import SignupComponent from "./components/SignupComponent.js"
import HomeComponent from "./components/HomeComponent.js"
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

      { path: '/movies', name: "movies", component: MoviesComponent},
      { path: '/tv', name: "tv shows", component: TvComponent},
      { path: '/music', name: "music", component: MusicComponent},

      { path: '/welcome', name: "welcome", component: WelcomeComponent},

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
        // delete local session

        // push user back to login page
        this.$router.push({ path: "/login" });
        this.authenticated = false;
      }
    },

    router: router
  }).$mount("#app");
})();