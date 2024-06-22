import { Link } from 'react-router-dom';


function Review() {

    return (
        <div>
            <h2>Review Your Feedback</h2>
            <p>This is where the review is displayed</p>

            <Link to='/thankyou'>Next</Link>
        </div>

    )
}


export default Review;