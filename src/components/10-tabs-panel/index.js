import React, { useEffect } from 'react';
import { data } from './data';
import './styles.css';

export default function TabsPanel() {
  const [selected, setSelected] = React.useState(null);
  useEffect(() => {
    setSelected(data[0].id);
  }, []);
  function select(id) {
    setSelected(id);
  }
  return (
    <div className="tabs-container">
      <TabsList data={data} handler={select} selected={selected} />
      <TabsContent data={data} selected={selected} />
    </div>
  );
}

function TabsList({ data, handler, selected }) {
  return (
    <div className="tabs-list-container">
      {data &&
        data.length > 0 &&
        data.map((item, i) => {
          return (
            <div
              key={i}
              className={
                selected === item.id
                  ? 'tabs-list-item active'
                  : 'tabs-list-item'
              }
              onClick={() => handler(item.id)}
            >
              {item.title}
            </div>
          );
        })}
    </div>
  );
}

function TabsContent({ data, selected }) {
  return (
    <div className="tabs-content">
      {selected !== null &&
        data &&
        data.length > 0 &&
        data.filter((item) => item.id === selected)[0].content}
    </div>
  );
}
