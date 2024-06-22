import { Link } from 'react-router-dom';


function ThankYou (){

    return(
        <div>
            <h2>Thank You</h2>
        <p>This is where the thanks is displayed</p>

    <Link to='/understanding'>Next</Link>
    </div>
    )
}


export default ThankYou;