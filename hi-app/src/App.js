import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
  
function Home() {
  return (
    <div class="home">
      <h2>Welcome to the SKILL CAPTAIN Home Page!</h2>
      <p>
        <Link to="/about">Learn more about us</Link>
      </p>
    </div>
  );
}
 
function About() {
  return (
    <div class="about">
      <h2>About Us</h2>
      <p>
        <Link to="/home">Back to Home</Link>
      </p>
    </div>
  );
}
 
function App() {
  return (
    <Router>
      <nav>
        <ul>
          <li>
            <Link to="/home">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router> 
  );
}

export default App;
