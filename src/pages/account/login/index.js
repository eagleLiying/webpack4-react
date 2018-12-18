import React from 'react';
import $ from 'jquery';

class Login extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            data: {}
        };

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
        }

        const sef = this;

        $.ajax({
            type: "POST",
            url: "http://localhost:8888/api/login",
            dataType: "json",
            data,
            success: (data) => {
                if (data.error) {
                    alert("登录失败！");
                } else {
                    alert("登录成功！");
                    sef.setState({
                        data,
                    })
                }
            }
        })
    }

    render() {
        console.log(this.state.date && this.state.date.id)
        return (
            <div>
                {this.state.date && this.state.date.id
                    ? <div>
                        用户名： {this.state.data.username}<br />
                        密  码： {this.state.data.password}
                    </div>
                    : <form>
                        用户名：<input required type="text" name="username" onChange={(e) => this.handleChange(e, "username")} />
                        <br />
                        密码：<input required type="password" name="password" onChange={(e) => this.handleChange(e, "password")} />
                        <br />
                        <button type="button" onClick={this.handleSubmit}>登 录</button>
                    </form>}
            </div>
        )
    }
}

export default Login;