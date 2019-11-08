import React, {Component} from 'react'
import { Layout, Form, Icon, Input, Button, Checkbox } from 'antd';

import  './login.css';


const {Header, Footer} = Layout;

class NormalLoginForm extends Component {
  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  };
  handleDashboard() {
    this.props.history.push('/Dashboard');
}

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
        <div>
    <Header style = {{ margin: "top"}} />
    <div className = "login-from-wrap">
      <Form onSubmit={this.handleSubmit} className="login-form">
        <Form.Item>
          {getFieldDecorator('username', {
            rules: [{ required: true, message: 'Please input your username!' }],
          })(
            <Input
              prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)'}} />}
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
          {getFieldDecorator('remember', {
            valuePropName: 'checked',
            initialValue: true,
          })(<Checkbox>Remember me</Checkbox>)}
          <a className="login-form-forgot" href="">
            Forgot password
          </a>
          <Button className="login-form-button" onClick={this.handleDashboard.bind(this)} type="primary">
            Log In</Button>
          Or <a href="">register now!</a>
          
          
          
        </Form.Item>
      </Form>
      </div>
      <Footer style = {{ margin: "bottom"}} ></Footer>
      </div>
    );
  }

}

const WrappedNormalLoginForm = Form.create({ name: 'normal_login' })(NormalLoginForm);



export default WrappedNormalLoginForm

