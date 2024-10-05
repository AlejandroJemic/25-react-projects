import React from 'react';
import './styles.css';
import useLocalStorage from '../../hooks/useLocalStorage';

export default function ThemeToggle() {
  const [theme, setTheme] = useLocalStorage('theme', 'light');

  function thmeToggle(){
    setTheme(theme === 'light' ? 'dark' : 'light');
  }

  return(
  <div className="theme-container" data-theme={theme}>
    <h3>current theme: {theme}</h3>
    <p>
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Error id
      excepturi maxime non recusandae totam eligendi at quasi aperiam fuga! Aut
      repudiandae aperiam praesentium hic tenetur id quia sit magni!
    </p>
    <button onClick={thmeToggle}>
      {theme === 'light' ? 'set dark' : 'set light'}
    </button>
  </div>);
}
