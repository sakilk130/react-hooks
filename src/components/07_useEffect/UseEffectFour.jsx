import React, { useState, useEffect } from 'react';

function UseEffectFour() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(counter, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [count]);
  const counter = () => {
    setCount(count + 1);
  };
  return (
    <div>
      <h2>Auto Counter</h2>
      <h3>{count}</h3>
    </div>
  );
}

export default UseEffectFour;
