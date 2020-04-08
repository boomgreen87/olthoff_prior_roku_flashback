export default {
    name: "TheUserComponent",

    props: ['liveuser'],

    template: `
        <div class="user-container" @click="navToUserHome()">
            <div class="user-info">
                <img :src="'images/user/' + liveuser.icon" class="user-icons">
                <p class="user-name" >{{ liveuser.name }}</p>
            </div>
        </div>
    `,

    created: function() {
        // Sets default icon if none are set
        if(this.liveuser.icon === null || this.liveuser.icon === 'null'){
            this.liveuser.icon = "temp_icon";
        }
    },

    methods: {
        navToUserHome() {
            // Sets admin if user is an admin
            if(this.liveuser.admin == true) {
                this.$emit("admin", true, this.liveuser);
            }

            // Caches user
            localStorage.setItem("cachedUser", JSON.stringify(this.liveuser));

            // Send this user to its home page and pass the user object to the home page
            this.$router.push({ name: "userhome", params: { currentuser: this.liveuser } });
        }
    }

}