export default {
    name: "TheManageUsersComponent",

    template: `
    <div class="manage-users-container">
        <h1 class="hidden">Manage Account Users Component</h1>

        <div class="back-button">
                <router-link tag="li" to="/userhome">
                    <p class="button-links" >Back to App</p>
                </router-link>
        </div>
            
        <div class="roku-jumbotron">
            <h1 class="form-header">Manage Account Users</h1>
            <hr class="my-4">

            <div class="manage-users-form">
                <div class="button">
                    <router-link tag="li" to="/adduser">
                        <p class="button-links">Add Account User</p>
                    </router-link>
                </div>
                <div class="button">
                    <router-link tag="li" to="/changepermissions">
                        <p class="button-links">Change Permissions</p>
                    </router-link>
                </div>
                <div class="button">
                    <router-link tag="li" to="/deleteuser">
                        <p class="button-links">Delete Account User</p>
                    </router-link>
                </div>
            </div>
            <hr class="my-4">
        </div>
    </div>
`}