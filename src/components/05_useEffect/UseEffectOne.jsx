import React, { useState, useEffect } from 'react';

function UseEffectOne() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    document.title = `Count-${count} times`;
  });
  return (
    <div>
      <h3>Count-{count}</h3>
      <button onClick={() => setCount(count + 1)}>Count</button>
    </div>
  );
}

export default UseEffectOne;
