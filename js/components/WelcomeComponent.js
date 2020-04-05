export default {
template: `
    <div class="container">
        <h1 class="hidden">Home Page Component</h1>

        <div class="jumbotron roku-jumbotron">
            <h1 class="form-header">Good Time Of Day Username!</h1>

            <p class="lead">Welcome back to Flashback by Roku, what would you like to do today?</p>
            <hr class="my-4">

            <div class="media-button">
                <router-link class="media-link" to="/movies">Go To Movies</router-link>
            </div>
            <div class="media-button">
                <router-link class="media-link" to="/tv">Go To TV Shows</router-link>
            </div>
            <div class="media-button">
                <router-link class="media-link" to="/music">Go To Music</router-link>
            </div>
            
            <router-link class="text-link" to="/editprofile">Edit Profile </router-link>

            <router-link class="text-link" to="/accountsettings">Account Settings </router-link>
        
            <router-link class="text-link" to="/manageusers">Manage Users </router-link>

            <router-link class="text-link" to="/signout">Sign Out</router-link>
        </div>
    </div>
`}