import React from 'react';
import logo from './logo.svg';

import NavBar from './components/common/NavBar';
import YogaClasses from './components/YogaClasses';
import './App.css';

function App() {
  return (
    <div className="App">
      <NavBar />
      <YogaClasses />
    </div>
  );
}

export default App;
