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

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('comment submitted');
        dispatch({ type: 'UPDATE_CURRENT_COMMENT', payload: currentComment });
        setCurrentComment('');
    }
    const history = useHistory();
    const handleClick = (evt) => {
        evt.preventDefault();

        history.push('/review');
    }

    return (
        <div>
            <h2>Any comments you want to leave?</h2>
            <form onSubmit={(e) => handleSubmit(e)}>
                <Box
                    component="form"
                    sx={{
                        '& .MuiTextField-root': { m: 1, width: '25ch' },
                    }}
                    noValidate
                    autoComplete="off"
                >
                    <TextField
                        id="outlined-multiline-static"
                        label="Multiline"
                        multiline
                        rows={4}
                        defaultValue="Default Value"
                    />
                </Box>
                <Button variant="contained" color="primary" type="submit"
                    onClick={handleClick}
                >Next</Button>
            </form>
        </div>
    )
}


export default Comments;