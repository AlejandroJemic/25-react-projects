import React from 'react';

export default function MenuItem({ item, isSubMenu = false }) {
  const [openIDs, setOpenIDs] = React.useState([]);

  function handleClick(id) {
    if (openIDs.includes(id)) {
      setOpenIDs(openIDs.filter((i) => i !== id));
    } else {
      setOpenIDs([...openIDs, id]);
    }
  }

  if (item)
    return (
      <div key={item.id} className={isSubMenu ? 'sub-menu-item' : 'menu-item'}>
        <p>
          {item.label}
          {item.children && item.children.length > 0 && (
            <span onClick={() => handleClick(item.id)}>
              {openIDs.includes(item.id) ? '-' : '+'}
            </span>
          )}
        </p>

        {item.children && openIDs.includes(item.id) && (
          <SubMenuList list={item.children} />
        )}
      </div>
    );
  else return null;
}

// import React from 'react';
// import './styles.css';
// import MenuItem from './menu-item'

export function SubMenuList({ list }) {
  return (
    <div className="sub-menu-list">
      {list &&
        list.length > 0 &&
        list.map((item) => {
          return <MenuItem item={item} isSubMenu={true} />;
        })}
    </div>
  );
}
