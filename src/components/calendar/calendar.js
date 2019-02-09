import React, { Component } from 'react';
import BigCalendar from 'react-big-calendar';
import moment from 'moment';
import events from '../../config/events';
import dates from '../../config/utils/dates';
import Dialog from '../dialog/dialog';

const divStyle = {
    height: '600px',
};

export class Calendar extends Component {
    state = {
        open: false
    }
    render() {
        const localizer = BigCalendar.momentLocalizer(moment);
        let allViews = Object.keys(BigCalendar.Views).map(k => BigCalendar.Views[k]);
        console.log(allViews);
        return (
            <div style={divStyle}>
                <BigCalendar
                    selectable
                    events={events}
                    views={allViews}
                    step={60}
                    showMultiDayTimes
                    max={dates.add(dates.endOf(new Date(2015, 17, 1), 'day'), -1, 'hours')}
                    localizer={localizer}
                    // defaultView={BigCalendar.Views.WEEK}
                    // scrollToTime={new Date(1970, 1, 1, 6)}
                    defaultDate={new Date(2015, 3, 12)}
                    onSelectEvent={this.handleEvent}
                    onSelectSlot={this.handleSelect}
                />

                <Dialog open={this.state.open}
                    handleClose={this.handleClose}
                    handleTimeChange={this.handleTimeChange}></Dialog>
            </div>
        )
    }


    handleSelect = ({ start, end }) => {
        console.log(start);
        console.log(end);
        this.setState({
            open: true
        })
    }

    handleEvent = (event) => {
        console.log(event);
    }

    handleClose = (e) => {
        console.log(e);
        this.setState({
            open: false
        })
    }


    handleTimeChange = (e) => {
        console.log(e);
    }
}

export default Calendar
