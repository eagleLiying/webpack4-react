import React from 'react';
import $ from 'jquery';

class Signup extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            password: '',
            username: '',
            surePassword: '',
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e, name) {
        const value = e.target.value;
        this.setState({
            [name]: value,
        })
    }

    handleSubmit() {
        const { username, password } = this.state;
        const data = {
            username,
            password,
        };

        $.ajax({
            type: "POST",
            url: "http://localhost:8888/api/createUser",
            dataType: "json",
            data,
            success: () => {
                alert("注册成功！");
            }
        })
    }

    render() {
        return (
            <div>
                <form>
                    用户名：<input type="text" name="username" onChange={(e) => this.handleChange(e, "username")} />
                    <br />
                    密码：<input type="password" name="password" onChange={(e) => this.handleChange(e, "password")} />
                    <br />
                    确认密码：<input type="password" name="surePassword" onChange={(e) => this.handleChange(e, "surePassword")} />
                    <br />
                    <button type="button" onClick={this.handleSubmit}>注 册</button>
                </form>
            </div>
        )
    }
}

export default Signup;