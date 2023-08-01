import './App.css';
import Navbar from './components/Navbar';
import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './components/pages/Home';
import About from './components/About';
import Contact from './components/Footer';
import Projects from './components/Card';

function App() {
  return (
    <>
    <Router>
      <Navbar/>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path = '/about' element={<About/>}/>
            <Route path = '/projects' element={<Projects/>}/>
            <Route path = '/contact-me' element={<Contact/>}/>
          </Routes>
        </Router>
    </>  
  );
}

export default App;

