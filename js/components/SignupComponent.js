export default {
    template: `
    <div class="container">
        <div class="jumbotron roku-jumbotron">
            <h1 class="display-4" id="form-header">Create a New Account!
            </h1>
            <p class="lead">Create your own flashback account by filling out the form below.</p>
            <hr class="my-4">
            <form @submit.prevent="login">
                <div class="form-row align-items-center">
                    <div class="col-md-3 my-1">
                        <label class="sr-only" for="inlineFormInputName">FirstName</label>
                        <input v-model="input.firstname" type="text" class="form-control" id="inlineFormInputName" placeholder="First Name" required>
                    </div>

                    <div class="col-md-3 my-1">
                        <label class="sr-only" for="inlineFormInputName">LastName</label>
                        <input v-model="input.lastname" type="text" class="form-control" id="inlineFormInputName" placeholder="Last Name" required>
                    </div>

                    <div class="col-md-3 my-1">
                        <label class="sr-only" for="inlineFormInputName">Birthday</label>
                        <input v-model="input.birthday" type="text" class="form-control" id="inlineFormInputName" placeholder="Birthday" required>
                    </div>

                    <div class="col-md-3 my-1">
                        <label class="sr-only" for="inlineFormInputName">Country</label>
                        <input v-model="input.country" type="text" class="form-control" id="inlineFormInputName" placeholder="Country" required>
                    </div>

                    <div class="col-md-3 my-1">
                        <label class="sr-only" for="inlineFormInputName">Email</label>
                        <input v-model="input.email" type="email" class="form-control" id="inlineFormInputName" placeholder="Email" required>
                    </div>

                    <div class="col-md-3 my-1">
                        <label class="sr-only" for="inlineFormInputName">Name</label>
                        <input v-model="input.username" type="text" class="form-control" id="inlineFormInputName" placeholder="Username" required>
                    </div>

                    <div class="col-md-3 my-1">
                        <label class="sr-only" for="inlineFormPassword">Name</label>
                        <input v-model="input.password" type="password" class="form-control" id="inlineFormPassword" placeholder="Password" required>
                    </div>

                    <div class="col-auto my-1">
                        <button type="submit" class="btn btn-primary">Go!</button>
                    </div>
                </div>
            </form>            
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
            //console.log(this.$parent.mockAccount.username);
            if(this.input.username != "" && this.input.password != "") {
                let formData = new FormData();

                formData.append("username", this.input.username);
                formData.append("password", this.input.password);

                let url = "./includes/index.php?user=true";

                fetch(url, {
                    method: "POST",
                    body: formData
                })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    // We get a user back, let's set authentication
                    this.$emit("authenticated", true, data[0]);

                    // Reroute to the users component so we can see all of them
                    
                })
                .catch((error) => console.log(error))
            } else {
                console.log("A username and password should be entered")
            }
        }
    }
}

    