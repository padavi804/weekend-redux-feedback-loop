import { useSelector } from 'react-redux';
import Button from '@mui/material/Button';
import { useHistory } from 'react-router-dom';

function Review() {

const currentFeeling = useSelector (store => store.currentFeeling)
const currentUnderstanding = useSelector (store => store.currentUnderstanding)
const currentSupport = useSelector (store => store.currentSupport)
const currentComment = useSelector (store => store.currentComment)

const history = useHistory();
const handleSubmit = (e) => {
    e.preventDefault();
    console.log('comment submitted');
    history.push('/thankyou');
}

    return (
        <div>
            <h2>Review Your Feedback</h2>
                <p>Current feeling: {currentFeeling}</p>
                <p>Current understanding: {currentUnderstanding}</p>
                <p>Current support: {currentSupport}</p>
                <p>Current comments: {currentComment}</p>

            <p>This is where the review is displayed</p>
            <Button variant="contained" color="primary" type="submit" data-testid="next" onClick={(e) => handleSubmit(e)}
                    >Next</Button>
        </div>
    )
}


export default Review;