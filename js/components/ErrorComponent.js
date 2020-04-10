export default {
    name: "TheErrorComponent",

    template: `
    <div class="adduser-container">
        <h1 class="hidden">Error Page</h1>
        <div class="back-button">
                <router-link to="/userhome">
                    <p class="button-links" >Back to App</p>
                </router-link>
            </div>
        <div class="roku-jumbotron">
        <h2 class="form-head">Oops!</h2>
        <hr class="my-4">
            <p>Unfortunately, we have encountered an error. Please hang up and try again.</p>        
            <hr class="my-4">
        </div> 
    </div>
    `
}