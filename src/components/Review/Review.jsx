import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';


function Review() {

const currentFeeling = useSelector (store => store.currentFeeling)

    return (
        <div>
            <h2>Review Your Feedback</h2>
                <p>Current feeling:{currentFeeling}</p>

            <p>This is where the review is displayed</p>

            <Link to='/thankyou'>Next</Link>
        </div>

    )
}


export default Review;