import React from 'react';
import './App.css'; 

function App() {
  const items = ['Apple', 'Banana', 'Orange', 'Mango'];

  return (
    <div className="App">
      <h1>Fruit's List</h1>
      <ul className="fruit-list">
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;

