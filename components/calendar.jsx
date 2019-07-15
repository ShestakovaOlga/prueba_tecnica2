import React from 'react';
import Moment from 'react-moment';
import 'moment-timezone';



export function CalendarInput() {
    return <div style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignContent: 'center',
    }}>
        <h3>Fecha</h3>
        <input style={{
            boxShadow: 'none',
            outline: 'none',
            borderRadius: 5,
            width: 300,
            padding: 5,
        }} type="text" name="calendar" id="calendar" />
        {/*<Moment format="DD/MM/YYYY">
            2019/07/15
    </Moment>*/}

    </div >
}