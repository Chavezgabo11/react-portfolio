// import statements have to go at the top
import { getData } from "./components/TheDataMiner.js";
import TheThumbNail from "./components/TheThumbNail.js";
import LightboxComponent from "./components/TheLightboxComponent.js";
import TheProjectComponent from "./components/ProjectPage";


(() => {
    const myVue = new Vue({
        created: function() {
            // go fetch the portfolio data here
            // make it available in the Vue instance
            getData(null, (data) => this.portfolioData = data);
        },

        data: {
            // this is storing the database info from our fetch call

            portfolioData: [],
            claroImg: ["INICIO.jpg"],
            isVisible: false,
            currentPortfolioItem: {}
        },

        methods: {

            popLightBox(item) {
                //debugger;

                this.currentPortfolioItem = item;
                

                // turn the lightbox on
                this.isVisible = true;
            }
        },

        components: {
            thumb: TheThumbNail,
            lightbox: LightboxComponent,
            Project: TheProjectComponent
        }
    }).$mount("#app");    
})()
