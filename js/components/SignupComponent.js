export default {
    template: `
    <div class="container">
        <div class="jumbotron roku-jumbotron">
            <h1 class="form-header">Create a New Account!</h1>
            <p class="lead">Create your own flashback account by filling out the form below.</p>
            <hr class="my-4">
            <form @submit.prevent="login">
                <div class="form-row align-items-center">
                
                    <div class="col-md-3 my-1">
                        <label class="sr-only" for="inlineFormInputName">Email</label>
                        <input v-model="input.email" type="email" class="form-control" id="signupEmail" placeholder="Email" required>
                    </div>

                    <div class="col-md-3 my-1">
                        <label class="sr-only" for="inlineFormInputName">First Name</label>
                        <input v-model="input.firstname" type="text" class="form-control" id="signupFirstName" placeholder="First Name" required>
                    </div>

                    <div class="col-md-3 my-1">
                        <label class="sr-only" for="inlineFormInputName">Last Name</label>
                        <input v-model="input.lastname" type="text" class="form-control" id="signupLastName" placeholder="Last Name" required>
                    </div>

                    <div class="col-md-3 my-1">
                        <label class="sr-only" for="inlineFormInputName">Country</label>
                        <input v-model="input.country" type="text" class="form-control" id="signupCountry" placeholder="Country" required>
                    </div>

                    <div class="col-md-3 my-1">
                        <label class="sr-only" for="inlineFormInputName">Username</label>
                        <input v-model="input.username" type="text" class="form-control" id="signupUsername" placeholder="Username" required>
                    </div>

                    <div class="col-md-3 my-1">
                        <label class="sr-only" for="inlineFormPassword">Password</label>
                        <input v-model="input.password" type="password" class="form-control" id="signupPassword" placeholder="Password" required>
                    </div>

                    <div class="col-auto my-1">
                        <button v-on:click.prevent="signup()" type="submit" class="btn btn-primary">Sign Up</button>
                    </div>
                </div>
            </form>            
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
                console.log(data)
            })
            .catch((error) => console.log(error))
        }
    }
}

    