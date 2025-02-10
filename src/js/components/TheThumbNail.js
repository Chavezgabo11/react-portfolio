export default {
    name: "TheThumbnailComponent",

    props: ["piece"],

    template: `
            <section @click="showmydata" class="project" >
                <h2 class="project-name"></h2>
                <a class="links" :href="piece.link"><img class="Project-img" :src='"images/" + piece.thumb' :alt="piece.name"></a>
            </section>
    `,

    methods: {
        showmydata() {
            //debugger;
            this.$emit("showdata", this.piece);
        }
    }
}