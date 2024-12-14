import React, { useState } from 'react';
import './App.css';
function App() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email.includes('@')) {
      setEmailError('Invalid email format');
      return;
    }
    console.log('Form submitted successfully:', { username, email }); 
    setUsername('');
    setEmail('');
    setEmailError('');
  };
  return (
    <div className="App">
      <h1>React Form Handling</h1> 
    
<form>
<label>Username:</label>
  <input   
    type="text"
    value={username}
    onChange={(e) => setUsername(e.target.value)}
    placeholder="Enter Username"
  />
  <br></br>
  <label>User Email:</label>
  <input
    type="email"
    value={email}
    onChange={(e) => {
      setEmail(e.target.value);
      setEmailError('');
    }}
    placeholder="Enter Email"
  />
  {emailError && <p style={{ color: 'red' }}>{emailError}</p>}
  <br></br>
  <button type="submit">Submit</button>
</form>
<h1>uncontrolled components</h1>
<form>
  <label>Username:</label>
  <input type="text" placeholder="Enter Username" /><br></br>
  <label>User Email:</label>
  <input type="email" placeholder="Enter Email" /><br></br>
  <button type="submit">Submit</button>
</form>
    </div>
  );
}

export default App;
