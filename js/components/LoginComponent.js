export default {
    name: "TheLoginComponent",

    template: `
        <div class="login-container">
            <div class="jumbotron roku-jumbotron">
                <h1 class="form-header">Welcome to Flashback!</h1>
                <p class="lead">Before revisiting your favourite movies, tv shows or music from yesteryear, please log in with a valid username and password.</p>
                <hr class="my-4">
                <form @submit.prevent="login" class="login-form">
                        
                            <label for="inlineFormInputName">Name</label>
                            <input v-model="input.username" type="text" id="inlineFormInputName" placeholder="Username" required>
                            <br>    

                            <label for="inlineFormPassword">Name</label>
                            <input v-model="input.password" type="password" id="inlineFormPassword" placeholder="Password" required>
                            <br>

                        <div class="go-button">
                            <button type="submit" class="button">Go!</button>
                        </div>
                </form> 
                <hr class="my-4">
            </div>
        </div>
     `,

    data() {
        return {
            input: {
                username: "",
                password: ""
            },

        }
    },

    methods: {
        login() {

            if (this.input.username != "" && this.input.password != "") {
                // Fetch the account from the DB
                // Generate the form data
                let formData = new FormData();

                formData.append("username", this.input.username);
                formData.append("password", this.input.password);

                let url = `./admin/admin_login.php`;

                fetch(url, {
                    method: 'POST',
                    body: formData
                })
                .then(res => res.json()) // Get the data back from PHP file
                .then(data => {
                    if (typeof data != "object") { // Means that we're not getting an account object back
                        console.warn(data);
                        alert("Username or password is incorrect. Please try again."); // TODO: Replace alert
                    } else {
                        // User logged in successfully
                        localStorage.setItem("cachedAccount", JSON.stringify(data)); // Cache account
                        this.$emit("authenticated", true, data); // Set authentication
                        this.$router.replace({ name: "welcome" });
                    }
                })
                .catch(function (error) {
                    console.log(error);
                });
            } else {
                console.log("A username and password must be present");
            }
        }
    }
}