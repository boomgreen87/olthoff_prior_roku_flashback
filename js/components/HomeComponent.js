export default {
    template: `
    <div class="home-container">
        <h1 class="hidden">Home Page Component</h1>
        <div class="jumbotron roku-jumbotron">
            <h1 class="form-header">Welcome to Flashback!</h1>

            <p class="lead">Flashback by Roku is a curated list of the best media from the 1970's and 80's. Re-watch your old favourites or discover something new to you! Flashback has something for everybody!</p>

            <hr class="my-4">

            <div class="home-button">
                <router-link class="home-button-links" to="/login">
                    Log In to Your Account
                </router-link>
            </div>

            <div class="home-button">
                <router-link class="home-button-links" to="/signup">
                    Create a New Account
                </router-link>
            </div>

            <hr class="my-4">
            
        </div>
    </div>
    `}