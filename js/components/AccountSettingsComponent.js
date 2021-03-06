export default {
    name: "TheAccountSettingsComponent",
    
    template: `
    <div class="account-settings-container">
        <h1 class="hidden">Edit Profile Component</h1>

        <div class="back-button">
                <router-link tag="li" to="/userhome">
                    <p class="button-links" >Back to App</p>
                </router-link>
            </div>
        <div class="roku-jumbotron">
            <h1 class="form-header">Your Account Details</h1>
            <hr class="my-4">
            
            <form class="account-settings-form" @submit.prevent="editAccount">
                
                <input class="hidden" v-model="account.id" type="text" name="id" readonly>

                <label>Email: </label>
                <input v-model="account.email" type="email" name="email" required>

                <label>First Name: </label>
                <input v-model="account.firstname" type="text" name="fname" required>

                <label>Last Name: </label>
                <input v-model="account.lastname" type="text" name="lname" required>

                <label>Country: </label>
                <input v-model="account.country" type="text" name="country" required>

                <label>Password: </label>
                <input v-model="account.password" type="text" name="password" required>
                <br>
                <button type="submit" name="submit" class="button">Edit Account</button>
                </form>
                <hr class="my-4">
        </div>
    </div>
    `,

    created: function () {
		this.fetchAccount();
	},

	data() {
		return {
            account: {}
		}
    },

    methods: {
        // Fetches all the account info
		fetchAccount() {
            let accountID = JSON.parse(localStorage.getItem("cachedAccount")).id;
            let url = ("./admin/admin_getaccount.php?account=" + accountID);

			fetch(url)
			.then(res => res.json())
			.then(data => {
                if (data == false) {
                    console.warn(data);
                    swal("Oops!", "There was a problem accessing your account!", "error");                } else {
                    this.account = data;
                }
			})
			.catch((err) => console.error(err));
        },

        editAccount() {
            // Generate the form data
            let formData = new FormData();

            formData.append("id", this.account.id);
            formData.append("email", this.account.email);
            formData.append("firstname", this.account.firstname);
            formData.append("lastname", this.account.lastname);
            formData.append("country", this.account.country);
            formData.append("password", this.account.password);

            let url = ("./admin/admin_editaccount.php");

            // Submits edited info to database
			fetch(url, {
                method: 'POST',
                body: formData
            })
			.then(res => res.json())
			.then(data => {
                if(data == false) {
                    console.warn(data);
                    swal("Oops!", "There was a problem editing your account!", "error");    

                } else {

                    swal("Success!", "Your account has been edited!", "success");                
                }
			})
			.catch((err) => console.error(err));
        }
	}
}