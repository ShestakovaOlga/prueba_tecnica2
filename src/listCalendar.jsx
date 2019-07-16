import React, { useState, useEffect } from "react";
import { Link, Route, Switch } from "react-router-dom";
import { CaraBuena } from "../components/caritaBuena";
import { CaraMala } from "../components/caritaMala";


export function ListCalendar(props) {
    const [caritas, setCaritas] = useState([])
    useEffect(() => {
        const cont = localStorage.getItem('cont')
        for (let i = 1; i < cont; i++) {
            console.log('cont', i);

            const cara = localStorage.getItem(`carita${i}`)
            setCaritas(caritas => [
                ...caritas,
                JSON.parse(cara)
            ])
        }
    }, [])


    return <div>
        <button style={{
            height: 70,
            width: '100vw',
            backgroundColor: '#3498DB',
            marginBottom: 10,
            fontSize: '3rem',
            overflowY: 'hidden'
        }} onClick={() => {
            props.history.push('/new')
        }}> +
        </button>

        <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            marginLeft: 20,
            marginRight: 20
        }}>{caritas.map(carita => <div>
            {carita.good ? <CaraBuena /> : <CaraMala />}
        </div>)}</div>
    </div>
}