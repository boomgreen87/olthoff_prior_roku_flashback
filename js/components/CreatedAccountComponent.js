export default {
    template: `
    <div class="container">
        <h1 class="hidden">Created Account Message Component</h1>

        <div class="jumbotron roku-jumbotron">
            <h1 class="form-header">Good News Username!</h1>
            <h4 class="form-header">Your new account was created!</h4>

            <div class="link-container">
                <h2 class="form-header">What's Next?</h2>

                <router-link class="text-link" to="/changedisplayname">Change Display Name</router-link>

                <router-link class="text-link" to="/changedisplaypicture">Change Display Photo</router-link>

                <router-link class="text-link" to="/changebackground">Change Background</router-link>

                <router-link class="text-link" to="/welcome">Go To App</router-link>
            </div>

            <div class="go-back-button">
                <h4>Go Back</h4>
            </div>
        </div>
    </div>
`}