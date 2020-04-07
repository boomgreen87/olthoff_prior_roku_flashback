export default {
    name: "TheMovieComponent",

    template: `
    <section class="mediaSection">
        <h1 class="hidden">Movie Component</h1>
        <div class="topSection">
            <div class="videoContainer">
                <div class="selectedVideo" v-html="currentMediaDetails.movie_link"></div>
            </div>

            <div class="textSection">
                <h4 class="media-name">{{currentMediaDetails.movie_name}}</h4>
                <span class="media-description">{{currentMediaDetails.movie_description}}</span>
                <span class="media-time">{{currentMediaDetails.movie_runtime}}</span>
                <span class="media-year">{{currentMediaDetails.movie_year}}</span>
                <span class="media-genre">{{currentMediaDetails.movie_genre}}</span>
            </div>
        </div>
         
        <div class="bottomSection">
            <div class="posterSection">
            <h2 class="mediaTitle">Most Popular Movies</h2>
                <img class="poster" v-for="item in allRetrievedMovies" :src="'images/' + item.movie_poster" alt="Movie Poster" @click="loadNewMovie(item)">
            </div>
        </div>
    </section>
    `,

    data: function () {
        return {
            currentMediaDetails: {},
            allRetrievedMovies: []
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
                        localStorage.setItem("cachedMovie", JSON.stringify(data));

                        this.allRetrievedMovies = data;
                        this.currentMediaDetails = data[0];
                    })    
            }
        },

        // Loads selected movie
        loadNewMovie(movie) {
            this.currentMediaDetails = movie;
        }
    }
}