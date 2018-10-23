import React from 'react';
import $ from 'jquery';

class Message extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            data: "",
        };

        this.getMessage = this.getMessage.bind(this);
    }

    componentDidMount() {
        this.getMessage();
    }

    getMessage() {
        const { id } = this.props.match.params;
        const sel = this;
        console.log(id)
        $.ajax({
            type: "GET",
            url: "http://localhost:8888/api/getMessages",
            dataType: "json",
            data: {
                id,
            },
            success: function(data){
                console.log(data);
                sel.setState({
                    data: data,
                })
            }
        });
        
    }

    render(){
        return (
            <div>
                消息：{this.state.data}
            </div>
        )
    }
}

export default Message;