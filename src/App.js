import React from 'react'
import {Route, Switch} from 'mirrorx'

import Header from './components/Header'
import Home from './components/Home'
import About from './components/About'

import Topics from './containers/Topics'

const App = () => (
  <div>
    <Header/>
    <hr/>
    <Switch>
      <Route exact path="/" component={Home}/>
      <Route path="/about" component={About}/>
      <Route path="/topics" component={Topics}/>
    </Switch>
  </div>
)

export default App
