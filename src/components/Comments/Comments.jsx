import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { useDispatch } from 'react-redux'
import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import Button from '@mui/material/Button';

function Comments() {

    const dispatch = useDispatch();
    const [currentComment, setCurrentComment] = useState('');
    const history = useHistory();
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('comment submitted');
        dispatch({ type: 'UPDATE_CURRENT_COMMENT', payload: currentComment });
        // setCurrentComment('');
        history.push('/review');
    }

    return (
        <div>
            <h2>Any comments you want to leave?</h2>
            <div>
            <form onSubmit={(e) => handleSubmit(e)}>
                <Box
                    // component="form"
                    sx={{
                        '& .MuiTextField-root': { m: 1, width: '25ch' },
                    }}
                    noValidate
                    autoComplete="off"
                >
                    <textarea
                        data-testid="input"
                        id="outlined-multiline-static"
                        label="Comment"                                              
                        value={currentComment} 
                        onChange={(evt) => setCurrentComment(evt.target.value)}
                    />
                </Box>
                <Button variant="contained" color="primary" type="submit" data-testid="next"
                >Next</Button>
            </form>
            </div>
        </div>
    )
}


export default Comments;