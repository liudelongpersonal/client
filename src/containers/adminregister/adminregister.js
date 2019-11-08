import React, {Component} from 'react'
import {List, InputItem, WingBlank, WhiteSpace, Button, Radio} from 'antd-mobile'


class AdminRegister extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '', 
            pwd: '', 
            pwdConfirm: '', 
            type: '', 
        }
    }

    render() {
        const RadioItem = Radio.RadioItem
        return (
            <div className="page-register">
                
                <List>
                    <InputItem onChange={value => this.handleChange('username', value)}>account</InputItem>
                    <InputItem onChange={value => this.handleChange('pwd', value)}>password</InputItem>
                    <InputItem onChange={value => this.handleChange('pwdConfirm', value)}>confirm</InputItem>
                </List>
                <WhiteSpace></WhiteSpace>
                <List>
                    <RadioItem
                        onClick={() => this.handleChange('type', 'US')}
                        checked={this.state.type === 'US'}>US   </RadioItem>
                    <RadioItem
                        onClick={() => this.handleChange('type', 'Spain')}
                        checked={this.state.type === 'Spain'}>Spain</RadioItem>
                </List>
                <WhiteSpace></WhiteSpace>
                <WingBlank>
                    <Button type="primary">Register</Button>
                </WingBlank>
            </div>
        )
    }

    /*
    *     绑定表单值
    * */
    handleChange(key, val) {
        this.setState({
            [key]: val
        })
    }
}

export default AdminRegister