import React, { useState, useEffect } from 'react';

function UseEffectTwo() {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);

  const logPosition = (e) => {
    setX(e.clientX);
    setY(e.clientX);
  };
  useEffect(() => {
    window.addEventListener('mousemove', logPosition);
    return () => {
      console.log('Toggle display');
      window.removeEventListener('mousemove', logPosition);
    };
  });
  return (
    <div>
      <h3>
        X-({x})---Y-({y})
      </h3>
    </div>
  );
}

export default UseEffectTwo;
