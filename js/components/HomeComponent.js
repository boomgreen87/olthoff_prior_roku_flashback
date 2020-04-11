export default {
    name: "TheHomeComponent",

    template: `
    <div class="home-container">
        <h1 class="hidden">Home Page Component</h1>
        <div class="roku-jumbotron">
            <h1 class="form-header">Welcome to Flashback!</h1>

            <p class="lead">Flashback by Roku is a curated list of the best movies, shows, and music from the 50's to the 90's. Satisfy your nostalgia by re-visiting old favourites or discover something new to you! Flashback has something for everybody!</p>

            <hr class="my-4">

            <div class="button">
                <router-link tag="li" to="/login">
                    <p class="button-links" > Log In to Your Account</p>
                </router-link>
            </div>

            <div class="button">
                <router-link tag="li" to="/signup">
                    <p class="button-links" >Create a New Account</p>
                </router-link>
            </div>
            
            

            <hr class="my-4">
            
        </div>
    </div>
    `}