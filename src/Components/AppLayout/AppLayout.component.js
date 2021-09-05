import React, { useState } from 'react';
import { Layout } from 'antd';
import { useLocation } from 'react-router-dom';

import { Header, Navbar } from '../';
import styles from './AppLayout.style';
import config from './AppLayout.config';
import { navbar } from '../../Constants';

const { Content } = Layout;

const renderWrapAppLayout = ({ Component, selectedMenu, setSelectedMenu, showNavbar }) => (
  <Layout style={styles.layout}>
    <Header />
    { showNavbar && <Navbar selectedMenu={selectedMenu} setSelectedMenu={setSelectedMenu} />}
    <Content>
      <Component selectedMenu={selectedMenu} />
    </Content>
  </Layout>
);

const AppLayout = (Component) => {
  const WrappedComponent = () => {
      const [selectedMenu, setSelectedMenu] = useState(navbar[0].item);
      const { pathname } = useLocation()
      const showNavbar = pathname === '/';

      return renderWrapAppLayout({ Component, selectedMenu, setSelectedMenu, showNavbar })
  }

  return <WrappedComponent />;
};

AppLayout.displayName = config.displayName;
AppLayout.propTypes = config.propTypes;

export default AppLayout;