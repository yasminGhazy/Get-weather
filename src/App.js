import React from 'react';
import './App.css';
import Main from './components/main/weather.js';
import Header from './components/header/header.js';
function App() {
  return (
    <div className="App">
      <Header />
     
      <Main />

    </div>
  );
}

export default App;
