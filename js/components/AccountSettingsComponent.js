export default {
    template: `
    <div class="container">
        <h1 class="hidden">Edit Profile Component</h1>

        <div class="jumbotron roku-jumbotron">
            <h1 class="form-header">Good Time Of Day Username!</h1>
            
            <form class="account-settings-form" @submit.prevent="editAccount">
                <h2 class="form-header">Account Settings</h2>

                <label>Email: </label><br>
                <input v-model="account.email" type="email" name="email" required><br><br>

                <label>First Name: </label><br>
                <input v-model="account.firstname" type="text" name="fname" required><br><br>

                <label>Last Name: </label><br>
                <input v-model="account.lastname" type="text" name="lname" required><br><br>

                <label>Country: </label><br>
                <input v-model="account.country" type="text" name="country" required><br><br>

                <label>Password: </label><br>
                <input v-model="account.password" type="text" name="password" required><br><br>

                <button type="submit" name="submit">Edit Account</button>
            </form>

            <div class="go-back-button">
                <h4>Go Back</h4>
            </div>
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
                if (typeof data != "object") {
                    console.warn(data);
                    alert("There was a problem accessing your account."); // TODO: Replace alert
                } else {
                    this.account = data;
                }
			})
			.catch((err) => console.error(err));
        },

        editAccount() {
            let url = ("./admin/admin_editaccount.php?account=" + accountID);

			fetch(url)
			.then(res => res.json())
			.then(data => {
                if(data == false) {
                    console.warn(data);
                    alert("There was a problem editing your account."); // TODO: Replace alert
                } else {
                    alert("Account successfully edited."); // TODO: Replace alert
                }
			})
			.catch((err) => console.error(err));
        }
	}
}