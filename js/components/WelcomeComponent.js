export default {
template: `
    <div class="container">
        <h1 class="hidden">Home Page Component</h1>

        <div class="jumbotron roku-jumbotron">
            <h1 class="form-header">Welcome to Flashback by Roku</h1>

            <hr class="my-4">

            <h2 class="lead">Who is watching?</h2>
            <div id="all-account-users">
                <div class="account-user">
                    <div class="user-avitar">
                    </div>
                    <p class="user-displayname">UserName 1</p>
                </div>

                <div class="account-user">
                    <div class="user-avitar">
                    </div>
                    <p class="user-displayname">UserName 2</p>
                </div>

                <div class="account-user">
                    <div class="user-avitar">
                    </div>
                    <p class="user-displayname">UserName 3</p>
                </div>

                <div class="account-user">
                    <div class="user-avitar">
                    </div>
                    <p class="user-displayname">UserName 4</p>
                </div>
            </div>

            <hr class="my-4">
    </div>

    <router-link class="footer-site-links" to="/movies">Skip To Movie Page</router-link>

`}

//  <div class="media-button">
// <router-link class="media-link" to="/movies">Go To Movies</router-link>
// </div>
// <div class="media-button">
//     <router-link class="media-link" to="/tv">Go To TV Shows</router-link>
// </div>
// <div class="media-button">
//     <router-link class="media-link" to="/music">Go To Music</router-link>
// </div>

// <router-link class="text-link" to="/editprofile">Edit Profile </router-link>

// <router-link class="text-link" to="/accountsettings">Account Settings </router-link>

// <router-link class="text-link" to="/manageaccountusers">Manage Account Users </router-link>

// <router-link class="text-link" to="/signout">Sign Out</router-link>
// </div>