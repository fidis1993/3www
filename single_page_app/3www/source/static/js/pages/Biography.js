import view from './view.js'

export default class extends view{
    constructor(){
        super();
        this.setTitle("Biography");

    }

    async getHtml(){
        return`

        <div class="text">
            <h1>An Introduction </h1>
            <p> William Shakespeare was a renowned English poet, playwright, and actor born in 1564 in Stratford-upon-Avon. His birthday is most commonly celebrated on 23 April (see When was Shakespeare born), which is also believed to be the date he died in 1616.

            Shakespeare was a prolific writer during the Elizabethan and Jacobean ages of British theatre (sometimes called the English Renaissance or the Early Modern Period). Shakespeare’s plays are perhaps his most enduring legacy, but they are not all he wrote. Shakespeare’s poems also remain popular to this day.  </p>
            <h2> Shakespeare's Family Life </h2>
            <p> Records survive relating to William Shakespeare’s family that offer an understanding of the context of Shakespeare's early life and the lives of his family members. John Shakespeare married Mary Arden, and together they had eight children. John and Mary lost two daughters as infants, so William became their eldest child. John Shakespeare worked as a glove-maker, but he also became an important figure in the town of Stratford by fulfilling civic positions. His elevated status meant that he was even more likely to have sent his children, including William, to the local grammar school. 

            William Shakespeare would have lived with his family in their house on Henley Street until he turned eighteen. When he was eighteen, Shakespeare married Anne Hathaway, who was twenty-six. It was a rushed marriage because Anne was already pregnant at the time of the ceremony. Together they had three children. Their first daughter, Susanna, was born six months after the wedding and was later followed by twins Hamnet and Judith. Hamnet died when he was just 11 years old. </p>
        </div>
 
        <div>
            <img src="/source/static/Shake3.jpg" alt="Magnifiscent3" class="img">
        </div>
 
 
        `;
    }
}