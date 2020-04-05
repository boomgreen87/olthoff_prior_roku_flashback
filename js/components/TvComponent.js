export default {
    name: "TheTvComponent",

    template: `
    <section>
        <div class="row">
            <div class="col-12 order-2 order-md-1 col-md-3 media-container">
                <h4 class="media-name">{{currentMediaDetails.show_name}}</h4>
                <span class="media-description">{{currentMediaDetails.show_description}}</span>
                <span class="media-year">{{currentMediaDetails.show_year}}</span>
                <span class="media-genre">{{currentMediaDetails.show_genre}}</span>
            </div>

            <div class="col-12 order-1 order-md-2 col-md-9 media-container">
                <div class="youtubeVid" v-html="currentMediaDetails.show_link"></div>
            </div>
        </div>

        <div class="row">
            <div class="col-12 col-sm-9">
                <div class="thumb-wrapper clearfix">
                    <img v-for="item in allRetrievedShows" :src="'images/' + item.show_poster" alt="Show Poster" @click="loadNewShow(item)" class="img-thumbnail rounded float-left media-thumb">
                </div>
            </div>
        </div>
    </section>
    `,

    data: function () {
        return {
            currentMediaDetails: {},
            allRetrievedShows: []
        }
    },

    created: function() {
        this.retrieveShowContent();
    },

    methods: {
        retrieveShowContent() {
            
            // Fetches all of the show content
             if(localStorage.getItem("cachedShow")) {
                this.allRetrievedShows = JSON.parse(localStorage.getItem("cachedShow"));

                this.currentMediaDetails = this.allRetrievedShows[0];
            } else {
                let url = `./admin/index.php?media=shows`;

                fetch(url)
                    .then(res => res.json())
                    .then(data => {
                        localStorage.setItem("cachedShow", JSON.stringify(data));

                        this.allRetrievedShows = data;
                        this.currentMediaDetails = data[0];
                    })    
            }
        },

        // Loads selected show
        loadNewShow(show) {
            this.currentMediaDetails = show;
        }
    }
}