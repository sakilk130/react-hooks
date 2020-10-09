import React, { useEffect, useRef } from 'react';

function RefOne() {
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, []);
  return (
    <div>
      <br />
      <input ref={inputRef} type="text" />
    </div>
  );
}

export default RefOne;
