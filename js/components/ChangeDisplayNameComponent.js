export default {
    template: `
    <div class="container">
        <h1 class="hidden">Change Display Name Component</h1>

        <div class="jumbotron roku-jumbotron">
            <h1 class="form-header">Good Time Of Day Username!</h1>

            <div class="link-container">
                <h2 class="form-header">Change Your Display Name</h2>
            </div>

            <div class="form-row align-items-center">
                <div class="col-md-3 my-1">
                    <label class="sr-only">UserName</label>
                    <input placeholder="enter old username" required>
                </div> 

                <div class="col-md-3 my-1">
                    <label class="sr-only">NewUserName</label>
                    <input placeholder="enter new username" required>
                </div> 
            </div>

            <div class="go-back-button">
                <h4>Go Back</h4>
            </div>
        </div>
        <router-link class="text-link" to="/confirmmessage">Redirect to Confirm Message</router-link>
    </div>
`}