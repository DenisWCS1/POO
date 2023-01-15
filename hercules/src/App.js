import React, { useState } from 'react';
import Fight from './components/Fight';
import Fighters from './components/Fighters';

import './App.css';

function App() {
  return (
    <div>
      {Fighters.map((value, i) => (
        <Fight key={i} {...value} />
      ))}
    </div>
  );
}

export default App;

