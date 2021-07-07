import React, { Component } from 'react'
import { Table, Button, message, Modal, Form, Input } from 'antd'

const { confirm } = Modal;
const dataSource = [
    {
        key: '1',
        name: '胡彦斌',
        age: 32,
        address: '西湖区湖底公园1号',
    },
    {
        key: '2',
        name: '胡彦祖',
        age: 42,
        address: '西湖区湖底公园1号',
    },
    {
        key: '3',
        name: '胡彦祖',
        age: 42,
        address: '西湖区湖底公园1号',
    },
    {
        key: '4',
        name: '胡彦祖',
        age: 42,
        address: '西湖区湖底公园1号',
    },
    {
        key: '5',
        name: '胡彦祖',
        age: 42,
        address: '西湖区湖底公园1号',
    },
    {
        key: '6',
        name: '胡彦祖',
        age: 42,
        address: '西湖区湖底公园1号',
    },
    {
        key: '7',
        name: '胡彦祖',
        age: 42,
        address: '西湖区湖底公园1号',
    },
    {
        key: '8',
        name: '胡彦祖',
        age: 42,
        address: '西湖区湖底公园1号',
    },
    {
        key: '9',
        name: '胡彦祖',
        age: 42,
        address: '西湖区湖底公园1号',
    },
    {
        key: '10',
        name: '胡彦祖',
        age: 42,
        address: '西湖区湖底公园1号',
    },
    {
        key: '11',
        name: '胡彦祖',
        age: 42,
        address: '西湖区湖底公园1号',
    }
];



export default class MyTable extends Component {
    constructor(props) {
        super(props);
        this.handleCancel = this.handleCancel.bind(this);
        this.submit = this.submit.bind(this);
    }

    state = {
        dataSource,
        visible: false,
        current: {}
    }

    columns = [
        {
            title: '姓名',
            dataIndex: 'name',
        },
        {
            title: '年龄',
            dataIndex: 'age',
        },
        {
            title: '住址',
            dataIndex: 'address',
        },
        {
            title: '操作',
            render: (row) => {
                return <div>
                    <Button type="primary" onClick={() => {
                        this.setState({
                            visible: true,
                            current: row
                        })
                    }}>编辑</Button>
                    <Button danger style={{ marginLeft: 10 }} onClick={() =>{
                        message.error(`你没有权限删除${row.name}`);
                        confirm({
                            title: 'Do you want to delete these items?',
                            content: 'When clicked the OK button, this dialog will be closed after 1 second',
                            onOk:()=>{
                                let index = this.state.dataSource.findIndex(item=>item.key === row.key);
                                let dataSource = [...this.state.dataSource];
                                dataSource.splice(index, 1);
                                this.setState({
                                    dataSource
                                })
                            },
                            onCancel() {},
                          });
                    } }>删除</Button>
                </div>
            }
        },
    ];

    handleCancel(){
        this.setState({
            visible: false
        })
    } 
    submit(values){
        console.log('values...', values, this);
        let {key} = values
        let index = this.state.dataSource.findIndex(item=>item.key === key);
        let dataSource = [...this.state.dataSource]
        dataSource[index] = {...dataSource[index], ...values}
        this.setState({
            dataSource,
            visible: false
        })
    }

    render() {
        let { visible, dataSource } = this.state
        return (
            <div>
                <Table dataSource={dataSource} columns={this.columns} />
                <Modal title="编辑数据" visible={visible} onOk={this.handleOk} onCancel={this.handleCancel} footer={null}>
                    <Form 
                        initialValues={this.state.current} 
                        key={JSON.stringify(this.state.current)}
                        onFinish={this.submit}
                        >
                        <Form.Item name="key" hidden>
                            <Input/>
                        </Form.Item>
                        <Form.Item name="name" label="用户姓名" rules={[{required: true, message: '用户姓名不能为空!'}]}>
                            <Input/>
                        </Form.Item>
                        <Form.Item name="age" label="用户年龄" rules={[{required: true, message: '用户年龄不能为空!'},{pattern: /^\d{1,2}$/, message: '用户年龄非法!'}]}>
                            <Input/>
                        </Form.Item>
                        <Form.Item name="address" label="用户住址" rules={[{required: true, message: '用户住址不能为空!'}]}>
                            <Input/>
                        </Form.Item>
                        <Button type="primary" htmlType="submit">
                            Submit
                        </Button>
                    </Form>
                </Modal>
            </div>
        )
    }
}
