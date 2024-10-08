import './styles.css'
import React from 'react'
import {data } from './data.js';

export default function ModalContainer() {
const [isOpen, setIsOpen] = React.useState(false);

function toggleModal() {
    setIsOpen(!isOpen);
}

  return (
    <div className='modal-container'>
        <h3>modal popup is {isOpen ? 'open' : 'closed'}
        </h3>
        <button onClick={toggleModal}>{isOpen ? 'close' : 'open'} modal</button>
        {isOpen && <ModalPopup  handler={toggleModal}  header={data.header} main={data.main} footer={data.footer} />}
    </div>
  )
}



function ModalPopup({header, main, footer, handler}) {
  return (
    <div className='modal-content'>
        <header className='modal-header'>
            <h3>{header}</h3>
            <span className='close' onClick={handler}>&times;</span>
        </header>
        <main className='modal-main'>{main}</main>
        <footer className='modal-footer'>
            <a href={footer.url} target='_blank' rel='noreferrer'>{footer.label}</a>
        </footer>
    </div>
  )
}


