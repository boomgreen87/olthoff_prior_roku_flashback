import MovieComponent from "./MovieComponent.js";
import TvComponent from "./TvComponent.js";
import MusicComponent from "./MusicComponent.js";

export default {
    name: "TheUserHomeComponent",

    props: ['currentuser'],

    template: `
    <div class="container">
        <!-- show media icons here -->
        <nav class="mediaLinks">
            <ul class="mediaList">
                <li class="iconLink" v-for="media in mediaTypes" :data-type="media.description" @click="switchMedia(media.component)">
                    <span class="socialIcon">
                        <i v-bind:class="[media.iconClass]"></i>
                    </span>
                </li>
            </ul>
        </nav>

        <component :is="this.activeComponent"></component>
    </div>
    `,

    data: function(){
        return {
            activeComponent: MovieComponent,

            mediaTypes: [
                { iconClass: "fas fa-film fa-3x", description: "Movies", component: MovieComponent },
                { iconClass: "fas fa-tv fa-3x", description: "Television", component: TvComponent },
                { iconClass: "fas fa-headphones fa-3x", description: "Music", component: MusicComponent }
            ]
        }
    },

    methods: {
        switchMedia(theComponent) {
            this.activeComponent = theComponent;
        }
    }
}