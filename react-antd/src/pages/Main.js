import React, { Component } from 'react'
import { Layout, Menu, Breadcrumb } from 'antd';
import { UserOutlined, LaptopOutlined, NotificationOutlined } from '@ant-design/icons';
import {NavLink} from 'react-router-dom'
import RouterView from '../router/RouterView'
import WithLogin from '../hoc/withLogin'

const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;

class Main extends Component {
  render() {
    return <Layout>
      <Header className="header">
        <div className="logo" />
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
          <Menu.Item key="1">考试管理</Menu.Item>
          <Menu.Item key="2">试卷管理</Menu.Item>
          <Menu.Item key="3">成绩管理</Menu.Item>
        </Menu>
      </Header>
      <Layout>
        <Sider width={200} className="site-layout-background">
          <Menu
            mode="inline"
            defaultSelectedKeys={['1']}
            defaultOpenKeys={['sub1']}
            style={{ height: '100%', borderRight: 0 }}
          >
            <SubMenu key="sub1" icon={<UserOutlined />} title="表格">
              <Menu.Item key="1"><NavLink to="/main/table">普通表格</NavLink></Menu.Item>
              <Menu.Item key="2">option2</Menu.Item>
              <Menu.Item key="3">option3</Menu.Item>
              <Menu.Item key="4">option4</Menu.Item>
            </SubMenu>
            <SubMenu key="sub2" icon={<LaptopOutlined />} title="表单">
              <Menu.Item key="5">option5</Menu.Item>
              <Menu.Item key="6">option6</Menu.Item>
              <Menu.Item key="7">option7</Menu.Item>
              <Menu.Item key="8">option8</Menu.Item>
            </SubMenu>
            <SubMenu key="sub3" icon={<NotificationOutlined />} title="图表">
              <Menu.Item key="9"><NavLink to="/main/tree">树形组件</NavLink></Menu.Item>
              <Menu.Item key="10"><NavLink to="/main/bar">柱状图</NavLink></Menu.Item>
              <Menu.Item key="11"><NavLink to="/main/candle">股票图</NavLink></Menu.Item>
              <Menu.Item key="12">option12</Menu.Item>
            </SubMenu>
          </Menu>
        </Sider>
        <Layout style={{ padding: '0 24px 24px' }}>
          <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>List</Breadcrumb.Item>
            <Breadcrumb.Item>App</Breadcrumb.Item>
          </Breadcrumb>
          <Content
            className="site-layout-background"
            style={{
              padding: 24,
              margin: 0,
              minHeight: 280,
            }}
          >
            <RouterView routes={this.props.routes}></RouterView>
          </Content>
        </Layout>
      </Layout>
    </Layout>
  }
}


export default WithLogin(Main);