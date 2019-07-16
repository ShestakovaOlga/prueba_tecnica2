import React from 'react';

export function Message(props) {
    return <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignContent: 'center',
    }}>
        <h3>Mensaje</h3>
        <input style={{
            width: 450,
            minHeight: 30,
            boxShadow: 'none',
            outline: 'none',
            borderRadius: 5,
            padding: 5,
            textAlign: 'center',
        }} onChange={(e) => {
            props.onChange(e.target.value)
        }} type="text" name="text1" id="text1" placeholder='¿Por qué es un buen día?' value={props.value} />
    </div>
}