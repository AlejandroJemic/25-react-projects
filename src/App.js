import './App.css';
import Accordion from './components/01-accordion';
import RandomColor from './components/02-ramdom-color/random-color';
import ColorMatrix from './components/02-ramdom-color/color-matrix';
import StarsRating from './components/03-stars-rating';
import ImageSlider from './components/04-image-slider';
import LoadMore from './components/05-products-loader';
import MenuList from './components/06-tree-view';
import QrCodeGenerator from './components/07-qr-code';
import ThemeToggle from './components/08-theme-toggle';
import ScrollIndicator from './components/09-scroll-indicator';
import TabsPanel from './components/10-tabs-panel';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        25 React Projects
        <ScrollIndicator />
      </header>
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
        <h2>Products loader</h2>
        <LoadMore />
        <h2>Menu Bar ( recursive )</h2>
        <MenuList />
        <h2>QR code generator</h2>
        <QrCodeGenerator />
        <h2>Theme Toggle</h2>
        <ThemeToggle />
        <h2>Scroll Indicator (in the top of the page)</h2>
        {/* See <ScrollIndicator /> component*/}
        <h2>Tabs Panel</h2>
        <TabsPanel />
      </div>
    </div>
  );
}

export default App;
