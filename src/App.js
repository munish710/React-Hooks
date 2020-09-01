import React from 'react';
import HookCounter from './components/HookCounter';
import './App.css'
import HookCounterTwo from './components/HookCounterTwo';
import HookState from './components/HookState'
import HookArray from './components/HookArray';
import HookEffect from './components/HookEffect'
import HookEffectTwo from './components/HookEffectTwo';
import MouseWrapper from './components/MouseWrapper';

function App() {
  return (
    <div className="App">
    <MouseWrapper/>
      {/*<HookEffectTwo/>
      <HookEffect/>
      <HookArray/>
      <HookState/>
      <HookCounterTwo/>
      <HookCounter */}
    </div>
  );
}

export default App;
