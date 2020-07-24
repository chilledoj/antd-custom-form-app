import React, { FC, useState } from 'react';
import { Layout, Breadcrumb, Typography } from 'antd';

import './app.less';
import TestForm from '../components/Form';
import Response from '../components/Response';

const { Header, Content, Footer } = Layout;

const App: FC = () => {
  const [vals, setVals] = useState<unknown | null>(null);

  const onSubmit = (values: unknown): void => {
    setVals(values);
  };

  const clearValues = (): void => {
    setVals(null);
  };

  return (
    <Layout>
      <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
        <div className="logo" />
      </Header>
      <Content className="site-layout" style={{ padding: '0 50px', marginTop: 64 }}>
        <Breadcrumb style={{ margin: '16px 0' }}>
          <Breadcrumb.Item>Home</Breadcrumb.Item>
        </Breadcrumb>
        <div className="site-layout-background" style={{ padding: 24, minHeight: 380 }}>
          <Typography.Title>Custom Form</Typography.Title>
          {vals === null ? (
            <TestForm onSubmit={onSubmit} />
          ) : (
            <Response values={vals} back={clearValues} />
          )}
        </div>
      </Content>
      <Footer style={{ textAlign: 'center' }}>Antd Custom Form</Footer>
    </Layout>
  );
};

export default App;
