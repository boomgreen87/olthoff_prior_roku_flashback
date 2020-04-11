export default {
    name: "TheAddUserComponent",

    template: `
    <div class="adduser-container">
        <h1 class="hidden">Add User Component</h1>

        <div class="back-button" v-if="this.cachedUser">
            <router-link tag="li" to="/userhome">
                <p class="button-links" >Back to App</p>
            </router-link>
        </div>

        <div class="roku-jumbotron">
            <h1 class="form-header">Add a New User to Your Account</h1>
            <hr class="my-4">
            <form class="add-user-form" @submit.prevent="addUser" method="post" enctype="multipart/form-data">

                <label>Display Name: </label>
                <input v-model="input.displayName" type="text" name="displayName" required>

               
                <img class="icon-selected" id="selectedIcon" :src="'images/user/' + input.icon" alt="User Icon">

                <label>Select Avatar:</label>
                <div class="option-con">
                    <img v-for="icon in icons" :id="icon.iconID" v-on:click="setIcon" :src="'images/user/' + icon.iconPath" alt="User Icon" class="icon-option">
                </div>

                <label>User Type: </label>
                <select v-model.lazy="input.userType" name="userType" required>
                    <option v-for="type in userTypes" :value="type.typeValue">{{ type.type }}</option>
                </select>

                <label v-if="input.userType == false">Admin Capabilities: </label>
                <select v-if="input.userType == false" v-model="input.admin" name="adminCapabilities" required>
                    <option v-for="admin in adminCapabilities" :value="admin.adminValue">{{ admin.admin }}</option>
                </select>

                <label>Preffered Media Age Rating: </label>
                <select v-model="input.vidAgeRating" name="vidAgeRating" required>
                    <option v-for="rating in vidAgeRatings" :value="rating.ratingValue">{{ rating.rating }}</option>
                </select>

                <label>Explicit Music: </label>
                <select v-model="input.explicitMusic" name="musicAgeRating" required>
                    <option v-for="rating in musicAgeRatings" :value="rating.ratingValue">{{ rating.rating }}</option>
                </select><br><br>

                <button type="submit" name="submit" class="button">Add User</button>
            </form>
            <hr class="my-4">
        </div>
    </div>
    `,

    data() {
        return {
            input: {
                    displayName: "",
                    icon: "user1.png",
                    admin: 0,
                    userType: 0,
                    vidAgeRating: 1,
                    explicitMusic: 0
            },

            icons: [
                {iconID: "user1", iconPath: "user1.png"},
                {iconID: "user2", iconPath: "user2.png"},
                {iconID: "user3", iconPath: "user3.png"},
                {iconID: "user4", iconPath: "user4.png"},
                {iconID: "user5", iconPath: "user5.png"},
                {iconID: "user6", iconPath: "user6.png"},
            ],

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

            user: {},

            cachedUser: false
        }
    },

    created: function () {
        if(localStorage.getItem("cachedUser")) {
            this.cachedUser = true;
        }
    },

    methods: {
        // Sets user icon
        setIcon() {
            this.input.icon = event.target.id + ".png";
        },

        addUser() {
            // Gets account ID
            let account = JSON.parse(localStorage.getItem("cachedAccount")).id

            // Changes admin to 0 if child user
            if(this.input.userType == 1) {
                this.input.admin = 0;
            }

            // Generate the form data
            let formData = new FormData();

            formData.append("account", account);
            formData.append("icon", this.input.icon);
            formData.append("displayName", this.input.displayName);
            formData.append("admin", this.input.admin);
            formData.append("usertype", this.input.userType);
            formData.append("vidAgeRating", this.input.vidAgeRating);
            formData.append("explicitMusic", this.input.explicitMusic);

            let url = `./admin/admin_adduser.php`;

            // Add the user
            fetch(url, {
                method: 'POST',
                body: formData
            })
            .then(res => res.json()) // Get the data back from PHP file
            .then(data => {
                if (data == false) {
                    console.warn(data);
                    alert("There was a problem adding the user."); // TODO: Replace alert
                } else {
                    this.user = data;
                    alert("User added."); // TODO: Replace alert
                }
            })
            .catch(function (error) {
                console.log(error);
            });
        },
    }
}