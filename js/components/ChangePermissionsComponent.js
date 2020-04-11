export default {
    name: "TheChangePermissionsComponent",

    template: `
        <div class="change-permissions-container">

            <h1 class="hidden">Change Permissions Component</h1>

            <div class="back-button">
                <router-link tag="li" to="/userhome">
                    <p class="button-links" >Back to App</p>
                </router-link>
            </div>

            <div class="roku-jumbotron">
                <h1 class="form-header">{{ header }}</h1>
                <hr class="my-4">

                <div id="all-account-users">
                    <div class="edit-info" v-for="user in userList">
                        <img :src="'images/user/' + user.icon" class="icon-selected"><br>

                        <p class="user-name" >{{ user.name }}</p>
                        
                        <form class="change-permissions-form" :id="user.id" @submit.prevent="changePermissions">
                            <input class="hidden" v-model="user.id" type="text" name="idField" readonly>

                            <label>User Type: </label>
                            <select v-model="user.usertype" name="userType" required>
                                <option v-for="type in userTypes" :value="type.typeValue">{{ type.type }}</option>
                            </select>
            
                            <label v-if="user.usertype == false">Admin Capabilities: </label>
                            <select v-if="user.usertype == false" v-model="user.admin" name="adminCapabilities" required>
                                <option v-for="admin in adminCapabilities" :value="admin.adminValue">{{ admin.admin }}</option>
                            </select>
            
                            <label>Preffered Media Age Rating: </label>
                            <select v-model="user.vidrating" name="vidAgeRating" required>
                                <option v-for="rating in vidAgeRatings" :value="rating.ratingValue">{{ rating.rating }}</option>
                            </select>
            
                            <label>Explicit Music: </label>
                            <select v-model="user.explicitmusic" name="musicAgeRating" required>
                                <option v-for="rating in musicAgeRatings" :value="rating.ratingValue">{{ rating.rating }}</option>
                            </select>

                                <button type="submit" name="submit" class="button">Change Permissions</button><br>
                            
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

        changePermissions() {
            // Determine which user in userList to use
            let userID = event.target.id;
            let targetUser;

            for(let i=0; i < this.userList.length; i++) {
                if(this.userList[i].id == userID) {
                    targetUser = i;

                    // Changes admin to 0 if child account
                    if(this.userList[i].usertype == 1) {
                        this.userList[i].admin = 0;
                    }
                }
            }

            // Generate the form data
            let formData = new FormData();

            formData.append("id", this.userList[targetUser].id);
            formData.append("admin", this.userList[targetUser].admin);
            formData.append("userType", this.userList[targetUser].usertype);
            formData.append("vidRating", this.userList[targetUser].vidrating);
            formData.append("explicitMusic", this.userList[targetUser].explicitmusic);

            let url = ("./admin/admin_changepermissions.php");

            // Submits edited info to database
			fetch(url, {
                method: 'POST',
                body: formData
            })
			.then(res => res.json())
			.then(data => {
                if(data == false) {
                    console.warn(data);
                    swal("Oops!", "We couldn't save your changes! Please try again.", "error"); // TODO: Replace alert
                } else {
                    swal("Success!", "Your Changes have been saved!", "success");
                    // TODO: Replace alert
                }
			})
			.catch((err) => console.error(err));
        }
	}
}