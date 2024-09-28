import './App.css';
import Accordion from './components/01-accordion';
import RandomColor from './components/02-ramdom-color/random-color';
import ColorMatrix from './components/02-ramdom-color/color-matrix';
import StarsRating from './components/03-stars-rating';
import ImageSlider from './components/04-image-slider';

function App() {
  return (
    <div className="App">
      <header className="App-header">25 React Projects</header>
      <div style={{ overflow_y: 'scroll', justifyContent: 'center' }}>
        <h2>Accordion</h2>
        <Accordion />
        <h2>Random Color Generator</h2>
        <RandomColor />
        <h2>HEX Color Matrix</h2>
        <ColorMatrix />
        <h2>Stars Rating</h2>
        <StarsRating StarsNumber={10} />
        <h2>Now Playing Slider</h2>
        <ImageSlider />
      </div>
    </div>
  );
}

export default App;
