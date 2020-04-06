export default {
    props: ['liveuser'],

    template: `
    <div class="col-xs-12 col-sm-6 col-md-4 mx-auto">
        <div class="" @click="navToUserHome()">
            <div class="">
                <img :src="'images/user/' + liveuser.icon + '.jpg'" class="rounded-circle img-fluid">
                <p>{{ liveuser.name }}</p>
            </div>
        </div>
    </div>`,

    created: function() {
        // Sets default icon if none are set
        if(this.liveuser.icon === null || this.liveuser.icon === 'null'){
            this.liveuser.icon = "temp_icon";
        }
    },

    methods: {
        navToUserHome() {
            // debugger;

            // Caches user
            localStorage.setItem("cachedUser", JSON.stringify(this.liveuser));

            // Send this user to its home page and pass the user object to the home page
            this.$router.push({ name: "userhome", params: { currentuser: this.liveuser } });
        }
    }

}