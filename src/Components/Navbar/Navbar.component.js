import React from 'react';
import { Menu } from 'antd';

import { navbar } from '../../Constants';
import styles from './Navbar.style';
import config from './Navbar.config';
import './Navbar.component.css';

const renderMenuItem = ({ item, i, color }) => (
  <Menu.Item key={item} style={styles.item(color, i)}>
    {item}
  </Menu.Item>
);

const Navbar = ({ setSelectedMenu, selectedMenu }) => (
  <Menu onClick={(menu) => {setSelectedMenu(menu.key)}} mode='inline' style={styles.menu} >
    {navbar.map((el, i) => renderMenuItem({ item: el.item, i, color: selectedMenu === el.item ? el.colorOnClick : el.color }))}
    <div style={styles.last}/>
  </Menu>
);

Navbar.displayName = config.displayName;
Navbar.propTypes = config.propTypes;

export default Navbar;