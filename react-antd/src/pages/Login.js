import React, { Component } from 'react'
import { Form, Input, Button, Checkbox } from 'antd';


export default class Login extends Component {
    constructor(props) {
        super(props);
        this.onFinish = this.onFinish.bind(this);
    }

    onFinish = (values) => {
        console.log('Success:', values);
        if (values.username === '1902A' && values.password === '1902A'){
            window.localStorage.setItem('isLogin', values.username);
            this.props.history.replace('/');
        }
    };

    render() {
        return <div style={{position: 'relative',backgroundRepeat:'no-repeat', backgroundSize: '100% 100%', width:'100%',height:'100%',backgroundImage: `url(https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fhbimg.b0.upaiyun.com%2Fc36f340e939f70c874b7dd3cbc6f7bf66e839b06a4cd4-D3Y6Gg_fw658&refer=http%3A%2F%2Fhbimg.b0.upaiyun.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1628297824&t=cdc4a81db7dc0a861997ca0118001ef7)`}}>
            <div className="login-wrap" style={{backgroundColor: '#fff',with: '30vw'}}>
                <Form
                    name="basic"
                    style={{paddingTop: 40}}
                    labelCol={{ span: 7}}
                    wrapperCol={{ span: 16 }}
                    initialValues={{ remember: true }}
                    onFinish={this.onFinish}
                >
                    <Form.Item
                        label="Username"
                        name="username"
                        rules={[{ required: true, message: 'Please input your username!' }]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        label="Password"
                        name="password"
                        rules={[{ required: true, message: 'Please input your password!' }]}
                    >
                        <Input.Password />
                    </Form.Item>

                    <Form.Item name="remember" valuePropName="checked" wrapperCol={{ offset: 7, span: 16 }}>
                        <Checkbox>Remember me</Checkbox>
                    </Form.Item>

                    <Form.Item wrapperCol={{ offset: 7, span: 16 }}>
                        <Button type="primary" htmlType="submit">
                            Submit
                        </Button>
                    </Form.Item>
                </Form>
            </div>
        </div>
    }
}
