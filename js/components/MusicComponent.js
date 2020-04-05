export default {
    template: `
    <div class="container">
        <h1 class="hidden">Music Page Component</h1>
        
        <div class="gallery">
            <h3 class="gallery-title">Most Popular Artists</h3>

            <div class="gallery-main">
                <h3 class="hidden">Main Gallery  - Promos & Favourites</h3>

                <div class="large">
                    <h3 class="hidden">Large Music</h3>
                </div>
                <div class="large-desc">
                        <h3 class="hidden">Music Description</h3>
                        <p>Music descriptions go here</p>
                    </div>
            </div>

            <div class="app-nav">
                    <router-link class="media-link" to="/movies">Movies</router-link>
                
                    <router-link class="media-link" to="/tv">TV Shows</router-link>
                
                    <router-link class="media-link" to="/music">Music</router-link>
            </div>

            <div class="gallery-sub">
                <h3 class="gallery-sub-title">Even More Music</h3>

                <div class="genre" id="music-genre-1">
                    <h4 class="genre-title">Rock & Roll</h4>
                    <div class="mini">
                        <h3 class="hidden">Small Music</h3>
                        <div class="small-desc">
                            <h3 class="hidden">Music Description</h3>
                        </div>
                    </div>

                    <div class="mini">
                        <h3 class="hidden">Small Music</h3>
                        <div class="small-desc">
                            <h3 class="hidden">Music Description</h3>
                        </div>
                    </div>

                    <div class="mini">
                        <h3 class="hidden">Small Music</h3>
                        <div class="small-desc">
                            <h3 class="hidden">Music Description</h3>
                        </div>
                    </div>

                    <div class="mini">
                        <h3 class="hidden">Small Music</h3>
                        <div class="small-desc">
                            <h3 class="hidden">Music Description</h3>
                        </div>
                    </div>
                </div>

                <div class="genre" id="music-genre-2">
                    <h4 class="genre-title">Hip Hop</h4>
                    <div class="mini">
                        <h3 class="hidden">Small Music</h3>
                        <div class="small-desc">
                            <h3 class="hidden">Music Description</h3>
                        </div>
                    </div>

                    <div class="mini">
                        <h3 class="hidden">Small Music</h3>
                        <div class="small-desc">
                            <h3 class="hidden">Music Description</h3>
                        </div>
                    </div>

                    <div class="mini">
                        <h3 class="hidden">Small Music</h3>
                        <div class="small-desc">
                            <h3 class="hidden">Music Description</h3>
                        </div>
                    </div>

                    <div class="mini">
                        <h3 class="hidden">Small Music</h3>
                        <div class="small-desc">
                            <h3 class="hidden">Music Description</h3>
                        </div>
                    </div>
                </div>

                <div class="genre" id="music-genre-3">
                    <h4 class="genre-title">Jazz</h4>
                    <div class="mini">
                        <h3 class="hidden">Small Music</h3>
                        <div class="small-desc">
                            <h3 class="hidden">Music Description</h3>
                        </div>
                    </div>

                    <div class="mini">
                        <h3 class="hidden">Small Music</h3>
                        <div class="small-desc">
                            <h3 class="hidden">Music Description</h3>
                        </div>
                    </div>

                    <div class="mini">
                        <h3 class="hidden">Small Music</h3>
                        <div class="small-desc">
                            <h3 class="hidden">Music Description</h3>
                        </div>
                    </div>

                    <div class="mini">
                        <h3 class="hidden">Small Music</h3>
                        <div class="small-desc">
                            <h3 class="hidden">Music Description</h3>
                        </div>
                    </div>
                </div>

                <div class="genre" id="music-genre-4">
                    <h4 class="genre-title">Country</h4>
                    <div class="mini">
                        <h3 class="hidden">Small Music</h3>
                        <div class="small-desc">
                            <h3 class="hidden">Music Description</h3>
                        </div>
                    </div>

                    <div class="mini">
                        <h3 class="hidden">Small Music</h3>
                        <div class="small-desc">
                            <h3 class="hidden">Music Description</h3>
                        </div>
                    </div>

                    <div class="mini">
                        <h3 class="hidden">Small Music</h3>
                        <div class="small-desc">
                            <h3 class="hidden">music Description</h3>
                        </div>
                    </div>

                    <div class="mini">
                        <h3 class="hidden">Small Music</h3>
                        <div class="small-desc">
                            <h3 class="hidden">Music Description</h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
`}