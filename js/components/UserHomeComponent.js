import MovieComponent from "./MovieComponent.js";
import TvComponent from "./TvComponent.js";
import MusicComponent from "./MusicComponent.js";

export default {
    name: "TheUserHomeComponent",

    props: ['currentuser'],

    template: `
    <div class="userhome-container">
        <!-- show media icons here -->
        <div class="nav-con">
            <div class="media-nav">
                <div class="icon-con" v-for="media in mediaTypes" :data-type="media.description" @click="switchMedia(media.component)">
                    <img v-bind:src="[media.iconSrc]" class="media-icon-link" v-bind:alt="[media.description]" v-bind:id="[media.iconId]">
                </div>
            </div>
        </div>
        <component :is="this.activeComponent"></component>
    </div>
    `,

    data: function(){
        return {
            activeComponent: MovieComponent,

            mediaTypes: [
                { iconSrc: "./images/movieIcon.png", description: "Movies", iconId: "movie-icon", component: MovieComponent },
                { iconSrc: "./images/tvIcon.png", description: "Television", iconId: "tv-icon", component: TvComponent },
                { iconSrc: "./images/musicIcon.png", description: "Music", iconId: "music-icon",component: MusicComponent }
            ]
        }
    },

    methods: {
        switchMedia(theComponent) {
            this.activeComponent = theComponent;
        }
    }
}