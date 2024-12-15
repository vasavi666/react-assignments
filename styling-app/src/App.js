import React from 'react';
import './styles.css';  
import styles from './Button.module.css'; 
import styled from 'styled-components';  
 
const StyledComponent = styled.div`
  background-color: violet;
  padding: 15px;
  border-radius: 10px;
`;

function App() {
  return (
    <div> 
      <div
        style={{
          backgroundColor: 'blue',
          padding: '10px',
          borderRadius: '5px',
          color:'white',
        }}
      >
        <p className="myClass">Styled with CSS Class</p>
        Inline Styling Example
      </div> 
      <button className={styles.button}>Styled with CSS Module</button> 
      <StyledComponent>Styled with CSS-in-JS</StyledComponent>
    </div>
  );
}

export default App;
