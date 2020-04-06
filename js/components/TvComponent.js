export default {
    name: "TheTvComponent",

    template: `
    <section class="mediaSection">
        <div class="topSection">
            <div class="videoContainer">
                <div class="selectedVideo" v-html="currentMediaDetails.show_link"></div>
            </div>

            <div class="textSection">
                <h4 class="media-name">{{currentMediaDetails.show_name}}</h4>
                <span class="media-description">{{currentMediaDetails.show_description}}</span>
                <span class="media-year">{{currentMediaDetails.show_year}}</span>
                <span class="media-genre">{{currentMediaDetails.show_genre}}</span>
            </div>
        </div>

        <div class="bottomSection">
            <div class="posterSection">
                <img class="poster" v-for="item in allRetrievedShows" :src="'images/' + item.show_poster" alt="Show Poster" @click="loadNewShow(item)">
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