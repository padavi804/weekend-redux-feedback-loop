import { Link } from 'react-router-dom';


function Support() {

    return (
        <div>
            <h2>How well are you being supported?</h2>
            <p>This is where the support is input</p>

            <Link to='/comments'>Next</Link>
        </div>
    )
}


export default Support;