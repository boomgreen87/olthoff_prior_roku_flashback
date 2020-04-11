export default {
    name: "TheMovieComponent",

    template: `
    <section class="media-container">
        <h1 class="hidden">Movie Component</h1>
        <div class="top-section" v-bind:class="{ pinkBackground : this.$root.child }">
            <div class="video-container">
                <div class="selected-video" v-html="currentMediaDetails.movie_link"></div>
            </div>

            <div class="text-section">
                <h4 class="media-name">{{currentMediaDetails.movie_name}}</h4>

                <div class="extra-info">
                    <span class="media-time">{{currentMediaDetails.movie_runtime}}</span>
                    <span class="media-year">{{currentMediaDetails.movie_year}}</span>
                    <span class="media-genre">{{currentMediaDetails.movie_genre}}</span>
                </div>

                <span class="media-description">{{currentMediaDetails.movie_description}}</span>

                <div class="share-btn">
                    <a target="_blank" :href="'https://www.facebook.com/sharer/sharer.php?u=' + currentMediaDetails.movie_youtube + ';src=sdkpreparse'" class="fb-xfbml-parse-ignore"> <i class="fab fa-facebook-square fb-icon"></i>Share</a>
                </div>
            </div>
        </div>
         
        <div class="bottom-section" v-bind:class="{ pinkBackground : this.$root.child }">
            <label class="decade-label">Sort By Decade:</label>
            <select v-model="yearFilter" v-on:change="filterByYear" name="decadeFilter" required>
                <option v-for="decade in decades" :value="decade.decadeValue">{{ decade.decade }}</option>
            </select>

            <div v-if="allRetrievedMovies.length == 0">No Results</div>

            <div class="poster-section">
                <h2 class="media-title">Most Popular Movies</h2>
                <img  onclick="window.scrollTo(0, 0);" class="poster" v-for="item in allRetrievedMovies" :src="'images/' + item.movie_poster" alt="Movie Poster" @click="loadNewMovie(item)">
            </div>
        </div>
    </section>
    `,

    data: function () {
        return {
            currentMediaDetails: {},
            allRetrievedMovies: [],

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
        this.retrieveMovieContent();
    },

    methods: {
        retrieveMovieContent() {
            
            // Fetches all of the movie content
             if(localStorage.getItem("cachedMovie")) {
                this.allRetrievedMovies = JSON.parse(localStorage.getItem("cachedMovie"));

                this.currentMediaDetails = this.allRetrievedMovies[0];
            } else {
                let url = `./admin/index.php?media=movies`;

                fetch(url)
                    .then(res => res.json())
                    .then(data => {
                        this.allRetrievedMovies = data;

                        // Check for content restrictions
                        let restriction = JSON.parse(localStorage.getItem("cachedUser")).vidrating;
                        
                        // Removes any movies fom allRetrievedMovies that don't fit the restrictions
                        let i = 0;
                        while(i < this.allRetrievedMovies.length){
                            if(this.allRetrievedMovies[i].movie_age_rating_code > restriction){
                                this.allRetrievedMovies.splice(i, 1);
                            } else {
                                i++;
                            }
                        }

                        // Check for year filter
                        let filterYear = this.yearFilter;

                        // Removes any movies fom allRetrievedMovies that don't fit the filter
                        i = 0;
                        while(i < this.allRetrievedMovies.length){
                            if(filterYear !== "1000") {
                                if(this.allRetrievedMovies[i].movie_year_code !== filterYear){
                                    this.allRetrievedMovies.splice(i, 1);
                                } else {
                                    i++;
                                }
                            } else {
                                break;
                            }
                        }

                        // Caches movies
                        localStorage.setItem("cachedMovie", JSON.stringify(data));

                        // Sets current media on initial page load
                        if(this.allRetrievedMovies.length !== 0 && this.pageLoad == false) {
                            this.currentMediaDetails = this.allRetrievedMovies[0];
                            this.pageLoad = true;
                        }
                    })    
            }
        },

        // Reloads movies filtered by year
        filterByYear() {
            // Remove cached movies
            if(localStorage.getItem("cachedMovie")) {
                localStorage.removeItem("cachedMovie");
            }

            this.retrieveMovieContent();
        },

        // Loads selected movie
        loadNewMovie(movie) {
            if(this.allRetrievedMovies.length !== 0) {
                this.currentMediaDetails = movie;
            }
        }
    }
}