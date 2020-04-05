export default {
    name: "TheMovieComponent",

    template: `
    <section>
        <div class="row">
            <div class="col-12 order-2 order-md-1 col-md-3 media-container">
                <h4 class="media-name">{{currentMediaDetails.movie_name}}</h4>
                <span class="media-description">{{currentMediaDetails.movie_description}}</span>
                <span class="media-time">{{currentMediaDetails.movie_runtime}}</span>
                <span class="media-year">{{currentMediaDetails.movie_year}}</span>
                <span class="media-genre">{{currentMediaDetails.movie_genre}}</span>
            </div>

            <div class="col-12 order-1 order-md-2 col-md-9 media-container">
                <div class="youtubeVid" v-html="currentMediaDetails.movie_link"></div>
            </div>
        </div>

        <div class="row">
            <div class="col-12 col-sm-9">
                <div class="thumb-wrapper clearfix">
                    <img v-for="item in allRetrievedMovies" :src="'images/' + item.movie_poster" alt="Movie Poster" @click="loadNewMovie(item)" class="img-thumbnail rounded float-left media-thumb">
                </div>
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