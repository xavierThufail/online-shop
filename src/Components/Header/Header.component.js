import React from 'react';
import { Col, Layout, Row } from 'antd';

import { Icon } from '../';
import styles from './Header.style';

const { Header: Head } = Layout;

const Header = () => {
  return (
    <Head style={styles.header}>
      <Row style={{ height: '100%', width: '100%' }}>
        <Col style={{ height: '100%', width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <Icon type='RollbackOutlined' style={{ fontSize: '30px', color: '#f9c0c0' }} />
          <span style={{ fontWeight: 'bold', color: '#ff85a2', fontSize: '1.5rem' }}>Shop</span>
          <Icon type='ShoppingFilled' style={{ fontSize: '30px', color: '#f9c0c0' }} />
        </Col>
      </Row>
    </Head>
  );
};

export default Header;