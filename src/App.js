import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/transversales/Header'
import Cyber from './components/pages/Cyber'



function App() {
  return (
    <div className="App">
      <Header></Header>
      <main className="main-container">
        <Cyber name="Ciber BT"></Cyber>
      </main>
      
      
    </div>
  );
}

export default App;
