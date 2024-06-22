import { Link } from 'react-router-dom';


function Comments() {

    return (
        <div>
            <h2>Any comments you want to leave?</h2>
            <p>This is where the comments are input</p>

            <Link to='/review'>Next</Link>
        </div>
    )
}


export default Comments;