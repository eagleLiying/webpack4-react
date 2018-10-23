import React from 'react'
import {actions} from 'mirrorx'

const Topic = ({topic}) => (
  <div>
    test11111
    {/* <h3>{topic ? topic : 'Topic not found'}</h3> */}
    <button onClick={() => actions.routing.push('/topics/test/test2')}>Back</button>
  </div>
)

export default Topic
