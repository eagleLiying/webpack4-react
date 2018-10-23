import React from 'react'

import mirror, {render, Router} from 'mirrorx'
import App from './App'

// mirror.defaults({
//   // historyMode: 'hash'
// })

render(
  <Router basename="/">
    <App/>
  </Router>
, document.getElementById('root'))
