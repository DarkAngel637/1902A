import React, { Component } from 'react'
import { Table, Button, message, Modal, Form, Input } from 'antd'

const { Search } = Input;
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
        this.onSearch = this.onSearch.bind(this);
        this.addItem = this.addItem.bind(this);
    }

    state = {
        rawData: dataSource,
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
                    <Button danger style={{ marginLeft: 10 }} onClick={() => {
                        confirm({
                            title: 'Do you want to delete these items?',
                            content: 'When clicked the OK button, this dialog will be closed after 1 second',
                            onOk: () => {
                                let index = this.state.dataSource.findIndex(item => item.key === row.key);
                                let dataSource = [...this.state.dataSource];
                                dataSource.splice(index, 1);
                                this.setState({
                                    dataSource
                                }, ()=>{
                                    message.error(`删除${row.name}成功`);
                                })
                            },
                            onCancel() { },
                        });
                    }}>删除</Button>
                </div>
            }
        },
    ];

    handleCancel() {
        this.setState({
            visible: false
        })
    }
    submit(values) {
        let { key } = values;
        let dataSource = [...this.state.dataSource]
        if (key){
            // 编辑数据
            let index = this.state.dataSource.findIndex(item => item.key === key);
            dataSource[index] = { ...dataSource[index], ...values }
            message.success('修改数据成功')
        }else{
            // 添加数据
            key = dataSource[dataSource.length - 1].key*1+1;
            dataSource.push({...values, key});
            message.success('添加数据成功')
        }
       
        this.setState({
            rawData: dataSource,
            dataSource,
            visible: false,
            current: {}
        })
    }

    onSearch(keyWord) {
        let dataSource = [...this.state.rawData]
        dataSource = dataSource.filter(item=>item.name.indexOf(keyWord) !== -1)
        this.setState({
            dataSource
        })
    }

    addItem(){
        this.setState({
            visible: true,
            current: {}
        })
    }

    render() {
        let { visible, dataSource, current } = this.state
        return (
            <div>
                <Button type="primary" onClick={this.addItem}>新增</Button>
                <Search
                    style={{width:'30%', float: 'right'}}
                    placeholder="input search text"
                    allowClear
                    enterButton="Search"
                    size="middle"
                    onSearch={this.onSearch}
                />
                <Table dataSource={dataSource} columns={this.columns} />
                <Modal title={current.key?'编辑数据':'新增数据'} visible={visible} onOk={this.handleOk} onCancel={this.handleCancel} footer={null}>
                    <Form
                        initialValues={this.state.current}
                        key={JSON.stringify(this.state.current)}
                        onFinish={this.submit}
                    >
                        <Form.Item name="key" hidden>
                            <Input />
                        </Form.Item>
                        <Form.Item name="name" label="用户姓名" rules={[{ required: true, message: '用户姓名不能为空!' }]}>
                            <Input />
                        </Form.Item>
                        <Form.Item name="age" label="用户年龄" rules={[{ required: true, message: '用户年龄不能为空!' }, { pattern: /^\d{1,2}$/, message: '用户年龄非法!' }]}>
                            <Input />
                        </Form.Item>
                        <Form.Item name="address" label="用户住址" rules={[{ required: true, message: '用户住址不能为空!' }]}>
                            <Input />
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
