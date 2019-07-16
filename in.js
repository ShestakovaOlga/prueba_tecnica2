
import React, { useState } from "react";
import { render } from "react-dom";
import { New } from "./src/new";
import { HashRouter } from "react-router-dom";
import { ListCalendar } from "./src/listCalendar";
import { Route, Switch } from "react-router-dom";



function App() {
    return <div>
        <HashRouter>
            <Switch>
                <Route exact path='/new' component={New} />
                <Route path='*' component={ListCalendar} />
            </Switch>
        </HashRouter>
    </div>
}

render(<App></App>, document.querySelector(`#app`))
