import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';


function Review() {

const currentFeeling = useSelector (store => store.currentFeeling)
const currentUnderstanding = useSelector (store => store.currentUnderstanding)
const currentSupport = useSelector (store => store.currentSupport)
const currentComment = useSelector (store => store.currentComment)


    return (
        <div>
            <h2>Review Your Feedback</h2>
                <p>Current feeling: {currentFeeling}</p>
                <p>Current understanding: {currentUnderstanding}</p>
                <p>Current support: {currentSupport}</p>
                <p>Current comments: {currentComment}</p>

            <p>This is where the review is displayed</p>

            <Link to='/thankyou'>Next</Link>
        </div>

    )
}


export default Review;