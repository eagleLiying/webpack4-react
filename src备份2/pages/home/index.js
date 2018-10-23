import React from 'react';
import { Router, Route, Link, Switch } from "react-router-dom";

import List from 'components/List'
import Message from '../message';

class Home extends React.Component {
    constructor(props){
        super(props);
    }

    componentDidMount() {

    }

    render(){
        return (
            <div>
                <h1>消息列表：</h1>
                <List />
                <div>
                    <Route path="/home/:id" component={Message} />
                </div>
            </div>
        )
    }
}

export default Home;