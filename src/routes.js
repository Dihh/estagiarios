import React from 'react'

import { BrowserRouter, Switch, Route } from 'react-router-dom'

import LoginPage from './pages/login'
import CadastroPage from './pages/cadastro'
import MainPage from './pages/main'
import Historico from './pages/historico'

export default () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={LoginPage} />
            <Route exact path="/cadastro" component={CadastroPage} />
            <Route exact path="/main" component={MainPage} />
            <Route exact path="/historico" component={Historico} />
        </Switch>
    </BrowserRouter>
)