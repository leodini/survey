import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Inicio from './components/Inicio'
import Quizz from './components/Quizz'
 
const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route path="/" component={Inicio} exact/>
            <Route path="/teste" component={Quizz}/>
        </Switch>
    </BrowserRouter>
)

export default Routes;