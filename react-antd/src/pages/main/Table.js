import React, { Component } from 'react'
import {Table, Button, message} from 'antd'

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
  
  const columns = [
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
        render: (row)=>{
            return <div>
                <Button>编辑</Button>
                <Button onClick={()=>message.error(`你没有权限删除${row.name}`)}>删除</Button>
            </div>
        }
    },
  ];
  
export default class MyTable extends Component {
    render() {
        return (
            <div>
                <Table dataSource={dataSource} columns={columns} />
            </div>
        )
    }
}
