import React from 'react';
import { Link } from 'react-router-dom';

import $ from 'jquery';

class List extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            list: [],
        }

        this.getMessageList = this.getMessageList.bind(this);
    }
    componentDidMount() {
        this.getMessageList();
    }

    getMessageList() {
        const sel = this;
        $.ajax({
            type: "GET",
            url: "http://localhost:8888/api/getMessages",
            dataType: "json",
            success: function(data){
                console.log(data);
                sel.setState({
                    list: data,
                })
            }
        });
        
    }

    render(){
        return (
            <ul>
                {this.state.list.map((item, index) => (
                    <li key={item._id}>
                        <Link to={`/home/${item._id}`}>{item.message}</Link>
                    </li>
                ))}
            </ul>
        )
    }
}

export default List;