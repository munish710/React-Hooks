import React, { useReducer } from 'react';
import HookCounter from './components/HookCounter';
import './App.css'
import HookCounterTwo from './components/HookCounterTwo';
import HookState from './components/HookState'
import HookArray from './components/HookArray';
import HookEffect from './components/HookEffect'
import HookEffectTwo from './components/HookEffectTwo';
import MouseWrapper from './components/MouseWrapper';
import HookTimer from './components/HookTimer';
import DataFetching from './components/DataFetching';
import ComponentC from './components/ComponentC';
import ReducerCounter from './components/ReducerCounter';
import ReducerCounterTwo from './components/ReducerCounterTwo';
import ReducerCounterThree from './components/ReducerCounterThree';
import DataFetchingTwo from './components/DataFetchingTwo';
import HookMemo from './components/HookMemo';
import RefFocus from './components/RefFocus';
import RefTimer from './components/RefTimer';


export const UserContext=React.createContext()
export const SuperheroContext=React.createContext()
//Managing Global State for count i.e useReducer()+useContext()==Redux lite.
export const CountContext=React.createContext()
const initialState=0
const reducer=(state,action)=>{
  switch(action){
      case 'increment':
          return state+1
      case 'decrement':
          return state-1
      case 'reset':
          return initialState
       default:
           return state

  }
}
//useReducer()+useContext()
function App() {
  const[count,dispatch]=useReducer(reducer,initialState)
  return (
    <div className="App">
    <RefTimer/>
      {/*<RefFocus/>
     <HookMemo/>
    <DataFetchingTwo/>
    <CountContext.Provider value={{countValue:count,countDispatch:dispatch}}>
    <ComponentC/>
    </CountContext.Provider>
    
    <ReducerCounterThree/>
    <ReducerCounterTwo/>
     ReducerCounter/>
     <UserContext.Provider value={'Munish'}>
        <SuperheroContext.Provider value={'Batman'}>
          <ComponentC />
        </SuperheroContext.Provider>
      </UserContext.Provider>
    <DataFetching/>
      <HookTimer/>
      <MouseWrapper/>
      <HookEffectTwo/>
      <HookEffect/>
      <HookArray/>
      <HookState/>
      <HookCounterTwo/>
      <HookCounter */}
    </div>
  );
}

export default App;
