import React, { FC } from 'react';
import { Layout, Menu, Breadcrumb, Result } from 'antd';

import './app.less';

const { Header, Content, Footer } = Layout;

const App: FC = () => (
  <Layout>
    <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
      <div className="logo" />
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
        <Menu.Item key="1">nav 1</Menu.Item>
        <Menu.Item key="2">nav 2</Menu.Item>
        <Menu.Item key="3">nav 3</Menu.Item>
      </Menu>
    </Header>
    <Content className="site-layout" style={{ padding: '0 50px', marginTop: 64 }}>
      <Breadcrumb style={{ margin: '16px 0' }}>
        <Breadcrumb.Item>Home</Breadcrumb.Item>
        <Breadcrumb.Item>List</Breadcrumb.Item>
        <Breadcrumb.Item>App</Breadcrumb.Item>
      </Breadcrumb>
      <div className="site-layout-background" style={{ padding: 24, minHeight: 380 }}>
        <Result
          status="success"
          title="All up and running..."
          subTitle="Parcel, React, Typescript, Antd, LESS, ESLint, Prettier"
        />
      </div>
    </Content>
    <Footer style={{ textAlign: 'center' }}>2020 Template</Footer>
  </Layout>
);

export default App;
