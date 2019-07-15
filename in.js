
import React, { useState } from "react"
import { render } from "react-dom"
import { Main } from "./src/main";


function App() {
    return <div>
        <Main />
    </div>
}

render(<App></App>, document.querySelector(`#app`))
