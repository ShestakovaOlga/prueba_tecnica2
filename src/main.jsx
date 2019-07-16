import React, { useState } from "react";
import { CalendarInput } from "../components/calendarInput";
import { Checkbox } from "../components/checkbox";
import { Message } from "../components/message";
import { ButtonSave } from "../components/buttonSave";
import { ButtonCancel } from "../components/buttonCancel";

export function Main() {
    const [fecha, setFecha] = useState('')
    const [good, setGood] = useState(true)
    const [mensaje, setMensaje] = useState('')

    return <div style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 40,
    }}>
        <CalendarInput onChange={(f) => {
            setFecha(f)
        }} value={fecha} />
        <Checkbox onChange={(c) => {
            setGood(c)
        }} good={good} />
        {good && <Message onChange={(m) => {
            setMensaje(m)
        }} value={mensaje} />}
        <ButtonSave onClick={() => {
            let cont = localStorage.getItem('cont')
            if (!cont) {
                localStorage.setItem('cont', 1)
                cont = 1
            }

            localStorage.setItem(`carita${cont}`, JSON.stringify({
                msg: mensaje,
                good: good,
            }))
            localStorage.setItem('cont', parseInt(cont) + 1)
        }} />
        <ButtonCancel />
    </div>
}
