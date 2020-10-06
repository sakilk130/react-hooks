import React from 'react';
import './App.css';
import HookCounter from './components/01_useState/HookCounter';
import HookCounterTwo from './components/02_useState/HookCounterTwo';
import HookCounterThree from './components/03_useState/HookCounterThree';
import HookCounterFour from './components/04_useState/HookCounterFour';
import UseEffectOne from './components/05_useEffect/UseEffectOne';
import UseEffectTwo from './components/06_useEffect/UseEffectTwo';
function App() {
  return (
    <div className="App">
      {/* <HookCounter /> */}

      {/* <HookCounterTwo /> */}

      {/* <HookCounterThree /> */}

      {/* <HookCounterFour /> */}

      {/* <UseEffectOne /> */}

      <UseEffectTwo />
    </div>
  );
}

export default App;
