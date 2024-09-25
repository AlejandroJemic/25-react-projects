import './App.css';
import Accordion from './components/01Accordion';

function App() {
  return (
    <div className="App">
      <header className="App-header">25 React Projects</header>
      <div style={{ overflow_y: 'scroll', justifyContent: 'center' }}>
        <h2>Accordion</h2>
        <Accordion />
      </div>
    </div>
  );
}

export default App;
