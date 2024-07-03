import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { useDispatch } from 'react-redux'
import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import Button from '@mui/material/Button';

function Support() {

    const dispatch = useDispatch();
    const [currentSupport, setCurrentSupport] = useState('');
    const history = useHistory();
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('support submitted');
        dispatch({ type: 'UPDATE_CURRENT_SUPPORT', payload: currentSupport });
        // setCurrentSupport('');
        history.push('/comments');
    }

    return (
        <div>
            <h2>How well are you being supported?</h2>
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
                        <TextField id="outlined-basic" label="1-10" variant="outlined" value={currentSupport} onChange={(evt) => setCurrentSupport(evt.target.value)} />
                    </Box>
                    <Button variant="contained" color="primary" type="submit"
                    >Next</Button>

                </form>
            </div>


        </div>
    )
}








export default Support;