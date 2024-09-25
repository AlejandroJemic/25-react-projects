import React, { useEffect, useState } from 'react';
import './styles.css';
import data from './data.js';

export default function Accordion() {

  const [selected, setSelected] = useState(null);
  const [isMultiSelect, setMultiSelect] = useState(false);
  const [multiple, setMultiple] = useState([]);

  function SelectionHandler(currentId){
    if(isMultiSelect){
      const i = multiple.findIndex((element) => element === currentId); 
      if(i===-1){
        setMultiple([...multiple, currentId]);
      }else{
        setMultiple(multiple.filter((id) => id !== currentId));
      }
    }
    else{
      setSelected(currentId===selected?null:currentId);
    }
  }

  return data && data.length > 0 ? (
    <div className="acordion">
      <button className="accordion-multiple" onClick={() => setMultiSelect(!isMultiSelect)}>{isMultiSelect ? 'set Single Select':'set Multiple Select'}</button>

      {data.map((item) => (
        <AccordionItem key={item.id} 
        selectedId = {selected} 
        isMultiSelect = {isMultiSelect} 
        multiple = {multiple} 
        item={item} 
        handleSelection={SelectionHandler}/>
      ))}
    </div>
  ) : (
    <div className="accordion-no-data">no data found</div>
  );

}

function AccordionItem({item, selectedId, isMultiSelect, multiple, handleSelection}) {
  let expand = false;
  if(isMultiSelect){
  
    expand = (multiple.findIndex((element) => element === item.id) > -1) ?  true : false;
  }
  else
    expand = selectedId === item.id ? true : false;

  return (
    <div  className="accordion-item" >
      <div>
        <p>{item.title}</p>
        {expand && <p>{item.content}</p>}
      </div>
     
      <button className='accordion-button' onClick={() => handleSelection(item.id)}>{expand ? '-':'+'  }</button>
     
    </div>
  );
}
