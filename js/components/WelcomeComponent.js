export default {
template: `
    <div class="container">
        <h1 class="hidden">Home Page Component</h1>

        <div class="jumbotron roku-jumbotron">
            <h1 class="form-header">Good Time Of Day Username!</h1>

            <p class="lead">Welcome back to Flashback by Roku, what would you like to do today?</p>
            <hr class="my-4">

            <div class="welcome-media-button">
                <router-link class="welcome-media-links" to="/movies">Go To Movies</router-link>
            </div>
            <div class="welcome-media-button">
                <router-link class="welcome-media-links" to="/tv">Go To TV Shows</router-link>
            </div>
            <div class="welcome-media-button">
                <router-link class="welcome-media-links" to="/music">Go To Music</router-link>
            </div>
            
            <router-link class="welcome-media-links" to="/editprofile">Edit Profile </router-link>

            <router-link class="welcome-media-links" to="/accountsettings">Account Settings </router-link>
        
            <router-link class="welcome-media-links" to="/manageusers">Manage Users </router-link>

            <router-link class="welcome-media-links" to="/signout">Sign Out</router-link>




        </div>
    </div>
`}