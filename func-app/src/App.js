import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() { 
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>Welcome</h2>
        <h3>Hello! Let's Increment the count by clicking count Button</h3>
        <h2>Count: {count}</h2>  
        
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
        <button onClick={() => setCount((prevCount) => prevCount + 1)}>
          Increment
        </button>
      </header>
    </div>
  );
}

export default App;
