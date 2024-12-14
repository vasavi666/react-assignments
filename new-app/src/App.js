 import logo from './logo.svg';
import './App.css';
import Clock from './Clock';

function App() {
  return (
    <div className="App">
      <h1>HELLO VASAVI</h1>
      <p>i'm currently doing day2 of react assignment in skillcaptain</p>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Clock />
      </header>
    </div>
  );
}

export default App;
