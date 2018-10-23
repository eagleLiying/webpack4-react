import React from 'react'
import {Route} from 'mirrorx'

const App = () => (
  <div>
    <Header/>
    <hr/>
    <div>
      <Route exact path="/" component={Home}/>
      <Route path="/about" component={About}/>
      <Route path="/topics" component={Topics}/>
    </div>
  </div>
)

export default App
