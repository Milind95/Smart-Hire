import React from 'react'
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';
import BookingInfo from '../bookingInfo/bookingInfo';

function Transition(props) {
    return <Slide direction="up" {...props} />;
}

let time = new Date();
time.setHours(17);
time.setMinutes(28);

const dialog = (props) => {
    return (
        <div>
            <Dialog
                open={props.open}
                TransitionComponent={Transition}
                keepMounted
                onClose={props.handleClose}
                aria-labelledby="alert-dialog-slide-title"
                aria-describedby="alert-dialog-slide-description"
            >
                <DialogTitle id="alert-dialog-slide-title">
                    {"Add Slot"}
                </DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-slide-description">

                    </DialogContentText>
                    <BookingInfo name="Milind Rohokale"
                        handleTimeChange={props.handleTimeChange}
                        time={time}></BookingInfo>
                </DialogContent>
                <DialogActions>
                    <Button onClick={props.handleClose} color="primary">
                        Disagree
            </Button>
                    <Button onClick={props.handleClose} color="primary">
                        Agree
            </Button>
                </DialogActions>
            </Dialog>
        </div>
    )
}



export default dialog
