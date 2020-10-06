import React from 'react';
import './App.css';
import HookCounter from './components/01_useState/HookCounter';
import HookCounterTwo from './components/02_useState/HookCounterTwo';
function App() {
  return (
    <div className="App">
      {/* <HookCounter /> */}

      <HookCounterTwo />
    </div>
  );
}

export default App;
