import React from 'react';
//import logo from './logo.svg';
//import './App.css';
import Header from './components/transversales/Header'
import Cyber from './components/pages/Cyber'
import Footer from './components/transversales/Footer';



function App() {
  return (
    <div className="App">
      <Header></Header>
      <main className="main-container">
        <Cyber name="Ciber BT"></Cyber>
      </main>
      <Footer/>
    </div>
  );
}

export default App;
