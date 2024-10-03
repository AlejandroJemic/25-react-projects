import React from 'react'
import './styles.css'
import { QRCode } from 'react-qr-code';

export default function QrCodeGenerator() {
  const [text, setText] = React.useState('');
  const [qrValue, setQrValue] = React.useState('');

  const cerateCode = () =>{
    console.log(text)
    setQrValue(text);
  }

  return (
    <div className='code-container'>
        <div className='form-container'>   
            <input type="text" name='text' placeholder='Enter text' className='text-input'
            onChange={(e) => setText(e.target.value)}
            />
            <button 
            disabled={text.trim().length > 0 ? false : true}
            onClick={cerateCode}>Generate</button>
        </div>
        <QRCode 
            value={qrValue}
            id="qrcode"
           
            className="qrcode"
        />
    </div>
  )
}
