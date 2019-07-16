import React from 'react';

export function ButtonCancel(props) {
    return <div style={{
    }}>
        <button style={{
            border: '1px solid white',
            borderRadius: 5,
            outline: 'none',
            minWidth: 455,
            minHeight: 35,
            padding: 10,
            fontSize: '1.2rem',
        }} onClick={props.onClick} type="reset" value="Reset">Cancelar</button>
    </div>
}