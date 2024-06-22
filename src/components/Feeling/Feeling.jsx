import { Link } from 'react-router-dom';


function Feeling() {

    return (
        <div>
            <h2>How are you feeling today?</h2>
            <p>This is where the feelings are input</p>

            <Link to='/understanding'>Next</Link>
        </div>
    )
}


export default Feeling;