import React from 'react'
import { Router, Route, Redirect, hashHistory } from 'react-router'

import Tarefas from '../tarefas/tarefas'
import About from '../about/about'


export default props => (
    <Router history={hashHistory}>
        <Route path='/tarefas' component={Tarefas} />
        <Route path='/sobre' component={About} />
        <Redirect from='*' to='/tarefas' />
    </Router>
)