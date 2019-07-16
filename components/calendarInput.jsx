import React from 'react';




export function CalendarInput(props) {
    return <div style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignContent: 'center',
    }}>
        <h3>Fecha</h3>
        <input style={{
            width: 450,
            minHeight: 30,
            boxShadow: 'none',
            outline: 'none',
            borderRadius: 5,
            padding: 5,
        }} onChange={(e) => {
            props.onChange(e.target.value)
        }} type="date" name="calendar" id="calendar" value={props.value} />
    </div >
}