export default {
    name: "TheMusicComponent",

    template: `
    <section class="media-container">
        <h1 class="hidden">Music Component</h1>
        <div class="top-section">
            <div class="music-container">
                <img class="selected-music" :src="'images/' + currentMediaDetails.song_cover_art" alt="Album Cover">
            
                <audio controls :src="'audio/' + currentMediaDetails.song_file" class="audio-player"></audio>
            </div>

            <div class="text-section music-text">
                <h4 class="media-name">{{currentMediaDetails.song_name}}</h4>
                <span class="media-year">{{currentMediaDetails.song_year}}</span>
                <span class="media-genre">{{currentMediaDetails.song_genre}}</span>

                <div v-if="currentMediaDetails.song_id == '1'"></div>
                <div v-if="currentMediaDetails.song_id == '2'"></div>
                <div v-if="currentMediaDetails.song_id == '3'"></div>
                <div v-if="currentMediaDetails.song_id == '4'"></div>
                <div v-if="currentMediaDetails.song_id == '5'"></div>
                <div v-if="currentMediaDetails.song_id == '11'"></div>
                <div v-if="currentMediaDetails.song_id == '12'"></div>
                <div v-if="currentMediaDetails.song_id == '13'"></div>
                <div v-if="currentMediaDetails.song_id == '14'"></div>
                <div v-if="currentMediaDetails.song_id == '15'"></div>
            </div>
        </div>

        <div class="bottom-section">
            <label class="decade-label">Sort By Decade:</label>
            <select v-model="yearFilter" v-on:change="filterByYear" name="decadeFilter" required>
                <option v-for="decade in decades" :value="decade.decadeValue">{{ decade.decade }}</option>
            </select>

            <div v-if="allRetrievedSongs.length == 0">No Results</div>

            <div class="poster-section">
            <h2 class="media-title">Most Popular Music</h2>
                <img onclick="window.scrollTo(0, 0);" class="poster" v-for="item in allRetrievedSongs" :src="'images/' + item.song_cover_art" alt="Album Cover" @click="loadNewSong(item)">
            </div>
        </div>
        </div>
    </section>
    `,

    data: function () {
        return {
            currentMediaDetails: {},
            allRetrievedSongs: [],

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
        this.retrieveSongContent();
    },

    methods: {
        retrieveSongContent() {
            
            // Fetches all of the song content
             if(localStorage.getItem("cachedSong")) {
                this.allRetrievedSongs = JSON.parse(localStorage.getItem("cachedSong"));

                this.currentMediaDetails = this.allRetrievedSongs[0];
            } else {
                let url = `./admin/index.php?media=songs`;

                fetch(url)
                    .then(res => res.json())
                    .then(data => {
                        localStorage.setItem("cachedSong", JSON.stringify(data));

                        this.allRetrievedSongs = data;
                        
                        // Check for content restrictions
                        let restriction = JSON.parse(localStorage.getItem("cachedUser")).explicitmusic;
                        
                        // Removes any songs fom allRetrievedShows that don't fit the restrictions
                        let i = 0;
                        while(i < this.allRetrievedSongs.length){
                            if(this.allRetrievedSongs[i].song_explicit > restriction){
                                this.allRetrievedSongs.splice(i, 1);
                            } else {
                                i++;
                            }
                        }

                        // Check for year filter
                        let filterYear = this.yearFilter;

                        // Removes any songs fom allRetrievedSongs that don't fit the filter
                        i = 0;
                        while(i < this.allRetrievedSongs.length){
                            if(filterYear !== "1000") {
                                if(this.allRetrievedSongs[i].song_year_code !== filterYear){
                                    this.allRetrievedSongs.splice(i, 1);
                                } else {
                                    i++;
                                }
                            } else {
                                break;
                            }
                        }

                        // Caches shows
                        localStorage.setItem("cachedSong", JSON.stringify(data));

                        // Sets current media on initial page load
                        if(this.allRetrievedSongs.length !== 0 && this.pageLoad == false) {
                            this.currentMediaDetails = this.allRetrievedSongs[0];
                            this.pageLoad = true;
                        }
                    })    
            }
        },

        // Reloads songs filtered by year
        filterByYear() {
            // Remove cached songs
            if(localStorage.getItem("cachedSong")) {
                localStorage.removeItem("cachedSong");
            }

            this.retrieveSongContent();
        },

        // Loads selected song
        loadNewSong(song) {
            if(this.allRetrievedSongs.length !== 0) {
                this.currentMediaDetails = song;
            }
        }
    }
}