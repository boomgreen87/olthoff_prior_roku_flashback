export default {
    template: `
    <div class="container">
        <h1 class="hidden">Confirmation Message Component</h1>

        <div class="jumbotron roku-jumbotron">
            <h1 class="form-header">Congrats Username!</h1>
            <h4 class="form-header">Your changes have been saved!</h4>

            <div class="link-container">
                <router-link class="text-link" to="/editprofile">Edit Profile</router-link>

                <router-link class="text-link" to="/accountsettings">Account Settings</router-link>

                <router-link class="text-link" to="/welcome">Go To App</router-link>
            </div>

            <div class="go-back-button">
                <h4>Go Back</h4>
            </div>
        </div>
    </div>
`}