export default {
    name: "TheDeleteUserComponent",

    template: `
        <div class="change-permissions-container">

            <h1 class="hidden">Change Permissions Component</h1>

            <div class="back-button">
                <router-link to="/userhome">
                    <p class="button-links" >Back to App</p>
                </router-link>
            </div>
            
            <div class="roku-jumbotron">
                <h1 class="form-header">{{ header }}</h1>

                <hr class="my-4">

                <div class="all-account-users">
                    <div class="edit-info" v-for="user in userList" v-if="user.id !== currentUser">
                        <img :src="'images/user/' + user.icon" class="icon-selected">
                        <p class="user-name" >{{ user.name }}</p>
                        <button @click="deleteUser" :value="user.id" class="button">Delete User</button>
                    </div>
                    <hr class="my-4">
                </div>
            </div>
        </div>
    `,

	created: function () {
		this.fetchAllUsers();
	},

	data() {
		return {
            header: `Delete User`,
            userList: [],
            
            currentUser: ""
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

            // Sets current user ID so that it isn't available to delete
            this.currentUser = JSON.parse(localStorage.getItem("cachedUser")).id;
        },

        deleteUser() {
            // Determine which user in userList to delete
            let userID = event.target.value;

            let url = ("./admin/admin_deleteuser.php?user=" +userID);

            // Submits user info to database to delete
			fetch(url)
			.then(res => res.json())
			.then(data => {
                if(data == false) {
                    console.warn(data);
                    swal("Oops!", "There was a problem deleting the user!", "error");
                    // TODO: Replace alert
                } else {
                    swal("Success!", "The account has been deleted!", "success");

                    // Removes deleted user from userList
                    for(let i=0; i < this.userList.length; i++) {
                        if(this.userList[i].id == userID) {
                           this.userList.splice(i, 1);
                        }
                    }
                }
			})
			.catch((err) => console.error(err));
        }
	}
}