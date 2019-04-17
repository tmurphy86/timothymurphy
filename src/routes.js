import React from 'react'
import { Route, Switch} from 'react-router-dom'
import {Home} from './pages'

const routes = (
  <Switch>
    <Route path='/' exact component={Home} />
    <Route path='/home' exact component={Home} />
    <Route path='*' component={Home} />
  </Switch>

)

export default routes
