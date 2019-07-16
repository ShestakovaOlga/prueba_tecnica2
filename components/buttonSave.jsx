import React, { useState } from 'react';

export function ButtonSave(props) {

    return <div style={{
        marginTop: 30,
        marginBottom: 30,
    }}>
        <button style={{
            border: '1px solid #3498DB',
            backgroundColor: '#3498DB',
            borderRadius: 5,
            outline: 'none',
            width: 455,
            minHeight: 35,
            padding: 10,
            fontSize: '1.2rem',
        }} onClick={props.onClick} type="submit" value="Submit">Guardar</button>
    </div>
}