import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { useDispatch } from 'react-redux'
import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import Button from '@mui/material/Button';


function Feeling() {

    const dispatch = useDispatch();

    const [currentFeeling, setCurrentFeeling] = useState('');
    const history = useHistory();
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('feelings submitted');
        dispatch({ type: 'UPDATE_CURRENT_FEELING', payload: currentFeeling });
        setCurrentFeeling({currentFeeling});
        history.push('/understanding');
    }

    // const handleClick = (evt) => {
    //     evt.preventDefault();


    // }


    return (
        <div>
            <h2>How are you feeling today?</h2>
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
                        <TextField id="outlined-basic" label="1-10" variant="outlined" value={currentFeeling} onChange={(evt) => setCurrentFeeling(evt.target.value)} />
                    </Box>
                    <Button variant="contained" color="primary" type="submit"
                    // onClick={handleClick}
                    >Next</Button>

                </form>
            </div>


        </div>
    )
}



export default Feeling;