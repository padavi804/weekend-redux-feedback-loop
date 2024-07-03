import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { useDispatch } from 'react-redux'
import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import Button from '@mui/material/Button';

function Understanding() {
    const dispatch = useDispatch();

    const [currentUnderstanding, setCurrentUnderstanding] = useState('');
    const history = useHistory();
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('understanding submitted');
        dispatch({ type: 'UPDATE_CURRENT_UNDERSTANDING', payload: currentUnderstanding });
        // setCurrentUnderstanding('');
        history.push('/support');
    }




    return (
        <div>
            <h2>How well are you understanding the content?</h2>
            <div>
                <form onSubmit={(e) => handleSubmit(e)}>
                    <Box
                        // component="form"
                        sx={{
                            '& > :not(style)': { m: 1, width: '25ch' },
                        }}
                        noValidate
                        autoComplete="off"

                    >
                        <TextField id="outlined-basic" label="1-10" variant="outlined" value={currentUnderstanding} onChange={(evt) => setCurrentUnderstanding(evt.target.value)} />
                    </Box>
                    <Button variant="contained" color="primary" type="submit"
                    >Next</Button>

                </form>
            </div>


        </div>
    )
}





export default Understanding;