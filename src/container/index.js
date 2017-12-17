import React from 'react'
import {
	BrowserRouter,
	Route
} from 'react-router-dom'
import {
	Layout,
	Menu,
	Breadcrumb,
	BackTop
} from 'antd';
import Login from './login/login.js'
import Logon from './logon/logon.js'
import './index.css'

const {
	Header,
	Content,
	Footer
} = Layout;


class App extends React.Component {
	render() {
		return (
			<BrowserRouter>
				<Layout className="layout">
			    <Header>
			    	<div className="logo">
			    	</div>
			      <Menu
			        theme="dark"
			        mode="horizontal"
			        defaultSelectedKeys={['2']}
			        style={{ lineHeight: '64px' }}
			      >
			        <Menu.Item key="2">nav 2</Menu.Item>
			        <Menu.Item key="3">nav 3</Menu.Item>
			        <Menu.Item key="4">nav 4</Menu.Item>
			      </Menu>
			    </Header>
			    <Content style={{ padding: '0 50px' }}>
			      <Breadcrumb style={{ margin: '16px 0' }}>
			        <Breadcrumb.Item>Home</Breadcrumb.Item>
			        <Breadcrumb.Item>List</Breadcrumb.Item>
			        <Breadcrumb.Item>App</Breadcrumb.Item>
			      </Breadcrumb>
			      <div style={{ background: '#fff', padding: 24, minHeight: 280 }}>
							<Route path="/login" component={Login}></Route>
							<Route path="/logon" component={Logon}></Route>
			      </div>
			    </Content>
			    <Footer style={{ textAlign: 'center' }}>
			     这是一个react构建项目demo 
			    </Footer>
			    <BackTop>
			      <div className="ant-back-top-inner">UP</div>
			    </BackTop>
  			</Layout>
			</BrowserRouter>
		);
	}
}

export default App