<header>
    <div class="logo-icon-box">
        <router-link class="head-logo-link" to="/userhome">
            <img src="images/roku_logo.svg" alt="Flashback Logo" id="header-logo">
        </router-link>
        <div class="menu head-user-link"> 
            <div v-if="userAuthenticated" :class="{'active': isActive}" @click="showTopMenu = !showTopMenu, isActive = !isActive"><img class="user-icon" v-bind:class="{ pinkOutline : this.$root.child }" :src="'images/user/' + user.icon" :alt="user.icon"></div>
        </div>
    </div>

    <div id="menu-overlay" v-if="showTopMenu">
        
    <div class="drop-down">
        <router-link class="drop-down-box" @click.native="closeMenu"  to="/welcome">
            <a v-if="userAuthenticated" class="drop-down-link">Switch Users</a>
        </router-link>

        <router-link class="drop-down-box" @click.native="closeMenu"   to="/usersettings">
            <a v-if="userAuthenticated" class="drop-down-link">User Settings</a>
        </router-link>

        <router-link class="drop-down-box" @click.native="closeMenu"  to="/accountsettings">
            <a v-if="admin" class="drop-down-link">Account Settings</a>
        </router-link>

        <router-link class="drop-down-box" @click.native="closeMenu"  to="/manageusers">
            <a v-if="admin" class="drop-down-link">Manage Users</a>
        </router-link>

        <router-link class="drop-down-box" @click.native="closeMenu"  to="/">
            <a v-if="userAuthenticated" v-on:click="logout()" class="drop-down-link">Logout</a>
        </router-link>
    </div>
</div>

<div v-else> </div>
</header> 
