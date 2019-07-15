import React from 'react';

export function Message() {
    return <div>
        <h3>Mensaje</h3>
        <input style={{
            boxShadow: 'none',
            outline: 'none',
            borderRadius: 2,
            minWidth: 300,
            padding: 10,
            textAlign: 'center',
        }} type="text" name="text1" id="text1" value='' placeholder='¿Por qué es un buen día?' />
    </div>
}