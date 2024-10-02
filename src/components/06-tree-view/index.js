import React from 'react';
import './styles.css';
import menuData from './menu-data.js';
import MenuList from './menu-list.jsx';

export default function MenuContainer() {
  return (
    <div className="menu-container">
      <MenuList list={menuData} />
    </div>
  );
}
