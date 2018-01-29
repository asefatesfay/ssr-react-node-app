import React from "react";
import {
    BrowserRouter as Router,
    Route,
    Redirect,
    Switch
} from "react-router-dom";

import List from "./List";
import Home from "./Home";


export default function App(props){
    const { pokemon } = props;
    return (
        <div>
            Your React Node app is ready to go!
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/pokemon" render={() => (<List pokemon={pokemon.list}/>)} />
            </Switch>
        </div>
    )
};