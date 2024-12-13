 import './App.css';
import React, { useState } from 'react';
import EventHandler from './EventHandler';

const App = ()=>{
  const [username, setUsername]=useState('');
  const [password, setPassword]=useState('');
  const [showMessage, setShowMessage] = useState(false);
 
  return (
    <div className="App">
       <label htmlFor="username">Username : </label>
       <input 
       type="text"
       placeholder="Enter Username"
       value={username}
       onChange={(e) => setUsername(e.target.value)}
       />
       <br></br>
        <label htmlFor="password">Password : </label>
          <input 
       type="password"
       placeholder="Enter password"
       value={password}
       onChange={(e) => setPassword(e.target.value)}
       />
      <br></br>
      <br></br>
<button onClick={() => setShowMessage(!showMessage)}>
  Toggle Message
</button>
{showMessage && (
<p>Hello {username}! This is React Event Handling!</p>
)
}
      
    </div>
  );
}
<EventHandler />


export default App;
