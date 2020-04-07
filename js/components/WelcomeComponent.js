import UserComponent from './UserComponent.js';

export default {
    template: `
        <div class="welcome-container">
            <h1 class="hidden">Home Page Component</h1>

            <div class="jumbotron roku-jumbotron">
                <h1 class="form-header">{{ header }}</h1>

                <hr class="my-4">

                <h2 class="lead">{{ message }}</h2>

                <div id="all-account-users">
                    <user v-for="(user, index) in userList" :liveuser="user" :key="index"></user>
                </div>

                <div class="home-button" v-if="userList.length < 4">
                    <router-link class="home-button-links" to="/adduser">
                        Add a New User
                    </router-link>
                </div>

                <hr class="my-4">
            </div>
        </div>
    `,

	created: function () {
		this.fetchAllUsers();
	},

	data() {
		return {
            header: `Welcome to Flashback by Roku`,
            message: `Who's Using Roku?`,
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
		}
	},

	components: {
		user: UserComponent
	}
}