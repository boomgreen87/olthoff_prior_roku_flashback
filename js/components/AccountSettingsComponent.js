export default {
    template: `
    <div class="container">
        <h1 class="hidden">Edit Profile Component</h1>

        <div class="jumbotron roku-jumbotron">
            <h1 class="form-header">Good Time Of Day Username!</h1>
            
            <div class="link-container">
                <h2 class="form-header">Account Settings</h2>

                <router-link class="text-link" to="/manageaccountusers">Manage Account Users</router-link>
                <router-link class="text-link" to="/changepassword">Change Account Password</router-link>
                <router-link class="text-link" to="/changeemail">Change Connected Email</router-link>

            </div>

            <div class="go-back-button">
                <h4>Go Back</h4>
            </div>
        </div>
    </div>
`}