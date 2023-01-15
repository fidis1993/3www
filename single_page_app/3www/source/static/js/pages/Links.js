import view from './view.js'

export default class extends view{
    constructor(){
        super();
        this.setTitle("Links");

    }

    async getHtml(){
        return`

        <div class="text">
            <h1>    </h1>
            <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur commodi eveniet fugit veritatis. Id temporibus explicabo enim sunt, officiis sapiente. </p>
            
        </div>
 
        <div>
            <img src="/static/Shake2.jpg" alt="Magnifiscent2" class="img">
        </div>
 
 
        `;
    }
}