import React from 'react';
import $ from 'jquery';

class Add extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            value: ""
        }

        this.handleClick = this.handleClick.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    componentDidMount() {

    }

    handleChange(e) {
        const value = e.target.value;
        this.setState({
            value,
        })
    }

    handleClick() {
        const { value } = this.state;
        $.ajax({
            type: "POST",
            url: "http://localhost:8888/api/createMessage",
            dataType: "json",
            data: {
                message: value,
            },
            success: function(data){
                console.log(data);
            }
        });
    }

    render(){
        return (
            <div>
                <input  id="message" name="message" value={this.state.value} onChange={this.handleChange} />
                <input type="button" value="提交" onClick={this.handleClick}/>
            </div>
        )
    }
}

export default Add;