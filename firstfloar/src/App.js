import React from 'react';
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom';
import Header from './components/header';
import Footer from './components/Footer';
import MainContent from './components/MainContent';
import './App.css'
function App() {
  return (
    
    <Router>
      <Header />
<MainContent/>
      <Footer />
    </Router>
  );
}

export default App;

