import React from 'react';
import { Menu } from 'antd';

import { navbar } from '../../Constants';
import styles from './Navbar.style';
import config from './Navbar.config';
import './Navbar.component.css';

const renderMenuItem = ({ item, selectedMenu }) => (
  <Menu.Item key={item} style={styles.item(item, selectedMenu)}>
    {item}
  </Menu.Item>
);

const Navbar = ({ setSelectedMenu, selectedMenu }) => (
  <Menu onClick={(menu) => {setSelectedMenu(menu.key)}} mode='inline' style={styles.menu} >
    {navbar.map(navbar => renderMenuItem({ item: navbar.item, selectedMenu }))}
  </Menu>
);

Navbar.displayName = config.displayName;
Navbar.propTypes = config.propTypes;

export default Navbar;