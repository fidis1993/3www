import view from './view.js'

export default class extends view{
    constructor(){
        super();
        this.setTitle("Homepage");

    }

    async getHtml(){
        return`

        <div class="text">
            <h1>HOMEPAGE</h1>
            <p>Meowies lets you upload pictures of your cats, so that you never lose them. Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur commodi eveniet fugit veritatis. Id temporibus explicabo enim sunt, officiis sapiente.
            Read <a href="/Biography" data-link class="link">Biography</a> us here </p>
        </div>
 
        <div>
            <img src="/static/Shake1.jpg" alt="Magnifiscent" class="img">
        </div>
 
 
        `;
    }
}