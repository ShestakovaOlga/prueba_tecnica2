import React from 'react';

export function Checkbox() {
    return <div style={{
    }}>
        <h3>Estado</h3>
        <div style={{
            display: 'flex',
            fontSize: '1.4rem'
        }}>
            <label htmlFor="check1">
                <input id="check1" type="checkbox" value=":)" name="check1" />
                :)
                 </label>
            <label htmlFor="check2">
                <input style={{
                    marginLeft: 20,
                }} id="check2" type="checkbox" value=":(" name="check2" />
                :( </label>
        </div>

    </div>
}