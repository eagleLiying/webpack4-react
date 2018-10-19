import React from 'react';
import { Link } from 'react-router-dom';

import List from 'components/List'

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
            </div>
        )
    }
}

export default Home;