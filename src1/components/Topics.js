import React from 'react'
import {Route, Link} from 'mirrorx'

import Topic from '../components/Topic'
import AddTopic from '../components/AddTopic'
import Test from '../components/Test'

const Topics = ({topics}) => (
  <div>
    <h2>Topics</h2>
    <ul>
      {
        topics.map((topic, idx) => (
          <li key={idx}>
            <Link to={`/topics/test`}>{topic}</Link>
          </li>
        ))
      }
    </ul>
    <Route path={`/topics/test`}  component={Topic} />
    <Route exact path="/topics" component={AddTopic}/>
    <Route exact path="/topics/test/test2" component={Test}/>
  </div>
)

export default Topics
