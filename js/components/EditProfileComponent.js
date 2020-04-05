export default {
    template: `
    <div class="container">
        <h1 class="hidden">Edit Profile Component</h1>

        <div class="jumbotron roku-jumbotron">
            <h1 class="form-header">Good Time Of Day Username!</h1>

            <div class="link-container">
                <h2 class="form-header">Edit Your Profile</h2>

                <router-link class="text-link" to="/changedisplayname">Change Display Name</router-link>

                <router-link class="text-link" to="/changedisplaypicture">Change Display Photo</router-link>

                <router-link class="text-link" to="/changebackground">Change Background</router-link>

            </div>

            <div class="go-back-button">
                <h4>Go Back</h4>
            </div>
        </div>
    </div>
`}