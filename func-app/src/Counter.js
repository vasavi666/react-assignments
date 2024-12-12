import React, { useState, useEffect } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0); // State defined in Counter component

  useEffect(() => {
    const timer = setInterval(() => {
      setCount((prevCount) => prevCount + 1);
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div>
      <h1>Counter: {count}</h1>
    </div>
  );
};

export default Counter;
