export default {
    name: "TheUserSettingsComponent",

    template: `
    <div class="user-settings-container">
        <h1 class="hidden">Edit Profile Component</h1>

            <div class="back-button" v-bind:class="{ purpleBackground : this.$root.child }">
                <router-link tag="li" to="/userhome">
                    <p class="button-links" >Back to App</p>
                </router-link>
            </div>

        <div class="roku-jumbotron" v-bind:class="{ pinkBackground : this.$root.child }">
            <h1 class="form-header">Edit User Settings</h1>
            <hr class="my-4">

            <form class="user-settings-form" @submit.prevent="editUser">
                
                <input class="hidden" v-model="user.id" type="text" name="id" readonly>

                <label>Display Name: </label>
                <input v-model="user.name" type="text" name="displayName" required><br>

                <label class="hidden">Your Avatar: </label>
                <img class="icon-selected" id="selectedIcon" :src="'images/user/' + user.icon" alt="User Icon">
                <label>Choose New Avatar: </label>

                <div class="option-con">
                    <img  class="icon-option" v-for="icon in icons" :id="icon.iconID" v-on:click="setIcon" :src="'images/user/' + icon.iconPath" alt="User Icon" >
                </div><hr class="my-4">
                
                <button type="submit" name="submit" class="button" v-bind:class="{ purpleBackground : this.$root.child }">Edit User</button>
            </form>
            <hr class="my-4">
        </div>
    </div>
    `,

    created: function () {
		this.fetchUser();
	},

	data() {
		return {
            user: {},

            icons: [
                {iconID: "user1", iconPath: "user1.png"},
                {iconID: "user2", iconPath: "user2.png"},
                {iconID: "user3", iconPath: "user3.png"},
                {iconID: "user4", iconPath: "user4.png"},
                {iconID: "user5", iconPath: "user5.png"},
                {iconID: "user6", iconPath: "user6.png"},
            ]   
        }
    },

    methods: {
        // Sets user icon
        setIcon() {
            this.user.icon = event.target.id + ".png";
        },

        // Fetches all the account info
		fetchUser() {
            let userID = JSON.parse(localStorage.getItem("cachedUser")).id;
            let url = ("./admin/admin_getsingleuser.php?user=" + userID);

			fetch(url)
			.then(res => res.json())
			.then(data => {
                if (data == false) {
                    console.warn(data);
                    swal("Oops!", "There was a problem accessing your user settings!", "error");
                } else {
                    this.user = data;
                }
			})
			.catch((err) => console.error(err));
        },

        editUser() {
            // Generate the form data
            let formData = new FormData();

            formData.append("id", this.user.id);
            formData.append("displayName", this.user.name);
            formData.append("icon", this.user.icon);

            let url = ("./admin/admin_edituser.php");

            // Submits edited info to database
			fetch(url, {
                method: 'POST',
                body: formData
            })
			.then(res => res.json())
			.then(data => {
                if(data == false) {
                    console.warn(data);
                        swal("Oops!", "There was a problem editing your user settings!", "error");
                    } else {
                        swal("Success!", "The user was successfully edited!", "success");
                    }
			})
			.catch((err) => console.error(err));
        }
	}
}