export default {
    name: "TheProjectComponent",

    props: ["piece"],
    
    template: `
        <section>
            <div class="header-portfolio">
                <h2>{{piece.name}}</h2>
                <p>{{piece.description}}</p>
            </div>

            <div class="upper-photos">
                <div @click="imageShow" id="logos-img">
                    <img :src='"images/" + piece.PrjImg1' :alt="piece.name">
                </div>
                <div id="website-img">
                    <img :src='"images/" + piece.PrjImg2' :alt="piece.name">
                </div>
            </div>
            <div class="bottom-photos">
                <div id="mobile-img">
                    <img :src='"images/" + piece.PrjImg3' :alt="piece.name">
                </div>
                <div id="products-img">
                    <img :src='"images/" + piece.PrjImg4' :alt="piece.name">
                </div>
            </div>
        </section>
    `,

    method:
    {
        imageShow(){
            this.$emit("imagedata", this.piece);
        }
    }
}