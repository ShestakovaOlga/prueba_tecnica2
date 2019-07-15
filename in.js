
import React, { useState } from "react";
import { render } from "react-dom";
import { Main } from "./src/main";
import Calendar from 'react-input-calendar';
import Moment from 'react-moment';
import 'moment-timezone';


function App() {
    return <div>
        <Main />
    </div>
}

render(<App></App>, document.querySelector(`#app`))
