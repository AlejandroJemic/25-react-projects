import React from 'react';
import './styles.css';
import MenuItem from './menu-item'

export default function MenuList({ list }) {
  return (
    <div className='menu-list'>
      {list && list.length > 0 && list.map((item) => {
          return <MenuItem key={item.id} item={item} />;
        })}
    </div>
  );
}
