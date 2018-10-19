import React from 'react';
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
            url: "http://localhost:8888/api/getMessage",
            dataType: "json",
            success: function(data){
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
                    <li key={index}>
                        {item.Message}
                    </li>
                ))}
            </ul>
        )
    }
}

export default List;