import React from 'react';
import './App.css';
import { Greet } from './components/Greet';

function App() {
  return (
    <div className="App">
      <Greet name='Roger10' age={43} />
    </div>
  );
}

export default App;
