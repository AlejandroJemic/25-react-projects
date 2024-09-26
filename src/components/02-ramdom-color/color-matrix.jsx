import React, { useEffect } from 'react';

const generateHexColors = () => {
  const colors = [];
  for (let r = 0; r < 16; r++) {
    for (let g = 0; g < 16; g++) {
      for (let b = 0; b < 16; b++) {
        // Convertir r, g, b a hexadecimal con padding de 0
        const hexColor = `${r.toString(16)}${g.toString(16)}${b.toString(16)}`;
        // Agregar el formato correcto (#000 hasta #fff)
        colors.push(`#${hexColor}`);
      }
    }
  }
  return colors;
};

const colors = [];
export default function ColorMatrix() {
  const [gridColors, setColors] = React.useState(colors);
  const [colorsArray, setColorsArray] = React.useState([]);
  const [color, setColor] = React.useState('#000000');

  useEffect(() => {
    setColors(generateHexColors);
  }, []);

  function selectColor(newColor) {
    setColor(newColor);

    setColorsArray((prevColors) => {
      const updatedColors = [...prevColors, newColor];
      return updatedColors;
    });
  }

  
  function copyColor(color) {
    navigator.clipboard.writeText(color);
    alert('Color copied: ' + color);
  }

  function exportColors(){
    navigator.clipboard.writeText(colorsArray.join(' - '));
    alert('All colors copied');
  }

  const getLuminance = (color) => {
    if (color.length === 4) {
      color = `#${color[1]}${color[1]}${color[2]}${color[2]}${color[3]}${color[3]}`;
    }
    const r = parseInt(color.slice(1, 3), 16) / 255;
    const g = parseInt(color.slice(3, 5), 16) / 255;
    const b = parseInt(color.slice(5, 7), 16) / 255;
    const luminance = 0.2126 * r + 0.7152 * g + 0.0722 * b;
    return luminance;
  };

  const getContrastingTextColor = (bgColor) => {
    const luminance = getLuminance(bgColor);
    return luminance > 0.5 ? '#000000' : '#FFFFFF'; // Si es claro, texto oscuro, si es oscuro, texto claro.
  };

  return (
    <>
      <div className="colorsArray-header">
        <div className="colorsArray-container">
          {colorsArray && colorsArray.length > 0
            ? colorsArray.map((color, index) => (
                <div
                  key={index}
                  onClick={() => copyColor(color)}
                  className="colorsArray-cell"
                  style={{
                    backgroundColor: color,
                    color: getContrastingTextColor(color),
                  }}
                >
                  {color}
                </div>
              ))
            : `${'select colors'}`}
        </div>
        {colorsArray && colorsArray.length > 0 && (
          <div>
            <button onClick={() => setColorsArray([])}>Clear</button>
            <button onClick={() => exportColors()}>export</button>
          </div>
        )}
      </div>
      <div className="matrix-container">
        <div className="matrix-grid">
          {gridColors.map((color, index) => (
            <div
              onClick={() => selectColor(color)}
              key={index}
              className="matrix-cell"
              style={{ backgroundColor: color }}
            >
              <p style={{ color: getContrastingTextColor(color) }}>
                {`${color.toString().replace('#', '')}`}
              </p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
