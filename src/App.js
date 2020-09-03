import React from 'react';
import logo from './logo.svg';
import './App.css';
import Hello from './Hello';

function App({name,age}) {
  return <div>


<h1>Using React Library Name = {name} , Age = {age}</h1>
<br/>
    <Hello firstName = {name}></Hello>

    </div>
  
}

export default App;
