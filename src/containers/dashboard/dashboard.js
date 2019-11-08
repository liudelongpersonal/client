import React, {Component} from 'react'
import { Layout, Form, Icon, Input, Button, Checkbox } from 'antd';
import {WingBlank} from 'antd-mobile'

const {Header, Footer} = Layout;

class Dashboard extends Component  {
    render() {
        return (
            <div>
            
            <Header>
                <div className = "title">
                    <font color='red'>Dashboard</font>
                    <div>
                        <Button onClick={this.handleGoRegister.bind(this)} type="primary">Admin</Button>
                    </div>
                </div>
            </Header>
            <div className="page-dashboard">
            <br></br>
            <br></br>

            </div>
            <Footer/>
            </div>
        )
    }
    handleGoRegister() {
        this.props.history.push('/Adminregister');
    }

}




export default Dashboard;