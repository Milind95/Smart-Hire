import React from 'react';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
// import TimePicker from 'react-toolbox/lib/time_picker';
import { Button } from 'react-toolbox/lib/button';

const textField = {
    width: 200,
};

const bookingInfo = (props) => {
    return (
        <div>
             <Button label="Hello World!" />,
            <TextField
                disabled
                id="standard-disabled"
                label="Disabled"
                defaultValue={props.name}
                className={textField}
                margin="normal"
            />

            {/* <TimePicker
                label='Finishing time'
                onChange={props.handleTimeChange}
                value={props.time}
            /> */}
        </div>
    )
}

export default bookingInfo
