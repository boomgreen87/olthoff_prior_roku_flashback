export default {
    name: "TheTvComponent",

    template: `
    <section class="media-container">
        <h1 class="hidden">TV Component</h1>
        <div class="top-section">
            <div class="video-container">
                <div class="selected-video" v-html="currentMediaDetails.show_link"></div>
            </div>

            <div class="text-section">
                <h4 class="media-name">{{currentMediaDetails.show_name}}</h4>
                <span class="media-description">{{currentMediaDetails.show_description}}</span>
                <span class="media-year">{{currentMediaDetails.show_year}}</span>
                <span class="media-genre">{{currentMediaDetails.show_genre}}</span>
            </div>
        </div>

        <div class="bottom-section">
            <div class="poster-section">
                <h2 class="media-title">Most Popular TV Shows</h2>
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

                        // Check for content restrictions
                        let restriction = JSON.parse(localStorage.getItem("cachedUser")).vidrating;
                        
                        // Removes any shows fom allRetrievedShows that don't fit the restrictions
                        let i = 0;
                        while(i < this.allRetrievedShows.length){
                            if(this.allRetrievedShows[i].show_age_rating_code > restriction){
                                this.allRetrievedShows.splice(i, 1);
                            } else {
                                i++;
                            }
                        }

                        // Caches shows
                        localStorage.setItem("cachedShow", JSON.stringify(data));

                        // Sets current media
                        this.currentMediaDetails = this.allRetrievedShows[0];
                    })    
            }
        },

        // Loads selected show
        loadNewShow(show) {
            this.currentMediaDetails = show;
        }
    }
}