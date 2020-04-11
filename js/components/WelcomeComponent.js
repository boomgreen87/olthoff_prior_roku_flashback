import UserComponent from './UserComponent.js';

export default {
    name: "TheWelcomeComponent",

    template: `
        <div class="welcome-container">

            <h1 class="hidden">Home Page Component</h1>

            <div class="roku-jumbotron">
                <h1 class="form-header">{{ header }}</h1>

                <hr class="my-4">
                <h2>{{ message }}</h2>

                <div class="all-account-users">
                    <user v-for="(user, index) in userList" :liveuser="user" :key="index" @user-authenticated="emitUserAuthenticated" @admin="emitAdmin"></user>
                </div><br>
                
                <div class="button" id="add-new-user" v-if="userList.length < 4">
                    <router-link to="/adduser">
                         <p class="button-links" >Add a New User</p>
                    </router-link>

                </div>

                <hr class="my-4">
            </div>
        </div>
    `,

	created: function () {
        this.fetchAllUsers();
        this.clearCache();

        // Resets user-authenticated and admin so icon button doesn't appear on welcome page
        this.$emit("user-authenticated", false)
        this.$emit("admin", false);
	},

	data() {
		return {
            header: `Welcome to Flashback by Roku`,
            message: `Who's Watching?`,

			userList: []
		}
    },

	methods: {
        // Fetches all the users on the account
		fetchAllUsers() {
            let account = JSON.parse(localStorage.getItem("cachedAccount")).id;
            let url = ("./admin/admin_getusers.php?allusers=" + account);

			fetch(url)
			.then(res => res.json())
			.then(data => {
				this.userList = data;
			})
			.catch((err) => console.error(err));
        },

        clearCache() {
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

            // Remove cached users
            if (localStorage.getItem("cachedUser")) {
                localStorage.removeItem("cachedUser");
            }
        },

        // Emits user-authenticated to set true
        emitUserAuthenticated() {
            this.$emit("user-authenticated", true);
        },
        
        // Emits admin to set true
        emitAdmin() {
            this.$emit("admin", true);
        }
	},

	components: {
		user: UserComponent
	}
}