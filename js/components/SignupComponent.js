export default {
    name: "TheSignupComponent",

    template: `
    <div class="signup-container">
        <div class="jumbotron roku-jumbotron">
            <h1 class="form-header">Create a New Account!</h1>
            <p class="lead">Create your own flashback account by filling out the form below.</p>
            <hr class="my-4">
            <form @submit.prevent="login" class="login-form">
                
                        <label for="inlineFormInputName">Email</label>
                        <input v-model="input.email" type="email"  id="signupEmail" placeholder="Email" required>
                        <br>  

                        <label for="inlineFormInputName">First Name</label>
                        <input v-model="input.firstname" type="text"id="signupFirstName" placeholder="First Name" required>
                        <br>  

                        <label for="inlineFormInputName">Last Name</label>
                        <input v-model="input.lastname" type="text"  id="signupLastName" placeholder="Last Name" required>
                        <br>  

                        <label for="inlineFormInputName">Country</label>
                        <input v-model="input.country" type="text"  id="signupCountry" placeholder="Country" required>
                        <br>  

                        <label for="inlineFormInputName">Username</label>
                        <input v-model="input.username" type="text"  id="signupUsername" placeholder="Username" required>
                        <br>  
                        <label for="inlineFormPassword">Password</label>
                        <input v-model="input.password" type="password"  id="signupPassword" placeholder="Password" required>
                       
                        <hr class="my-4"> 
                    <div class="go-button">
                        <button type="submit" class="button">Sign Up</button>
                    </div>
            </form>         
            <hr class="my-4">   
        </div>
    </div>


    `,

    // Sets empty values to hold submitted input
    data() {
        return {
            input: {
                email: "",
                firstname: "",
                lastname: "",
                country: "",
                username: "",
                password: ""
            },

        }
    },

    methods: {
        signup() {
            let formData = new FormData();

            // Sets the values equal to submitted input
            formData.append("email", this.input.email);
            formData.append("firstname", this.input.firstname);
            formData.append("lastname", this.input.lastname);
            formData.append("country", this.input.country);
            formData.append("username", this.input.username);
            formData.append("password", this.input.password);

            // Changes URL to continue signup process
            let url = `./admin/admin_signup.php`;

            // Fetches result of signup
            fetch(url, {
                method: "POST",
                body: formData
            })
            .then(res => res.json())
            .then(data => {
                if (typeof data != "object") { // Means that we're not getting an account object back
                    console.warn(data);
                    alert("There was a problem creating your account. Please try again."); // TODO: Replace alert
                } else {
                    // User logged in successfully
                    localStorage.setItem("cachedAccount", JSON.stringify(data)); // Cache account
                    this.$emit("authenticated", true, data); // Set authentication
                    this.$router.replace({ name: "welcome" });
                }
            })
            .catch((error) => console.log(error))
        }
    }
}

    