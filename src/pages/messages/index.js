import React from 'react';
import { Link } from 'react-router-dom';

import $ from 'jquery';

class List extends React.Component {
    constructor(props) {
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
            success: function (data) {
                sel.setState({
                    list: data,
                })
            }
        });

    }

    render() {
        return (
            <div>
                消息列表：
                <ul>
                    {this.state.list.map((item, index) => (
                        <li key={item._id}>
                            <Link to={`/message/${item._id}`}>{item.message}</Link>
                        </li>
                    ))}
                </ul>
            </div>
        )
    }
}

export default List;