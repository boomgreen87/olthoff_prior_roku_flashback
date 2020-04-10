<header>
    <div class="logo-icon-box">
        <router-link class="head-logo-link" to="/">
            <img src="images/roku_logo.svg" alt="Flashback Logo" id="header-logo">
        </router-link>
        <div class="menu head-user-link"> 
            <div v-if="authenticated" :class="{'active': isActive}" @click="showTopMenu = !showTopMenu, isActive = !isActive"><i class="fas fa-user-circle fa-2x user-icon"></i></div>
        </div>
    </div>

    <div id="menu-overlay" v-if="showTopMenu">
        
    <div class="drop-down">
        <router-link class="drop-down-box" @click.native="closeMenu"  to="/welcome">
            <a v-if="authenticated" class="drop-down-link">Switch Users</a>
        </router-link>

        <router-link class="drop-down-box" @click.native="closeMenu"   to="/usersettings">
            <a v-if="authenticated" class="drop-down-link">User Profile Settings</a>
        </router-link>

        <router-link class="drop-down-box" @click.native="closeMenu"  to="/accountsettings">
            <a v-if="authenticated" class="drop-down-link">Account Settings</a>
        </router-link>

        <router-link class="drop-down-box" @click.native="closeMenu"  to="/manageusers">
            <a v-if="authenticated" class="drop-down-link">Manage Users</a>
        </router-link>

        <router-link class="drop-down-box" @click.native="closeMenu"  to="/">
            <a v-if="authenticated" v-on:click="logout()" class="drop-down-link">Logout</a>
        </router-link>
    </div>
</div>

<div v-else> </div>
</header> 
