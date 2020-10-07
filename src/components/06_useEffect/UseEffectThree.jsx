import React, { useState, useEffect } from 'react';
import UseEffectTwo from './UseEffectTwo';

function UseEffectThree() {
  const [display, setDsiplay] = useState(true);
  return (
    <div>
      <h3>Toggle Display</h3>
      <button onClick={() => setDsiplay(!display)}>Toggle Display</button>
      {display && <UseEffectTwo />}
    </div>
  );
}

export default UseEffectThree;
