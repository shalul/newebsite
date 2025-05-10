import './App.css';
import Navbar from './components/Navbar';
import React, {useEffect} from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './components/pages/Home';
import About from './components/About';
import Contact from './components/Footer';
import Resume from './components/Resume';
import Projects from './components/Card';


function App() {
  useEffect(() => {
    fetch("/api")
    .then((res) => res.json())
    .then((data) => {console.log(data)})
  }, []);

  return (
    <>
    <Router>
      <Navbar/>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path = '/about' element={<About/>}/>
            <Route path = '/projects' element={<Projects/>}/>
            <Route path = '/resume' element={<Resume/>}/>
            <Route path = '/contact-me' element={<Contact/>}/>
          </Routes>
        </Router>
    </>  
  );
}

export default App;
