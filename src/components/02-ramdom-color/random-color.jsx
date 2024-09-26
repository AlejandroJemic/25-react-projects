import React from 'react'
import './styles.css'

export default function RandomColor() {
  const [color, setColor] = React.useState('#000000');
  const [colorType, setColorType] = React.useState('HEX');  
  const[colors, setColors] = React.useState([]);
  const[colorIndex, setColorIndex] = React.useState(0);

  function RadombByLenght(length) {
    return Math.floor(Math.random() * length);
  }

  function copyColor() {
    navigator.clipboard.writeText(color);
    alert('Copied the text: ' + color);
  }

  const hexChars = ['0','1','2','3','4','5','6','7','8','9','A','B','C','D','E','F'];
  const generateColor = () => {
    let newColor;
    
    if (colorType === 'HEX') {
      let hexColor = '#';
      for (let i = 0; i < 6; i++) {
        hexColor += hexChars[RadombByLenght(16)];
      }
      newColor = hexColor;
    } else if (colorType === 'RGB') {
      let r = RadombByLenght(256);
      let g = RadombByLenght(256);
      let b = RadombByLenght(256);
      newColor = `rgb(${r},${g},${b})`;
    }

    setColor(newColor);

    // Agrega el nuevo color y actualiza el índice
    setColors(prevColors => {
      const updatedColors = [...prevColors, newColor];
      setColorIndex(updatedColors.length - 1); // Actualiza el índice al último color
      return updatedColors;
    });
  }

  function setHex() {
    setColorType('HEX');
    setColor('#000000');
  }

  function setRGB() {
    setColorType('RGB');
    setColor('rgb(0,0,0)');
  }

  function back() {
    if (colorIndex > 0) {
      setColorIndex(prevIndex => {
        const newIndex = prevIndex - 1;
        setColor(colors[newIndex]); // Usa el nuevo índice
        return newIndex;
      });
    }
  }

  function next() {
    if (colorIndex < colors.length - 1) {
      setColorIndex(prevIndex => {
        const newIndex = prevIndex + 1;
        setColor(colors[newIndex]); // Usa el nuevo índice
        return newIndex;
      });
    }
  }

  return (
    <div className='randomcolor'>
        <div className='buttons-container'>
        <button onClick={() => setHex()}>HEX Colors</button>
        <button onClick={() => setRGB()}>RGB Colors</button>
        <button onClick={generateColor}>Ramdom Color</button>
        </div>
        <div className='color-container'
          style={{backgroundColor: color}}>
          <h3>{colorType} Color</h3>
          <h3>{color}</h3>
        </div>
        <div className='buttons-container'>
          <button onClick={back}>{`<`}</button>
          <button onClick={copyColor} >Copy</button>
          <button onClick={next}>{`>`}</button>
        </div>
    </div>
  )
}
