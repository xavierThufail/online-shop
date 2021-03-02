import React from 'react';
import { Layout } from 'antd';

import { Header } from '../';
import styles from './AppLayout.style';
import config from './AppLayout.config';

const { Content } = Layout;

const AppLayout = ({ children }) => {
  return (
    <Layout>
      <Header />
      <Content>
        {children}
      </Content>
    </Layout>
  );
};

AppLayout.displayName = config.displayName;
AppLayout.propTypes = config.propTypes;

export default AppLayout;