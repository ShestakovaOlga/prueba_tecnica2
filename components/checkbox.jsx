import React, { useState } from 'react';
import { Message } from "./message";

export function Checkbox(props) {

    return <div>
        <h3>Estado</h3>
        <div style={{
            display: 'flex',
            fontSize: '1.4rem',
            width: 450,
        }}>
            <label htmlFor="check1">
                <input onChange={(e) => {
                    props.onChange(true)
                }} checked={props.good} id="check1" type="radio" value=":)" name="check1" />
                :)
                 </label>
            <label htmlFor="check2">
                <input style={{
                    marginLeft: 20,
                }} onChange={(e) => {
                    props.onChange(false)
                }} checked={!props.good} id="check2" type="radio" value=":(" name="check1" />
                :(
                </label>
        </div>

    </div>
}
