import React from 'react'
import {
  Form,
  Icon,
  Input,
  Button,
  Checkbox
} from 'antd';
import {
  connect
} from 'react-redux'
import {
  login
} from '../../reducers/reducer.user.js'
const FormItem = Form.Item;

@connect(
  state => state.userInfo, {
    login
  }
)
class Login extends React.Component {
  constructor(props) {
    super(props)
    this.toLogon = this.toLogon.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  toLogon() {
    this.props.history.push('/logon')
  }
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        this.props.login(values);
      }
    });
  }
  render() {
    const {
      getFieldDecorator
    } = this.props.form;
    return (
      <Form onSubmit={this.handleSubmit} className="login-form">
        <FormItem>
          {getFieldDecorator('userName', {
            rules: [{ required: true, message: '请输入用户名!' }],
          })(
            <Input 
            	prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} 
            	placeholder="用户名" 
            />
          )}
        </FormItem>
        <FormItem>
          {getFieldDecorator('password', {
            rules: [{ required: true, message: '请输入密码!' }],
          })(
            <Input 
            	prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} 
            	type="password" 
            	placeholder="密码" 
            />
          )}
        </FormItem>
        <FormItem>
          {getFieldDecorator('remember', {
            valuePropName: 'checked',
            initialValue: true,
          })(
            <Checkbox>记住密码</Checkbox>
          )}
          <a className="login-form-forgot" href="">忘记密码</a>
          <Button type="primary" htmlType="submit" className="login-form-button">
            登录
          </Button>
          <a href="" onClick={this.toLogon}>现在去注册</a>
        </FormItem>
      </Form>
    );
  }
}

Login = Form.create()(Login);


export default Login