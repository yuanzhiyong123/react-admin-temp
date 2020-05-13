import React, { Component } from "react";
import { Card } from "antd";

import Logo from "@common/img/logo.svg";
import "./index.scss";

class LoginPage extends Component {
  // 登录
  handleSubmit(e) {
    e.preventDefault();
    const { validateFields } = this.props.form;
    validateFields((err, value) => {
      if (!err) {
        console.log(value);
      }
    });
  }
  render() {
    // const { getFieldDecorator } = this.props.form;

    return (
      <div className="login_con_c">
        <div className="login_container">
          <Card>
            <div className="logo_con">
              <img src={Logo} className="logo_img" alt="" />
              <span className="logo_title">后台管理系统</span>
            </div>
            <div className="form_con">
              {/* <Form onSubmit={this.handleSubmit.bind(this)} className="login-form">
                <Form.Item>
                  {getFieldDecorator('username', {
                    rules: [{ required: true, message: 'Please input your username!' }],
                  })(
                    <Input
                      prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                      placeholder="Username"
                    />,
                  )}
                </Form.Item>
                <Form.Item>
                  {getFieldDecorator('password', {
                    rules: [{ required: true, message: 'Please input your Password!' }],
                  })(
                    <Input
                      prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                      type="password"
                      placeholder="Password"
                    />,
                  )}
                </Form.Item>
                <Form.Item>
                  <Button type="primary" htmlType="submit" className="login-form-button">登录</Button>
                </Form.Item>
              </Form> */}
            </div>
          </Card>
        </div>
      </div>
    );
  }
}
// const CreateLogin = Form.create({})(LoginPage)
export default LoginPage;
