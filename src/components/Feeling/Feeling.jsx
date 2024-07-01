import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { useDispatch } from 'react-redux'
import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import Button from '@mui/material/Button';


function Feeling() {

    const dispatch = useDispatch();

    const [currentFeeling, setCurrentFeeling] = useState(0);

    const handleSubmit = (e) => {
        e.preventDefault();

        dispatch({ type: 'UPDATE_CURRENT_FEELING', payload: currentFeeling });
        setCurrentFeeling('');
    }
    const history = useHistory();
    const handleClick = (evt) => {
        evt.preventDefault();

        history.push('/understanding');
    }


    return (
        <div>
            <h2>How are you feeling today?</h2>
            <div>
                <Box
                    component="form"
                    sx={{
                        '& > :not(style)': { m: 1, width: '25ch' },
                    }}
                    noValidate
                    autoComplete="off"
                    onSubmit={(e) => handleSubmit(e)}
                >
                    <TextField id="outlined-basic" label="1-10" variant="outlined" onChange={(evt) => setCurrentFeeling(evt.target.value)} />
                </Box>
            </div>

            <Button variant="contained" color="primary" type="submit"
                // onClick={handleClick}
            >Next</Button>
        </div>
    )
}



export default Feeling;