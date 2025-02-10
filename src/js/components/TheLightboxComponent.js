export default {
    name: "TheLightboxComponent",

    props: ["piece"],


    template: `
    <section>
    <div class="header-portfolio">
        <h2>{{piece.name}}</h2>
        <img :src='"images/" + claroImg' :alt="piece.name">
    </div>
    `,  

}