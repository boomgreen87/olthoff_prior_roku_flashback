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

                <div class="extra-info">
                    <span class="media-year">{{currentMediaDetails.show_year}}</span>
                    <span class="media-genre">{{currentMediaDetails.show_genre}}</span>
                </div>
                
                <span class="media-description">{{currentMediaDetails.show_description}}</span>
            </div>
        </div>

        <div class="bottom-section">
        <div class="filter-con">
        <label class="decade-label">Decade:</label>
        <select v-model="yearFilter" v-on:change="filterByYear" name="decadeFilter" required>
            <option v-for="decade in decades" :value="decade.decadeValue">{{ decade.decade }}</option>
        </select>
</div>

            <div v-if="allRetrievedShows.length == 0">No Results</div>

            <div class="poster-section">
                <h2 class="media-title">Most Popular TV Shows</h2>
                <img onclick="window.scrollTo(0, 0);" class="poster"  v-for="item in allRetrievedShows" :src="'images/' + item.show_poster" alt="Show Poster" @click="loadNewShow(item)">
            </div>
        </div>
        
    </section>
    `,

    data: function () {
        return {
            currentMediaDetails: {},
            allRetrievedShows: [],

            decades: [
                {decadeValue: "1000", decade: "All"},
                {decadeValue: "50", decade: "1950s"},
                {decadeValue: "60", decade: "1960s"},
                {decadeValue: "70", decade: "1970s"},
                {decadeValue: "80", decade: "1980s"},
                {decadeValue: "90", decade: "1990s"},
            ],

            yearFilter: "1000",

            pageLoad: false
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

                        // Check for year filter
                        let filterYear = this.yearFilter;

                        // Removes any shows fom allRetrievedShows that don't fit the filter
                        i = 0;
                        while(i < this.allRetrievedShows.length){
                            if(filterYear !== "1000") {
                                if(this.allRetrievedShows[i].show_year_code !== filterYear){
                                    this.allRetrievedShows.splice(i, 1);
                                } else {
                                    i++;
                                }
                            } else {
                                break;
                            }
                        }

                        // Caches shows
                        localStorage.setItem("cachedShow", JSON.stringify(data));

                        // Sets current media on initial page load
                        if(this.allRetrievedShows.length !== 0 && this.pageLoad == false) {
                            this.currentMediaDetails = this.allRetrievedShows[0];
                            this.pageLoad = true;
                        }
                    })    
            }
        },

        // Reloads shows filtered by year
        filterByYear() {
            // Remove cached shows
            if(localStorage.getItem("cachedShow")) {
                localStorage.removeItem("cachedShow");
            }

            this.retrieveShowContent();
        },

        // Loads selected show
        loadNewShow(show) {
            if(this.allRetrievedShows.length !== 0) {
                this.currentMediaDetails = show;
            }
        }
    }
}