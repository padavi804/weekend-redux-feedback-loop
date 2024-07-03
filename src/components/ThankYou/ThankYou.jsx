import Button from '@mui/material/Button';
import { useHistory } from 'react-router-dom';

function ThankYou (){

    const history = useHistory();
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('comment submitted');
        history.push('/');
    }

    return(
        <div>
            <h2>Thank You</h2>
        <p></p>
        <Button variant="contained" color="primary" type="submit" onClick={(e) => handleSubmit(e)}
                    >Submit New Feedback</Button>
    </div>
    )
}


export default ThankYou;