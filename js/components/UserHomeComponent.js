import MovieComponent from "./MovieComponent.js";
import TvComponent from "./TvComponent.js";
import MusicComponent from "./MusicComponent.js";

export default {
    name: "TheUserHomeComponent",

    props: ['currentuser'],

    template: `
    <div class="container">
        <component :is="this.activeComponent"></component>

        <!-- show media icons here -->
        <div class="row"> <!-- 2-up for nav and media info -->

            <nav id="mediaLinks">

                <ul class="media-type">
                    <li v-for="media in mediaTypes" :data-type="media.description" @click="switchMedia(media.component)">

                        <span class="socialIcon">
                            <i v-bind:class="[media.iconClass]"></i>
                        </span>
                    </li>
                </ul>

            </nav>
        </div>
    </div>
    `,

    data: function(){
        return {
            activeComponent: MovieComponent,

            mediaTypes: [
                { iconClass: "fas fa-film", description: "Movies", component: MovieComponent },
                { iconClass: "fas fa-tv", description: "Television", component: TvComponent },
                { iconClass: "fas fa-headphones", description: "Music", component: MusicComponent }
            ]
        }
    },

    methods: {
        switchMedia(theComponent) {
            this.activeComponent = theComponent;
        }
    }
}