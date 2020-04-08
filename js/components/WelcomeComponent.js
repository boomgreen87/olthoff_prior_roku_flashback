import UserComponent from './UserComponent.js';

export default {
    template: `
        <div class="welcome-container">

            <h1 class="hidden">Home Page Component</h1>

            <div class="jumbotron roku-jumbotron">
                <h1 class="form-header">{{ header }}</h1>

                <hr class="my-4">
                <h2>{{ message }}</h2>

                <div id="all-account-users">
                    <user v-for="(user, index) in userList" :liveuser="user" :key="index"></user>
                </div>

                <div class="button">
                    <router-link to="/adduser">
                         <p class="button-links" >Add a New User</p>
                    </router-link>

                </div>

                <hr class="my-4">
<<<<<<< HEAD
=======

                <div class="profile-settings">
                    <h2>Profile Settings</h2>

                    <div class="edit-username">
                        <h3  class="lead">Change User Name</h3>
                    </div>

                    <div class="edit-photo">
                        <h3 class="lead">Change Display Photo</h3>
                    </div>

                    <div class="edit-background">
                        <h3 class="lead">Change Background</h3>
                    </div>
                </div>

                <hr class="my-4">

                <div class="account-settings">
                    <h2>Account Settings</h2>

                    <div class="manage-users">
                        <h3 class="lead">Manage Account Users</h3>
                    </div>

                    <div class="manage-email">
                        <h3 class="lead">Change Email Address</h3>
                    </div>

                    <div class="manage-password">
                        <h3 class="lead">Change Account Password</h3>
                    </div>
                </div>
                <hr class="my-4">

>>>>>>> 9b9a49a4412e0217de8e84acdaab12cf3a404182
            </div>
        </div>
    `,

	created: function () {
		this.fetchAllUsers();
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
		}
	},

	components: {
		user: UserComponent
	}
}