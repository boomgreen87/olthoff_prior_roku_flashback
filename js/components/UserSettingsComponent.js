export default {
    name: "TheUserSettingsComponent",

    template: `
    <div class="user-settings-container">
        <h1 class="hidden">Edit Profile Component</h1>

        <div class="jumbotron roku-jumbotron">
            <h1 class="form-header">Good Time Of Day Username!</h1>
            <hr class="my-4">

            <h3 class="lead">Edit Your Profile</h3>

            <form class="user-settings-form" @submit.prevent="editUser">
                
                <input class="hidden" v-model="user.id" type="text" name="id" readonly>

                <label>Display Name: </label>
                <input v-model="user.name" type="text" name="displayName" required><br>

                <label>Your Avitar: </label>
                <img class="icon-selected" id="selectedIcon" :src="'images/user/' + user.icon" alt="User Icon">
                <label>Choose New Avitar: </label>
                <div class="option-con">
                
                    <img  class="edit-option" v-for="icon in icons" :id="icon.iconID" v-on:click="setIcon" :src="'images/user/' + icon.iconPath" alt="User Icon" >
                </div>
                
                <button type="submit" name="submit" class="button">Edit User</button>
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
                    alert("There was a problem accessing your user settings."); // TODO: Replace alert
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
                    alert("There was a problem editing your user settings."); // TODO: Replace alert
                } else {
                    alert("User successfully edited."); // TODO: Replace alert
                }
			})
			.catch((err) => console.error(err));
        }
	}
}