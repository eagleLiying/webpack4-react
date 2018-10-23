import React from 'react';
import $ from 'jquery';

class Message extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            data: "test",
        };

        this.getMessage = this.getMessage.bind(this);
        this.onDelete = this.onDelete.bind(this);
    }

    componentDidMount() {
        this.getMessage();
    }

    getMessage() {
        const { id } = this.props.match.params;
        const sel = this;
        $.ajax({
            type: "POST",
            url: "http://localhost:8888/api/getMessage",
            dataType: "json",
            data: {
                id,
            },
            success: function(data){
                console.log("请求成功", data);
                sel.setState({
                    data: data.message,
                })
            }
        });
        
    }

    onDelete() {
        const { match: { params: { id } }, history } = this.props;
        $.ajax({
            type: "POST",
            url: "http://localhost:8888/api/deletMessage",
            dataType: "json",
            data: {
                id,
            },
            success: function(data){
                alert("删除成功")
                history.push("/messages")
            }
        });
    }

    render(){
        return (
            <div>
                消息：{this.state.data}
                <button onClick={this.onDelete}>删除</button>
            </div>
        )
    }
}

export default Message;