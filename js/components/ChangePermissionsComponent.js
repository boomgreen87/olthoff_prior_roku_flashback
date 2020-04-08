export default {
    name: "TheChangePermissionsComponent",

    template: `
        <div class="change-permissions-container">

            <h1 class="hidden">Change Permissions Component</h1>

            <div class="jumbotron roku-jumbotron">
                <h1 class="form-header">{{ header }}</h1>

                <hr class="my-4">

                <div id="all-account-users">
                    <div class="user-info" v-for="user in userList">
                        <img :src="'images/user/' + user.icon" class="user-icons">
                        <p class="user-name" >{{ user.name }}</p>
                        
                        <form class="change-permissions-form" @submit.prevent="changePermissions">
                            <label>User Type: </label>
                            <select v-model="user.userType" name="userType" required>
                                <option v-for="type in userTypes" :value="type.typeValue">{{ type.type }}</option>
                            </select>
            
                            <label>Admin Capabilities: </label>
                            <select v-model="user.admin" name="adminCapabilities" required>
                                <option v-for="admin in adminCapabilities" :value="admin.adminValue">{{ admin.admin }}</option>
                            </select>
            
                            <label>Preffered Media Age Rating: </label>
                            <select v-model="user.vidAgeRating" name="vidAgeRating" required>
                                <option v-for="rating in vidAgeRatings" :value="rating.ratingValue">{{ rating.rating }}</option>
                            </select>
            
                            <label>Explicit Music: </label>
                            <select v-model="user.explicitMusic" name="musicAgeRating" required>
                                <option v-for="rating in musicAgeRatings" :value="rating.ratingValue">{{ rating.rating }}</option>
                            </select>
                        </form>
                    </div>
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
            header: `Change Permissions`,

            userTypes: [
                {typeValue: 0, type: "Regular"},
                {typeValue: 1, type: "Child"}
            ],

            adminCapabilities: [
                {adminValue: 0, admin: "Disabled"},
                {adminValue: 1, admin: "Enabled"}
            ],

            vidAgeRatings: [
                {ratingValue: "1", rating: "G"},
                {ratingValue: "2", rating: "PG"},
                {ratingValue: "3", rating: "PG-13"},
                {ratingValue: "4", rating: "14A"},
                {ratingValue: "5", rating: "18A"},
                {ratingValue: "6", rating: "R"}
            ],

            musicAgeRatings: [
                {ratingValue: 0, rating: "Explicit Material Off"},
                {ratingValue: 1, rating: "Explicit Material On"}
            ],

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

        fetchUser() {
            console.log("Working");
        }
	}
}