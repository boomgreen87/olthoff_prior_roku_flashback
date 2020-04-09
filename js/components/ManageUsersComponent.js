export default {
    name: "TheManageUsersComponent",

    template: `
    <div class="manage-users-container">
        <h1 class="hidden">Manage Account Users Component</h1>

        <div class="jumbotron roku-jumbotron">
            <h1 class="form-header">Good Time Of Day Username!</h1>
            <hr class="my-4">

            <div class="manage-users-form">
                <div class="button">
                    <router-link to="/adduser">
                        <p class="button-links">Add Account User</p>
                    </router-link>
                </div>
                <div class="button">
                    <router-link to="/changepermissions">
                        <p class="button-links">Change Permissions</p>
                    </router-link>
                </div>
                <div class="button">
                    <router-link to="/deleteuser">
                        <p class="button-links">Delete Account User</p>
                    </router-link>
                </div>

                <hr class="my-4">
            <div class="button">
                <router-link to="/userhome">
                    <p class="button-links" >Back to App</p>
                </router-link>
            </div>
            </div>
            <hr class="my-4">
        </div>
    </div>
`}