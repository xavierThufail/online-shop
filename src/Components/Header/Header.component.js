import React from 'react';
import { useHistory } from 'react-router-dom';
import { Col, Layout, Row } from 'antd';

import { Icon } from '../';
import styles from './Header.style';

const { Header: Head } = Layout;

const Header = () => {
  const { push, location } = useHistory();

  const goToCart = () => push('/cart');

  const goToDashboard = () => push('/');

  return (
    <Head style={styles.header}>
      <Row style={{ height: '100%', width: '100%' }}>
        <Col style={{ height: '100%', width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <Icon onClick={() => location.pathname !== '/' ? push('/') : push('/profile')} type={ location.pathname !== '/' ? 'LeftCircleOutlined' : 'UserOutlined' } style={{ fontSize: '30px', color: '#f9c0c0' }} />
          <span onClick={goToDashboard} style={{ fontWeight: 'bold', color: '#ff85a2', fontSize: '1.5rem' }}>Shop</span>
          <Icon onClick={goToCart} type='ShoppingFilled' style={{ fontSize: '30px', color: '#f9c0c0' }} />
        </Col>
      </Row>
    </Head>
  );
};

export default Header;