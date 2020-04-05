export default {
    template: `
    <div class="container">
        <h1 class="hidden">Home Page Component</h1>
        <div class="jumbotron roku-jumbotron">
            <h1 class="form-header">Welcome to Flashback!</h1>
            <p class="lead">Flashback by Roku is a curated list of the best media from the 1970's and 80's. Re-watch your old favourites or discover something new to you! Flashback has something for everybody!</p>
            <hr class="my-4">

            <div class="home-button">
                <router-link class="home-button-links" to="/login">Sign In To Account</router-link>
            </div>

            <div class="home-button">
                <router-link class="home-button-links" to="/signup">Create A New Account</router-link>
            </div>
        </div>
    </div>
    `}