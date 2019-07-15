import React, { useState } from "react";
import { CalendarInput } from "../components/calendar";
import { Checkbox } from "../components/checkbox";
import { Message } from "../components/message";


export function Main() {
    return <div style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignContent: 'center',
    }}>
        <CalendarInput />
        <Checkbox />
        <Message />
    </div>
}