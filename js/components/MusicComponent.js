export default {
    name: "TheMusicComponent",

    template: `
    <section class="mediaSection">
        <div class="topSection">
            <div class="videoContainer">
                <img class="selectedAlbum" :src="'images/' + currentMediaDetails.song_cover_art" alt="Album Cover">
            
                <audio controls :src="'audio/' + currentMediaDetails.song_file" class="audioPlayer"></audio>
            </div>

            <div class="textSection">
                <h4 class="media-name">{{currentMediaDetails.song_name}}</h4>
                <span class="media-year">{{currentMediaDetails.song_year}}</span>
                <span class="media-genre">{{currentMediaDetails.song_genre}}</span>
            </div>
        </div>
            <div class="bottomSection">
                <div class="posterSection">
                    <img class="poster" v-for="item in allRetrievedSongs" :src="'images/' + item.song_cover_art" alt="Album Cover" @click="loadNewSong(item)">
                </div>
            </div>
        </div>
    </section>
    `,

    data: function () {
        return {
            currentMediaDetails: {},
            allRetrievedSongs: []
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
                        this.currentMediaDetails = data[0];
                    })    
            }
        },

        // Loads selected song
        loadNewSong(song) {
            console.log (song);
            this.currentMediaDetails = song;
        }
    }
}