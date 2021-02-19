import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from '../paginas/Home';
import Contato from '../paginas/Contato';
import Simulacoes from '../paginas/Simulacoes';

const Rotas = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path='/' component={ Home } />
            <Route exact path='/contato' component={ Contato } />
            <Route exact path='/simulacoes' component={ Simulacoes } />
        </Switch>
    </BrowserRouter>
);

export default Rotas;